"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          playerVars?: Record<string, number>;
          events?: {
            onReady?: () => void;
            onStateChange?: (event: { data: number }) => void;
          };
        }
      ) => {
        destroy: () => void;
        playVideo: () => void;
        pauseVideo: () => void;
        mute: () => void;
        unMute: () => void;
        isMuted: () => boolean;
        seekTo: (seconds: number, allowSeekAhead: boolean) => void;
        getDuration: () => number;
        getCurrentTime: () => number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youTubeApiPromise: Promise<void> | null = null;

const loadYouTubeApi = () => {
  if (youTubeApiPromise) {
    return youTubeApiPromise;
  }

  youTubeApiPromise = new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.youtube.com/iframe_api"]'
    );

    if (existingScript) {
      const currentReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        currentReady?.();
        resolve();
      };
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    const currentReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      currentReady?.();
      resolve();
    };
    document.head.appendChild(script);
  });

  return youTubeApiPromise;
};

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "0:00";
  }

  const whole = Math.floor(seconds);
  const mins = Math.floor(whole / 60);
  const secs = whole % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const parseYouTubeSource = (src: string) => {
  try {
    const parsed = new URL(src);
    const host = parsed.hostname.toLowerCase();
    let videoId = "";

    if (host.includes("youtu.be")) {
      videoId = parsed.pathname.replace("/", "");
    } else if (host.includes("youtube.com")) {
      if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.replace("/embed/", "").split("/")[0] ?? "";
      } else {
        videoId = parsed.searchParams.get("v") ?? "";
      }
    }

    const start =
      Number(parsed.searchParams.get("start") ?? parsed.searchParams.get("t") ?? "0") || 0;

    return {
      videoId,
      startSeconds: Math.max(0, start),
    };
  } catch {
    return { videoId: "", startSeconds: 0 };
  }
};

type YouTubePlayerProps = {
  src: string;
  title: string;
  accent: string;
};

export default function YouTubePlayer({ src, title, accent }: YouTubePlayerProps) {
  const playerId = useId().replace(/:/g, "");
  const holderId = `yt-player-${playerId}`;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<InstanceType<NonNullable<typeof window.YT>["Player"]> | null>(null);
  const tickRef = useRef<number | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const parsed = useMemo(() => parseYouTubeSource(src), [src]);

  useEffect(() => {
    let isMounted = true;

    const syncProgress = () => {
      const player = playerRef.current;
      if (!player || !isMounted) {
        return;
      }

      const nextDuration = player.getDuration();
      const nextTime = player.getCurrentTime();
      setDuration(Number.isFinite(nextDuration) ? nextDuration : 0);
      setCurrentTime(Number.isFinite(nextTime) ? nextTime : 0);
      tickRef.current = window.setTimeout(syncProgress, 250);
    };

    if (!parsed.videoId) {
      return () => {
        isMounted = false;
      };
    }

    loadYouTubeApi().then(() => {
      if (!isMounted || !window.YT?.Player) {
        return;
      }

      playerRef.current = new window.YT.Player(holderId, {
        videoId: parsed.videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          fs: 1,
          playsinline: 1,
          start: parsed.startSeconds,
        },
        events: {
          onReady: () => {
            if (!isMounted) {
              return;
            }
            setIsReady(true);
            setIsMuted(playerRef.current?.isMuted() ?? false);
            syncProgress();
          },
          onStateChange: (event) => {
            setIsPlaying(event.data === 1);
          },
        },
      });
    });

    return () => {
      isMounted = false;
      if (tickRef.current) {
        window.clearTimeout(tickRef.current);
      }
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [holderId, parsed.startSeconds, parsed.videoId]);

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player) {
      return;
    }

    if (isPlaying) {
      player.pauseVideo();
      return;
    }
    player.playVideo();
  };

  const toggleMute = () => {
    const player = playerRef.current;
    if (!player) {
      return;
    }

    if (player.isMuted()) {
      player.unMute();
      setIsMuted(false);
      return;
    }

    player.mute();
    setIsMuted(true);
  };

  const onSeek = (value: number) => {
    const player = playerRef.current;
    if (!player) {
      return;
    }

    player.seekTo(value, true);
    setCurrentTime(value);
  };

  const toggleFullscreen = () => {
    if (!wrapperRef.current) {
      return;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => undefined);
      return;
    }
    wrapperRef.current.requestFullscreen().catch(() => undefined);
  };

  if (!parsed.videoId) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-sm text-white/60">
        Invalid YouTube URL
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      <div id={holderId} className="h-full w-full" aria-label={title} />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

      {!isPlaying ? (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 bg-black/55 px-7 py-3 text-xs uppercase tracking-[0.25em] text-white backdrop-blur transition hover:bg-black/75"
          style={{ boxShadow: `0 0 0 1px ${accent}55, 0 0 24px ${accent}66` }}
        >
          Play
        </button>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 border-t border-white/15 bg-black/65 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-sm">
        <button
          type="button"
          onClick={togglePlay}
          className="rounded border border-white/25 px-3 py-1.5 transition hover:bg-white/10"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          className="rounded border border-white/25 px-3 py-1.5 transition hover:bg-white/10"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>

        <input
          type="range"
          min={0}
          max={Math.max(duration, 0)}
          value={Math.min(currentTime, Math.max(duration, 0))}
          onChange={(event) => onSeek(Number(event.target.value))}
          className="h-1 flex-1 cursor-pointer accent-white"
          aria-label="Seek"
          disabled={!isReady}
        />

        <span className="tabular-nums text-white/80">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <button
          type="button"
          onClick={toggleFullscreen}
          className="rounded border border-white/25 px-3 py-1.5 transition hover:bg-white/10"
        >
          Full
        </button>
      </div>
    </div>
  );
}

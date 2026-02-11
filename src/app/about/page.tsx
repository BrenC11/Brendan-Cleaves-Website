import type { CSSProperties } from "react";
import { aboutBio, awards } from "@/data/site";

const selectedAwards = awards.slice(0, 4);

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container flex flex-col gap-10">
        <div className="max-w-3xl">
          <p className="eyebrow">About</p>
          <h1 className="display">{aboutBio.headline}</h1>
          <div className="mt-6 space-y-4 text-white/70">
            {aboutBio.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {aboutBio.affiliations.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="eyebrow">Selected Festivals & Awards</p>
          <p className="text-sm text-white/60">100+ festival screenings worldwide including BAFTA and Academy-qualifying events.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {selectedAwards.map((item) => (
            <div key={item.title} className="card p-6" style={{ "--accent": "#2f2f2f" } as CSSProperties}>
              <h2 className="text-lg uppercase tracking-[0.2em]">{item.title}</h2>
              {item.cycle ? <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/60">{item.cycle}</p> : null}
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {item.list.slice(0, 5).map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

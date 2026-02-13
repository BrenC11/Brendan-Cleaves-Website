import type { CSSProperties } from "react";
import { aboutBio, awards } from "@/data/site";

const totalEntries = awards.reduce((sum, item) => sum + item.list.length, 0);
const sortAwardEntries = (entries: string[]) => {
  const nonWinners = entries.filter((entry) => !/\bwinner\b/i.test(entry));
  const winners = entries.filter((entry) => /\bwinner\b/i.test(entry));
  return [...winners, ...nonWinners];
};

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
          <p className="eyebrow">Festivals, Awards & Nominations</p>
          <p className="text-sm text-white/60">
            {totalEntries} listed selections, wins, and nominations across {awards.length} projects.
          </p>
        </div>

        <div className="grid gap-4">
          {awards.map((item) => (
            <details
              key={item.title}
              className="card p-6"
              style={{ "--accent": "#2f2f2f" } as CSSProperties}
            >
              <summary className="cursor-pointer list-none">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg uppercase tracking-[0.2em]">{item.title}</h2>
                    {item.cycle ? (
                      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">{item.cycle}</p>
                    ) : null}
                  </div>
                  <span className="tag">{item.list.length} entries</span>
                </div>
              </summary>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {sortAwardEntries(item.list).map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

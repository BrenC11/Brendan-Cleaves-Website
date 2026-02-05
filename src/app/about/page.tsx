import type { CSSProperties } from "react";
import { awards } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container flex flex-col gap-10">
        <div className="max-w-3xl">
          <p className="eyebrow">About</p>
          <h1 className="display">A director obsessed with the human glitch.</h1>
          <div className="mt-6 space-y-4 text-white/70">
            <p>
              Starting out by capturing the raw energy of Camden's local bands through my lens, I made a bold
              leap into promo directing, taking on roles as director, writer, and composer for my own projects.
              That early work led to a UK Music Video Award nomination and the start of a career driven by
              originality and unapologetic storytelling.
            </p>
            <p>
              Since then, I have directed music videos and commercials for both major brands and independent
              artists, always focused on bringing authentic, memorable stories to life. I wrote and directed my
              first genre short, ROGER, as proof of concept for a feature. To date, I have directed nine additional
              shorts and a documentary, with screenings at festivals worldwide.
            </p>
            <p>
              I strive to create stories that transport audiences beyond the expected, exploring characters and
              themes that challenge conventions. For me, filmmaking is about pushing boundaries, taking risks, and
              carving new paths for audiences who seek fresh perspectives in storytelling.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {awards.map((item) => (
            <div key={item.title} className="card p-6" style={{ "--accent": "#2f2f2f" } as CSSProperties}>
              <h2 className="text-lg uppercase tracking-[0.2em]">Awards & Nominations</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/60">{item.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {item.list.map((entry) => (
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

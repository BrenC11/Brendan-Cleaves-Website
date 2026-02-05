import type { CSSProperties } from "react";
import { photography } from "@/data/site";

export default function PhotographyPage() {
  return (
    <div className="section">
      <div className="container flex flex-col gap-10">
        <div>
          <p className="eyebrow">Photography</p>
          <h1 className="display">Portraits & Stories</h1>
          <p className="text-lg text-white/70">
            Film-forward portrait work and narrative stills with a focus on character and atmosphere.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photography.map((item) => (
            <div
              key={item.title}
              className="card flex min-h-[220px] flex-col justify-end p-6"
              style={{ "--accent": item.accent } as CSSProperties}
            >
              <p className="eyebrow">Series</p>
              <h2 className="text-xl uppercase tracking-[0.2em]">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";

type Props = {
  params: { category: string; slug: string };
};

export default function FilmProjectPage({ params }: Props) {
  const project = projects.find(
    (item) => item.category === params.category && item.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">{project.year}</p>
            <h1 className="display">{project.title}</h1>
          </div>
          <Link href={`/film/${project.category}`} className="tag">
            Back to {project.category.replace("-", " ")}
          </Link>
        </div>

        <div className="card flex min-h-[360px] flex-col gap-6 p-6" style={{ "--accent": project.accent } as CSSProperties}>
          {project.embedSrc ? (
            <div className="relative w-full overflow-hidden rounded-md border border-white/10 bg-black/60 pt-[56.25%]">
              <iframe
                src={project.embedSrc}
                title={`${project.title} video`}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div className="flex min-h-[240px] items-center justify-center text-sm uppercase tracking-[0.3em] text-white/70">
              Video Placeholder
            </div>
          )}
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
            <span>{project.runtime ?? "Runtime TBD"}</span>
            <span>HD / Stereo</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl uppercase tracking-[0.2em]">Logline</h2>
            <p className="text-white/70">{project.logline}</p>
            <h3 className="text-lg uppercase tracking-[0.2em]">Overview</h3>
            <p className="text-white/70">
              A bold, character-first short designed for festivals and digital release. Visual language is grounded,
              allowing flashes of surrealism to break through as the story turns.
            </p>
          </div>
          <div className="card flex flex-col gap-4 p-6" style={{ "--accent": "#2a2a2a" } as CSSProperties}>
            <p className="eyebrow">Project Details</p>
            <div className="text-sm text-white/70">
              <p>Category: {project.category.replace("-", " ")}</p>
              <p>Year: {project.year}</p>
              <p>Role: {project.role ?? "Director"}</p>
              <p>Runtime: {project.runtime ?? "TBD"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

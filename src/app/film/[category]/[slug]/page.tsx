import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { awards, filmCategories, projects } from "@/data/site";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    category: project.category,
    slug: project.slug,
  }));
}

export default async function FilmProjectPage({ params }: Props) {
  const { category, slug } = await params;
  const project = projects.find(
    (item) => item.category === category && item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const categoryLabel =
    filmCategories.find((item) => item.slug === project.category)?.label ?? project.category.replace("-", " ");
  const showAboutProject = project.slug === "crack-hack";
  const awardsTitleBySlug: Record<string, string> = {
    roger: "Roger - Short Film",
    "for-living-next-door-to-alex": "Living Next Door to Alex",
    "knock-knock-knock": "Knock, Knock, (Knock)",
  };
  const matchedAwards = awards.find(
    (item) => item.title === (awardsTitleBySlug[project.slug] ?? project.title)
  );

  return (
    <div className="section">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">{project.year}</p>
            <h1 className="display">{project.title}</h1>
          </div>
          <Link href={`/film/${project.category}`} className="tag">
            Back to {categoryLabel}
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
            <div className="flex min-h-[240px] flex-col items-center justify-center gap-3 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">In Development</p>
              <p className="max-w-md text-sm text-white/60">Video or teaser coming soon.</p>
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
            {matchedAwards ? (
              <>
                <h3 className="text-xl uppercase tracking-[0.2em]">
                  Awards & Nominations ({matchedAwards.list.length})
                </h3>
                {matchedAwards.cycle ? (
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{matchedAwards.cycle}</p>
                ) : null}
                <ul className="space-y-2 text-sm text-white/70">
                  {matchedAwards.list.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {showAboutProject ? (
              <>
                <h3 className="text-xl uppercase tracking-[0.2em]">About the Project</h3>
                <p className="whitespace-pre-line text-white/70">{project.description}</p>
              </>
            ) : null}
          </div>
          <div className="card flex flex-col gap-4 p-6" style={{ "--accent": "#2a2a2a" } as CSSProperties}>
            <p className="eyebrow">Project Details</p>
            <div className="text-sm text-white/70">
              <p>Category: {categoryLabel}</p>
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

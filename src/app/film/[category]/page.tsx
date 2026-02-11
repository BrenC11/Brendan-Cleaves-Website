import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { filmCategories, projects } from "@/data/site";

type Props = {
  params: { category: string };
};

export default function FilmCategoryPage({ params }: Props) {
  const category = filmCategories.find((item) => item.slug === params.category);
  if (!category) {
    notFound();
  }

  const filtered = projects.filter((project) => project.category === params.category);

  return (
    <div className="section">
      <div className="container flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow">Film</p>
            <h1 className="display">{category.label}</h1>
          </div>
          <Link href="/film" className="tag">
            All categories
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/film/${project.category}/${project.slug}`}
              className="card relative flex min-h-[240px] flex-col justify-between overflow-hidden p-6"
              style={{ "--accent": project.accent } as CSSProperties}
            >
              {project.thumbnailSrc && (
                <>
                  <img
                    src={project.thumbnailSrc}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                </>
              )}
              <div className="relative z-10">
                <p className="eyebrow">{project.year}</p>
                <h2 className="mt-2 text-xl uppercase tracking-[0.2em]">{project.title}</h2>
                <p className="mt-3 text-sm text-white/70">{project.logline}</p>
              </div>
              <span className="relative z-10 text-xs uppercase tracking-[0.3em] text-white/70">View project</span>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-white/60">Projects for this section are coming soon.</p>
        )}
      </div>
    </div>
  );
}

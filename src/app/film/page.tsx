import Link from "next/link";
import type { CSSProperties } from "react";
import { filmCategories, projects } from "@/data/site";

export default function FilmPage() {
  return (
    <div className="section">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="eyebrow">Film</p>
          <h1 className="display">Selected Work</h1>
          <p className="text-lg text-white/70">
            Fiction, commercial, and music videos with a signature blend of dark humor and emotional grit.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filmCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/film/${category.slug}`}
              className="card flex min-h-[220px] flex-col justify-between p-6"
              style={{ "--accent": "#3f3f3f" } as CSSProperties}
            >
              <p className="eyebrow">Category</p>
              <h2 className="text-xl uppercase tracking-[0.2em]">{category.label}</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">View projects</span>
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
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
                <h3 className="mt-2 text-xl uppercase tracking-[0.2em]">{project.title}</h3>
                <p className="mt-3 text-sm text-white/70">{project.logline}</p>
              </div>
              <span className="relative z-10 text-xs uppercase tracking-[0.3em] text-white/70">View project</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
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
              className="group media-card card relative aspect-[2/3] overflow-hidden"
              style={{ "--accent": project.accent } as CSSProperties}
            >
              {project.thumbnailSrc && (
                <>
                  <Image
                    src={project.thumbnailSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/60" />
                </>
              )}
              <div className="absolute inset-x-0 bottom-0 z-10 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.25em] text-white/75">{project.year}</p>
                <h3 className="mt-2 text-lg uppercase tracking-[0.2em] text-white">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

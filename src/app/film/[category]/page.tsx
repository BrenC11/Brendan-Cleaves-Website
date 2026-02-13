import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { filmCategories, projects } from "@/data/site";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return filmCategories.map((item) => ({ category: item.slug }));
}

export default async function FilmCategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = filmCategories.find((item) => item.slug === categorySlug);
  if (!category) {
    notFound();
  }

  const filtered = projects.filter((project) => project.category === categorySlug);
  const sortedProjects =
    categorySlug === "fiction"
      ? [...filtered].sort((a, b) => {
          const aYear = Number.parseInt(a.year, 10);
          const bYear = Number.parseInt(b.year, 10);
          const aValue = Number.isFinite(aYear) ? aYear : -1;
          const bValue = Number.isFinite(bYear) ? bYear : -1;
          return bValue - aValue;
        })
      : filtered;
  const isPosterLayout = categorySlug === "fiction";
  const isLandscapeLayout = categorySlug === "commercial" || categorySlug === "music-videos";
  const gridClasses = isPosterLayout
    ? "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    : "grid gap-6 md:grid-cols-2 lg:grid-cols-3";

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

        <div className={gridClasses}>
          {sortedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/film/${project.category}/${project.slug}`}
              className={`group media-card card relative overflow-hidden ${
                isPosterLayout ? "aspect-[2/3]" : isLandscapeLayout ? "aspect-video" : "min-h-[260px]"
              }`}
              style={{ "--accent": project.accent } as CSSProperties}
            >
              {project.thumbnailSrc && (
                <>
                  <Image
                    src={project.thumbnailSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`absolute inset-0 h-full w-full ${isPosterLayout ? "object-contain" : "object-cover"}`}
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/60" />
                </>
              )}
              <div className="absolute inset-x-0 bottom-0 z-10 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.25em] text-white/75">{project.year}</p>
                <h2 className="mt-2 text-lg uppercase tracking-[0.2em] text-white">{project.title}</h2>
              </div>
            </Link>
          ))}
        </div>

        {sortedProjects.length === 0 && (
          <p className="text-white/60">Projects for this section are coming soon.</p>
        )}
      </div>
    </div>
  );
}

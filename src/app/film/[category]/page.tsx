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
              className="card relative flex min-h-[260px] flex-col justify-between overflow-hidden p-6"
              style={{ "--accent": project.accent } as CSSProperties}
            >
              {project.thumbnailSrc && (
                <>
                  <Image
                    src={project.thumbnailSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="absolute inset-0 h-full w-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                </>
              )}
              <div className="relative z-10">
                <p className="eyebrow">{project.year}</p>
                <h2 className="mt-2 text-xl uppercase tracking-[0.2em]">{project.title}</h2>
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

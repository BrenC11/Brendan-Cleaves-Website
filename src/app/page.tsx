import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { filmCategories, projects } from "@/data/site";

const featuredProject = projects.find((project) => project.slug === "crack-hack") ?? projects[0];
const exploreProjectSlugs = [
  "the-tunnel",
  "angela",
  "the-dead-collectors",
  "roger",
  "the-lawnmower-men",
];
const exploreProjects = exploreProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

export default function Home() {
  return (
    <div>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Director / Writer</p>
            <h1 className="display">Simple stories. Sharp edges.</h1>
            <div className="flex flex-wrap gap-4">
              <Link href="/film" className="tag">
                View Work
              </Link>
              <Link href="/contact" className="tag">
                Contact
              </Link>
            </div>
          </div>
          <Link
            href={`/film/${featuredProject.category}/${featuredProject.slug}`}
            className="group media-card card relative aspect-[2/3] overflow-hidden"
            style={{ "--accent": featuredProject.accent } as CSSProperties}
          >
            {featuredProject.thumbnailSrc ? (
              <Image
                src={featuredProject.thumbnailSrc}
                alt={featuredProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-contain"
              />
            ) : null}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/55" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="eyebrow">Featured</p>
              <h2 className="mt-2 text-3xl uppercase tracking-[0.2em]">{featuredProject.title}</h2>
            </div>
          </Link>
        </div>
      </section>

      <section className="section-tight">
        <div className="container flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl uppercase tracking-[0.2em]">Explore</h2>
            <div className="flex flex-wrap gap-3">
              {filmCategories.map((category) => (
                <Link key={category.slug} href={`/film/${category.slug}`} className="tag">
                  {category.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {exploreProjects.map((project) => (
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/60" />
                  </>
                )}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-base uppercase tracking-[0.2em] text-white">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

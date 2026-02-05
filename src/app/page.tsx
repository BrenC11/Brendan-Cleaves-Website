import Link from "next/link";
import type { CSSProperties } from "react";
import { filmCategories, projects, site } from "@/data/site";

const featured = projects.slice(0, 4);

export default function Home() {
  return (
    <div>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Director / Writer</p>
            <h1 className="display">Films that cut straight through the noise.</h1>
            <p className="text-lg text-white/70">
              I am {site.name}, a UK-based director working across fiction, commercial, and music videos.
              I build bold, character-driven stories with a dark sense of humor and a taste for the surreal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/film" className="tag">
                Explore Film
              </Link>
              <Link href="/contact" className="tag">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="card flex min-h-[320px] flex-col justify-end p-8" style={{ "--accent": "#9e1b1b" } as CSSProperties}>
            <p className="eyebrow">Featured</p>
            <h2 className="text-3xl uppercase tracking-[0.2em]">The Lawnmower Men</h2>
            <p className="mt-3 text-sm text-white/70">
              A brooding short about two brothers chasing a rumor across a fading seaside town.
            </p>
            <Link href="/film/fiction/the-lawnmower-men" className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
              View project
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl uppercase tracking-[0.2em]">Featured Work</h2>
            <div className="flex flex-wrap gap-3">
              {filmCategories.map((category) => (
                <Link key={category.slug} href={`/film/${category.slug}`} className="tag">
                  {category.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/film/${project.category}/${project.slug}`}
                className="card flex min-h-[240px] flex-col justify-between p-6"
                style={{ "--accent": project.accent } as CSSProperties}
              >
                <div>
                  <p className="eyebrow">{project.category.replace("-", " ")}</p>
                  <h3 className="mt-3 text-xl uppercase tracking-[0.2em]">{project.title}</h3>
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/70">View project</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

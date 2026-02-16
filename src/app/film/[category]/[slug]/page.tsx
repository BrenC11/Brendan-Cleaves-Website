import Link from "next/link";
import type { CSSProperties } from "react";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { awards, filmCategories, projects } from "@/data/site";

type Props = {
  params: Promise<{ category: string; slug: string }>;
  searchParams: Promise<{ error?: string }>;
};

const sortAwardEntries = (entries: string[]) => {
  const nonWinners = entries.filter((entry) => !/\bwinner\b/i.test(entry));
  const winners = entries.filter((entry) => /\bwinner\b/i.test(entry));
  return [...winners, ...nonWinners];
};
const ANGELA_COOKIE = "angela_access";

async function unlockAngela(formData: FormData) {
  "use server";

  const password = String(formData.get("password") ?? "");
  const expected = process.env.ANGELA_PAGE_PASSWORD;

  if (expected && password === expected) {
    const cookieStore = await cookies();
    cookieStore.set(ANGELA_COOKIE, "ok", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/film/fiction/angela",
      maxAge: 60 * 60 * 24 * 30,
    });
    redirect("/film/fiction/angela");
  }

  redirect("/film/fiction/angela?error=1");
}

export function generateStaticParams() {
  return projects.map((project) => ({
    category: project.category,
    slug: project.slug,
  }));
}

export default async function FilmProjectPage({ params, searchParams }: Props) {
  const { category, slug } = await params;
  const query = await searchParams;
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
  const isAngelaPage = project.slug === "angela";
  const expectedAngelaPassword = process.env.ANGELA_PAGE_PASSWORD;

  if (isAngelaPage && expectedAngelaPassword) {
    const cookieStore = await cookies();
    const hasAccess = cookieStore.get(ANGELA_COOKIE)?.value === "ok";

    if (!hasAccess) {
      return (
        <div className="section">
          <div className="container max-w-xl">
            <div className="card flex flex-col gap-5 p-6" style={{ "--accent": project.accent } as CSSProperties}>
              <p className="eyebrow">Private Screener</p>
              <h1 className="text-2xl uppercase tracking-[0.16em]">{project.title}</h1>
              <p className="text-sm text-white/70">Enter password to view this page.</p>
              <form action={unlockAngela} className="flex flex-col gap-3">
                <input
                  type="password"
                  name="password"
                  required
                  className="rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/50"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
                >
                  Unlock
                </button>
              </form>
              {query.error ? <p className="text-sm text-red-300">Incorrect password.</p> : null}
            </div>
          </div>
        </div>
      );
    }
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
                  {sortAwardEntries(matchedAwards.list).map((entry) => (
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
              {project.website ? (
                <p>
                  Official Site:{" "}
                  <a href={project.website} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                    {project.website}
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

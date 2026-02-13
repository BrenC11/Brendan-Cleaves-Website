import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4 text-sm">
          {site.socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="inline-flex items-center gap-2 uppercase tracking-[0.3em]"
            >
              {social.label === "IMDb" ? (
                <span className="inline-flex items-center rounded-sm border border-white/30 px-1.5 py-0.5 text-[0.55rem] leading-none tracking-[0.15em]">
                  ID
                </span>
              ) : null}
              {social.label === "Instagram" ? (
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/30 text-[0.5rem] leading-none">
                  IG
                </span>
              ) : null}
              <span>{social.label}</span>
            </Link>
          ))}
        </div>
        <Link
          href={`mailto:${site.email}`}
          className="text-sm uppercase tracking-[0.3em] text-white"
        >
          {site.email}
        </Link>
      </div>
    </footer>
  );
}

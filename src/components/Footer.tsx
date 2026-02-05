import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4 text-sm">
          {site.socials.map((social) => (
            <Link key={social.label} href={social.href} className="uppercase tracking-[0.3em]">
              {social.label}
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

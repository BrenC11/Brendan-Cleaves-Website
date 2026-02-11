import Link from "next/link";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <div className="card flex flex-col gap-8 p-8">
          <p className="eyebrow">Contact</p>
          <h1 className="display">Let&apos;s work together.</h1>
          <a href={`mailto:${site.email}`} className="text-xl uppercase tracking-[0.2em]">
            {site.email}
          </a>
          <p className="max-w-xl text-white/70">
            Commissions, commercials, music videos, and narrative work.
          </p>
          <div className="flex flex-wrap gap-4">
            {site.socials.map((social) => (
              <Link key={social.label} href={social.href} className="tag">
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

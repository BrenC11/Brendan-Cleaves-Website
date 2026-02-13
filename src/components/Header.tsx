"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { filmCategories, site } from "@/data/site";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [filmMenuOpen, setFilmMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur">
      <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="display text-lg md:text-xl">
          {site.name}
        </Link>

        <nav className="flex flex-wrap items-center gap-6 text-sm">
          <div className="group relative">
            <button
              type="button"
              onClick={() => setFilmMenuOpen((open) => !open)}
              aria-expanded={filmMenuOpen}
              aria-haspopup="menu"
              className={`nav-link ${pathname?.startsWith("/film") ? "active" : ""}`}
            >
              Film
            </button>
            <div
              className={`absolute left-0 top-full pt-4 ${filmMenuOpen ? "block" : "hidden"} md:group-hover:block`}
            >
              <div className="min-w-[200px] rounded-xl border border-white/10 bg-black/95 p-4 shadow-xl">
                <p className="eyebrow mb-3 text-[0.6rem]">Explore</p>
                <div className="flex flex-col gap-2">
                  {filmCategories.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/film/${item.slug}`}
                      onClick={() => setFilmMenuOpen(false)}
                      className={`nav-link ${pathname === `/film/${item.slug}` ? "active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navLinks
            .filter((link) => link.label !== "Film")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}

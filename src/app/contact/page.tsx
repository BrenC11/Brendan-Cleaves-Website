import type { CSSProperties } from "react";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-6">
          <p className="eyebrow">Contact</p>
          <h1 className="display">Let's build something unforgettable.</h1>
          <a href={`mailto:${site.email}`} className="text-xl uppercase tracking-[0.2em]">
            {site.email}
          </a>
          <p className="text-white/70">
            For commissions, collaboration, or festival inquiries, drop a line and I will get back within 48 hours.
          </p>
        </div>

        <form className="card flex flex-col gap-4 p-6" style={{ "--accent": "#3a3a3a" } as CSSProperties}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
              First Name
              <input
                className="rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white"
                placeholder="First name"
                type="text"
              />
            </label>
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
              Last Name
              <input
                className="rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white"
                placeholder="Last name"
                type="text"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Email
            <input
              className="rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white"
              placeholder="you@email.com"
              type="email"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Message
            <textarea
              className="min-h-[120px] rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white"
              placeholder="Tell me about the project"
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-md border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

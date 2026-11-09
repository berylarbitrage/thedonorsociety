import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroArt } from "@/components/brand/hero-art";
import { SITE, spermComp } from "@/config/site";

export const metadata: Metadata = {
  title: "Apply to Become a Donor",
  description: `Choose your program: apply to become an egg donor (${SITE.eggComp}) or a sperm donor with ${SITE.brand}. The pre-screen takes about 3 minutes.`,
  alternates: { canonical: "/apply" },
};

const OPTIONS = [
  {
    href: "/apply/egg",
    title: "Egg donor",
    comp: SITE.eggComp,
    learn: "/egg-donor",
    art: "egg" as const,
  },
  {
    href: "/apply/sperm",
    title: "Sperm donor",
    comp: spermComp,
    learn: "/sperm-donor",
    art: "sperm" as const,
  },
];

export default function ApplyChooserPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="label-caps rule-ornament text-accent">Apply</p>
        <h1 className="mt-6 text-[2.4rem] leading-tight md:text-6xl">
          Which program are you applying for?
        </h1>
        <p className="text-muted mt-5 text-lg">The pre-screen takes about 3 minutes.</p>
      </header>
      <div className="border-ink mt-14 grid border md:grid-cols-2">
        {OPTIONS.map((o, i) => (
          <div
            key={o.href}
            className={`flex flex-col items-center px-6 py-12 text-center md:px-12 ${i === 0 ? "border-border border-b md:border-r md:border-b-0" : ""}`}
          >
            <HeroArt variant={o.art} className="text-ink size-24" />
            <h2 className="mt-8 text-3xl md:text-4xl">{o.title}</h2>
            <span className="bg-gold mt-5 block h-px w-8" aria-hidden />
            <p className="text-muted mt-5 min-h-12 text-sm leading-relaxed">{o.comp}</p>
            <Link
              href={o.href}
              className="bg-ink text-ivory mt-8 inline-flex h-13 w-full items-center justify-center gap-2 px-4 text-[0.72rem] font-medium tracking-[0.2em] uppercase transition-colors hover:bg-[#2b2a27] focus-visible:outline-2 focus-visible:outline-offset-3"
            >
              Apply as {o.title.toLowerCase()} <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href={o.learn}
              className="decoration-gold mt-5 block text-sm underline underline-offset-4"
            >
              Learn about the program first
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

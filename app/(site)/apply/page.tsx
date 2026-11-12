import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroArt } from "@/components/brand/hero-art";
import { TagLoop } from "@/components/brand/stitch-bits";
import { Em, Eyebrow } from "@/components/marketing/hero";
import { SITE, spermComp } from "@/config/site";

export const metadata: Metadata = {
  title: "Choose Your Program",
  description: `Start your application with ${SITE.brand}: egg donation (${SITE.eggComp}) or sperm donation. Either pre-screen takes about 3 minutes.`,
  alternates: { canonical: "/apply" },
};

const OPTIONS = [
  {
    href: "/apply/egg",
    title: "Egg donor",
    comp: SITE.eggComp,
    learn: "/egg-donor",
    art: "egg" as const,
    stitch: "var(--sage-deep)",
    loop: "var(--sage)",
  },
  {
    href: "/apply/sperm",
    title: "Sperm donor",
    comp: spermComp,
    learn: "/sperm-donor",
    art: "sperm" as const,
    stitch: "var(--thread)",
    loop: "var(--thread)",
  },
];

export default function ApplyChooserPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <Eyebrow center>Apply</Eyebrow>
        <h1 className="mt-5 text-[2.3rem] leading-tight md:text-[3.25rem]">
          Which pattern <Em>is yours?</Em>
        </h1>
        <p className="text-muted mt-5 text-lg">
          Pick the program that fits you. Each pre-screen takes about 3 minutes, and you can read
          more before you begin.
        </p>
      </header>
      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
        {OPTIONS.map((o) => (
          <div key={o.href} className="relative pt-7">
            <TagLoop
              className="absolute top-0 left-1/2 h-10 w-12 -translate-x-1/2"
              color={o.loop}
            />
            <div
              className="fabric-card stitched flex h-full flex-col items-center px-6 pt-10 pb-9 text-center md:px-10"
              style={{ ["--stitch" as string]: o.stitch }}
            >
              <HeroArt variant={o.art} className="h-auto w-36" />
              <h2 className="mt-6 text-3xl">{o.title}</h2>
              <p className="text-muted mt-3 min-h-12 leading-relaxed">{o.comp}</p>
              <Link
                href={o.href}
                className="stitched bg-thread hover:bg-thread-deep mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-[14px] px-4 font-sans font-bold text-white transition-colors [--stitch-inset:6px] [--stitch:rgba(255,255,255,0.85)]"
              >
                Apply as {o.title.toLowerCase()} <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href={o.learn}
                className="text-primary hover:text-ink mt-5 block rounded font-sans text-sm font-bold underline decoration-dashed underline-offset-4"
              >
                Read about this program first
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

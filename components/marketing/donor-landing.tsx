import Link from "next/link";
import { Em, Eyebrow, Hero } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { CheckList } from "@/components/marketing/check-list";
import { Timeline } from "@/components/marketing/timeline";
import { FabricLabel } from "@/components/marketing/fabric-label";
import { FaqList } from "@/components/marketing/faq-list";
import { StickyCta } from "@/components/marketing/sticky-cta";
import { Disclaimer } from "@/components/marketing/disclaimer";
import { JsonLd } from "@/components/marketing/jsonld";
import { CrossStitchRow, Pin } from "@/components/brand/stitch-bits";
import { Button } from "@/components/ui/button";
import { requirementsList, type DonorType } from "@/config/eligibility";
import { FAQ } from "@/content/faq";
import { faqJsonLd } from "@/lib/seo";

export interface DonorLandingContent {
  type: DonorType;
  hero: { eyebrow: string; title: React.ReactNode; subtitle: string };
  comp: { amount: string; covered: string[]; note?: React.ReactNode };
  partnerNote?: React.ReactNode;
  steps: { title: string; body: string }[];
  concerns: { title: string; body: string }[];
}

/** Fabric swatch tints for the "things you might be wondering" section. */
const SWATCHES = [
  { bg: "bg-sage-soft", stitch: "var(--sage-deep)" },
  { bg: "bg-primary-soft", stitch: "var(--thread)" },
  { bg: "bg-accent-soft", stitch: "#c79a2c" },
  { bg: "bg-fabric", stitch: "var(--sage-deep)" },
];

/**
 * Donor landing page laid out like an embroidery pattern card:
 * materials (requirements) beside the price label, then the steps along one
 * running-stitch thread, then common worries as fabric swatches.
 */
export function DonorLanding({ c }: { c: DonorLandingContent }) {
  const applyHref = `/apply/${c.type}`;
  const faq = FAQ[c.type];
  const tone = c.type === "egg" ? "sage" : "thread";
  return (
    <>
      <JsonLd data={faqJsonLd(faq.items)} />
      <Hero eyebrow={c.hero.eyebrow} title={c.hero.title} subtitle={c.hero.subtitle} art={c.type}>
        <Button asChild size="lg">
          <Link href={applyHref}>Start Your Application</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="#requirements">See Requirements</Link>
        </Button>
      </Hero>

      {/* The pattern card */}
      <section
        id="requirements"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-4 pb-14 md:pb-20"
        aria-labelledby="pattern-heading"
      >
        <div className="fabric-card stitched rounded-[2rem] px-5 py-10 [--stitch-inset:12px] [--stitch:var(--thread)] sm:px-10 md:px-14 md:py-14">
          <header className="flex flex-col gap-3 border-b-2 border-dashed border-[#cdb894] pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>The pattern card</Eyebrow>
              <h2 id="pattern-heading" className="mt-4 text-[2rem] leading-[1.15] md:text-[2.6rem]">
                What you&apos;ll need, <Em>and what you&apos;ll receive</Em>
              </h2>
            </div>
            <CrossStitchRow className="hidden w-32 shrink-0 md:block" />
          </header>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <h3 className="thread-label text-accent">What you&apos;ll need</h3>
              <div className="mt-4">
                <CheckList items={requirementsList(c.type)} />
              </div>
              <p className="text-muted mt-5 text-sm leading-relaxed">
                These are starting guidelines. Final eligibility is decided by our partner medical
                providers.
              </p>
              {c.partnerNote && (
                <p className="bg-accent-soft mt-6 rounded-2xl border-2 border-dashed border-[#d6a93b] px-5 py-4 text-sm leading-relaxed">
                  {c.partnerNote}
                </p>
              )}
            </div>

            <div>
              <FabricLabel who="Compensation" tone={tone} className="lg:rotate-1">
                {c.comp.amount}
                <p className="text-muted mt-4 text-base leading-relaxed font-normal">
                  {c.comp.note ??
                    "Paid for your time, effort, and commitment. Amounts vary by program."}
                </p>
              </FabricLabel>
              <h3 className="thread-label text-accent mt-8">Covered for you, at no cost</h3>
              <ul className="stitch-divide mt-3">
                {c.comp.covered.map((x) => (
                  <li key={x} className="flex items-start gap-3 py-3">
                    <span className="bg-knot mt-1.5 size-3 shrink-0 rounded-full" aria-hidden />
                    <span className="leading-relaxed">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="The process" title="Along the thread, step by step">
        <div className="mx-auto max-w-3xl">
          <Timeline steps={c.steps} />
        </div>
      </Section>

      <Section
        eyebrow="Gentle answers"
        title="Things you might be wondering about"
        intro="You deserve to decide with your eyes open. These answers are general — please speak with a physician about your own health."
      >
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-14">
          {c.concerns.map((x, i) => {
            const sw = SWATCHES[i % SWATCHES.length]!;
            return (
              <li
                key={x.title}
                className={`stitched relative rounded-[1.4rem] px-6 pt-10 pb-8 shadow-[0_14px_30px_-24px_rgba(60,42,42,0.45)] [--stitch-inset:10px] md:px-9 ${sw.bg} ${i % 2 ? "sm:translate-y-6" : ""}`}
                style={{ ["--stitch" as string]: sw.stitch }}
              >
                <span
                  className="bg-fabric text-muted absolute top-0 left-6 -translate-y-1/2 rounded-full border-2 border-dashed border-[#cdb894] px-3 py-0.5 font-sans text-xs font-bold"
                  aria-hidden
                >
                  Swatch {i + 1}
                </span>
                <h3 className="text-xl md:text-2xl">{x.title}</h3>
                <p className="text-muted mt-3 leading-relaxed">{x.body}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section eyebrow="FAQ" title={`${faq.title}, question by question`}>
        <div className="mx-auto max-w-3xl">
          <FaqList items={faq.items} />
        </div>
      </Section>

      {/* Closing invitation: a small pinned patch */}
      <section className="mx-auto max-w-3xl px-4 pt-6 pb-14">
        <div className="relative">
          <Pin className="absolute -top-6 left-1/2 z-10 h-14 w-10 -translate-x-1/2" />
          <div className="stitched bg-primary-soft rounded-[2rem] px-6 py-12 text-center [--stitch-inset:12px] [--stitch:var(--thread)]">
            <Eyebrow center>Begin</Eyebrow>
            <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.5rem]">
              Ready for the first stitch?
            </h2>
            <p className="text-muted mt-3">
              The pre-screen takes about 3 minutes, and nothing is decided until you say so.
            </p>
            <Button asChild size="lg" className="mt-7">
              <Link href={applyHref}>Start Your Application</Link>
            </Button>
            <CrossStitchRow className="mx-auto mt-8 w-32" />
          </div>
        </div>
      </section>

      <Disclaimer />
      <StickyCta href={applyHref} label="Start Your Application" note={c.comp.amount} />
    </>
  );
}

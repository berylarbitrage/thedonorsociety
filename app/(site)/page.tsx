import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Em, Hero } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { FabricLabel } from "@/components/marketing/fabric-label";
import { FaqList } from "@/components/marketing/faq-list";
import { ReferralBanner } from "@/components/marketing/referral-banner";
import { JsonLd } from "@/components/marketing/jsonld";
import {
  CrossStitchRow,
  Needle,
  StitchIcon,
  type SamplerIcon,
} from "@/components/brand/stitch-bits";
import { Button } from "@/components/ui/button";
import { SITE, spermComp } from "@/config/site";
import { HOME_FAQ } from "@/content/faq";
import { organizationJsonLd } from "@/lib/seo";

const STEPS = [
  {
    word: "One",
    title: "Send a short pre-screen",
    body: "A handful of simple questions, about 3 minutes from start to finish.",
  },
  {
    word: "Two",
    title: "Fill in your application",
    body: "Your answers save as you go, and your coordinator gets to know you.",
  },
  {
    word: "Three",
    title: "Meet your family",
    body: "Intended parents choose you; screening then takes place at a partner clinic.",
  },
  {
    word: "Four",
    title: "Receive your compensation",
    body: "Paid in recognition of your time, effort and commitment.",
  },
];

const SAMPLER: { icon: SamplerIcon; title: string; body: string }[] = [
  {
    icon: "coordinator",
    title: "Someone who knows your name",
    body: "Your own coordinator stays with you from the first form to the final day — call or text whenever a question comes up.",
  },
  {
    icon: "compensation",
    title: "Amounts you can see",
    body: "Compensation is set out plainly before you begin, and it rewards your time — never your looks, background or other personal traits.",
  },
  {
    icon: "privacy",
    title: "Kept close",
    body: "What you share is encrypted, never sold, and passed only to the partner clinics involved in your care.",
  },
  {
    icon: "worldwide",
    title: "Wherever you live",
    body: `${SITE.serviceArea}, with any program travel arranged and paid for.`,
  },
];

const PERKS = [
  "Medical costs fully covered",
  "Genetic testing at no charge",
  "Appointments around your life",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Hero
        art="home"
        eyebrow={SITE.subtitle}
        title={
          <>
            A family, <Em>stitched together with care.</Em>
          </>
        }
        subtitle="As an egg or sperm donor, you help someone become a parent. We take every step alongside you — one coordinator beside you, every medical cost paid, and compensation for your time."
        footnote={
          <ul className="text-muted flex flex-col gap-2 font-sans text-sm font-semibold sm:flex-row sm:flex-wrap sm:gap-x-6">
            {PERKS.map((label) => (
              <li key={label} className="flex items-center gap-2">
                <span className="bg-knot size-2.5 shrink-0 rounded-full" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        }
      >
        <Button asChild size="lg">
          <Link href="/egg-donor">Become an Egg Donor</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/sperm-donor">Become a Sperm Donor</Link>
        </Button>
      </Hero>

      {/* Why us — an embroidered sampler panel */}
      <section className="mx-auto max-w-6xl px-4 pt-2 pb-10 md:pb-16">
        <div className="fabric-card stitched rounded-[2rem] px-5 py-10 [--stitch-inset:12px] [--stitch:var(--thread)] sm:px-10 md:px-16 md:py-14">
          <CrossStitchRow className="mx-auto w-40" />
          <header className="mx-auto mt-6 max-w-2xl text-center">
            <p className="thread-label text-accent">Why donors choose us</p>
            <h2 className="mt-3 text-[2rem] leading-[1.15] md:text-[2.75rem]">
              Our promise, <Em>stitch by stitch</Em>
            </h2>
          </header>
          <ul className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 md:mt-12">
            {SAMPLER.map((s) => (
              <li
                key={s.title}
                className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left"
              >
                <span className="bg-linen flex size-20 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#cdb894]">
                  <StitchIcon name={s.icon} className="size-12" />
                </span>
                <div className="mt-4 sm:mt-1 sm:ml-5">
                  <h3 className="text-xl md:text-2xl">{s.title}</h3>
                  <p className="text-muted mt-2 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <CrossStitchRow className="mx-auto mt-10 w-40" />
        </div>
      </section>

      {/* Compensation — two sewn-in labels */}
      <Section
        eyebrow="Compensation"
        title={
          <>
            What we offer, <Em>clearly labelled</Em>
          </>
        }
      >
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 md:gap-10">
          <FabricLabel who="Egg donors" href="/egg-donor" tone="sage" className="md:-rotate-1">
            {SITE.eggComp}
          </FabricLabel>
          <FabricLabel who="Sperm donors" href="/sperm-donor" tone="thread" className="md:rotate-1">
            {spermComp}
          </FabricLabel>
        </div>
        <p className="text-muted mx-auto mt-8 max-w-2xl text-center text-sm">
          Amounts vary by program. Compensation is paid for your time, effort and commitment.
        </p>
      </Section>

      {/* How it works — four steps on one running stitch */}
      <Section eyebrow="How it works" title="From first thread to finished piece">
        <div className="relative">
          <span
            className="running-stitch-x absolute top-5 right-[12.5%] left-[12.5%] hidden lg:block"
            aria-hidden
          />
          <Needle className="absolute top-2 right-[3%] hidden h-6 w-16 lg:block" />
          <ol className="relative grid gap-9 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative pl-16 lg:pl-0 lg:text-center">
                {i < STEPS.length - 1 && (
                  <span
                    className="running-stitch-y absolute top-12 -bottom-8 left-[calc(1.25rem-1.5px)] lg:hidden"
                    aria-hidden
                  />
                )}
                <span
                  className="bg-knot absolute top-0 left-0 flex size-10 items-center justify-center rounded-full lg:static lg:mx-auto"
                  aria-hidden
                >
                  <span className="size-3 rounded-full border-2 border-[#b88a22]" />
                </span>
                <span
                  className={`font-script block text-[2rem] leading-tight lg:mt-4 ${i % 2 ? "text-sage-deep" : "text-thread"}`}
                >
                  {s.word}
                </span>
                <h3 className="mt-1 text-xl">{s.title}</h3>
                <p className="text-muted mt-2 leading-relaxed lg:mx-auto lg:max-w-[15rem]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* A few questions, with stitched dividers */}
      <Section eyebrow="Questions" title="Questions, answered with care">
        <div className="mx-auto max-w-3xl">
          <FaqList items={HOME_FAQ} />
          <p className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-primary hover:text-ink inline-flex items-center gap-2 rounded font-sans font-bold underline decoration-dashed underline-offset-4"
            >
              Read every answer <ArrowRight className="size-4" aria-hidden />
            </Link>
          </p>
        </div>
      </Section>

      <ReferralBanner />
    </>
  );
}

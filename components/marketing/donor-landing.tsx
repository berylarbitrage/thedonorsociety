import Link from "next/link";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { CheckList } from "@/components/marketing/check-list";
import { Timeline } from "@/components/marketing/timeline";
import { FaqList } from "@/components/marketing/faq-list";
import { StickyCta } from "@/components/marketing/sticky-cta";
import { Disclaimer } from "@/components/marketing/disclaimer";
import { JsonLd } from "@/components/marketing/jsonld";
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

export function DonorLanding({ c }: { c: DonorLandingContent }) {
  const applyHref = `/apply/${c.type}`;
  const faq = FAQ[c.type];
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

      {c.partnerNote && (
        <div className="mx-auto max-w-3xl px-4 pt-12">
          <p className="border-gold text-foreground border-l py-1 pl-5 text-sm leading-relaxed">
            {c.partnerNote}
          </p>
        </div>
      )}

      <Section id="requirements" eyebrow="Requirements" title="Who may apply">
        <div className="mx-auto max-w-4xl">
          <CheckList items={requirementsList(c.type)} />
          <p className="text-muted mt-6 text-center text-sm">
            These are initial guidelines. Final eligibility is determined by our partner medical
            providers.
          </p>
        </div>
      </Section>

      <section className="on-ink bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-20 md:py-28">
          <p className="label-caps rule-ornament text-gold-light text-center">Compensation</p>
          <h2 className="mt-6 text-center text-[2.1rem] leading-tight md:text-5xl">
            Compensation &amp; covered costs
          </h2>
          <div className="border-ink-line mt-12 border-y py-10 text-center">
            <p className="label-caps text-ink-muted">Compensation</p>
            <p className="mt-4 font-serif text-3xl leading-snug md:text-5xl">{c.comp.amount}</p>
            <p className="text-ink-muted mx-auto mt-5 max-w-lg text-sm leading-relaxed">
              {c.comp.note ??
                "Paid for your time, effort, and commitment. Amounts vary by program."}
            </p>
          </div>
          <p className="label-caps text-gold-light mt-12 text-center">Covered at no cost to you</p>
          <ul className="mt-6">
            {c.comp.covered.map((x) => (
              <li
                key={x}
                className="border-ink-line flex items-baseline justify-between gap-6 border-b py-4"
              >
                <span>{x}</span>
                <span className="label-caps text-gold-light shrink-0">Included</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section eyebrow="The process" title="What to expect, step by step">
        <div className="mx-auto max-w-3xl">
          <Timeline steps={c.steps} />
        </div>
      </Section>

      <div className="bg-muted-bg">
        <Section
          eyebrow="Your questions"
          title="Things you might be wondering about"
          intro="We want you to make an informed decision. These are general answers — please talk with a physician about your personal health."
        >
          <div className="border-border grid border-t md:grid-cols-2">
            {c.concerns.map((x, i) => (
              <div
                key={x.title}
                className={`border-border border-b py-8 md:px-10 ${i % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
              >
                <h3 className="text-2xl">{x.title}</h3>
                <p className="text-muted mt-3 leading-relaxed">{x.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section eyebrow="FAQ" title={`${faq.title} FAQ`}>
        <div className="mx-auto max-w-3xl">
          <FaqList items={faq.items} />
        </div>
      </Section>

      <section className="mx-auto max-w-3xl px-4 pb-16 text-center">
        <p className="label-caps rule-ornament text-accent">Begin</p>
        <h2 className="mt-6 text-3xl md:text-5xl">Ready to take the first step?</h2>
        <p className="text-muted mt-4">The pre-screen takes about 3 minutes.</p>
        <Button asChild size="lg" className="mt-8">
          <Link href={applyHref}>Start Your Application</Link>
        </Button>
      </section>

      <Disclaimer />
      <StickyCta href={applyHref} label="Start Your Application" note={c.comp.amount} />
    </>
  );
}

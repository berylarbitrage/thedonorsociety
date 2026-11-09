import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Em, Hero } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { FaqList } from "@/components/marketing/faq-list";
import { ReferralBanner } from "@/components/marketing/referral-banner";
import { JsonLd } from "@/components/marketing/jsonld";
import { toRoman } from "@/components/marketing/roman";
import { Button } from "@/components/ui/button";
import { SITE, spermComp } from "@/config/site";
import { HOME_FAQ } from "@/content/faq";
import { organizationJsonLd } from "@/lib/seo";

const PROCESS = [
  { title: "Apply", body: "Answer a few brief questions online. It takes about 3 minutes." },
  {
    title: "Complete your profile",
    body: "Finish your application online and meet your personal coordinator.",
  },
  {
    title: "Get matched with a family",
    body: "We introduce you to intended parents; screening follows at a partner clinic.",
  },
  { title: "Get compensated", body: "Receive compensation for your time and commitment." },
];

const PRINCIPLES = [
  {
    title: "A dedicated coordinator",
    body: "One person guides you through every step, and is there to answer your questions.",
  },
  {
    title: "Transparent compensation",
    body: "Clear amounts, stated up front. Compensation is for your time — never based on appearance, ethnicity or other personal traits.",
  },
  {
    title: "Discretion & privacy",
    body: "Your information is encrypted, never sold, and shared only with our partner clinics.",
  },
  {
    title: "Open to donors worldwide",
    body: `${SITE.serviceArea}.`,
  },
];

const PERKS = ["All medical costs covered", "Genetic testing at no cost", "Flexible scheduling"];

const MENU = [
  { href: "/egg-donor", who: "Egg donation", amount: SITE.eggComp },
  { href: "/sperm-donor", who: "Sperm donation", amount: spermComp },
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
            An invitation to give <Em>the gift of family.</Em>
          </>
        }
        subtitle="Become an egg or sperm donor and help someone become a parent — guided by a dedicated coordinator, with every medical cost covered and compensation for your time."
        footnote={
          <ul className="text-muted label-caps flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-0">
            {PERKS.map((label, i) => (
              <li key={label} className="flex items-center">
                {i > 0 && (
                  <span className="text-gold mx-5 hidden text-[0.5rem] sm:inline" aria-hidden>
                    ◆
                  </span>
                )}
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

      {/* Compensation, set like a menu card */}
      <section className="on-ink bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-20 md:py-28">
          <p className="label-caps rule-ornament text-gold-light text-center">Compensation</p>
          <h2 className="mt-6 text-center text-[2.1rem] leading-tight md:text-5xl">
            For your time <Em>and commitment</Em>
          </h2>
          <ul className="border-ink-line mt-14 border-t">
            {MENU.map((m, i) => (
              <li key={m.href} className="border-ink-line border-b">
                <Link
                  href={m.href}
                  className="group grid justify-items-center gap-3 py-8 text-center md:grid-cols-[4rem_1fr_auto] md:items-baseline md:justify-items-start md:gap-8 md:py-10 md:text-left"
                >
                  <span className="text-gold-light font-serif text-2xl italic" aria-hidden>
                    {toRoman(i + 1)}
                  </span>
                  <span>
                    <span className="label-caps text-ink-muted block">{m.who}</span>
                    <span className="mt-3 block font-serif text-2xl leading-snug md:text-4xl">
                      {m.amount}
                    </span>
                  </span>
                  <span className="label-caps text-gold-light inline-flex items-center gap-2 group-hover:underline group-hover:underline-offset-4">
                    Learn more
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-ink-muted mt-8 text-center text-sm">
            Compensation amounts vary by program and are paid for your time, effort, and commitment.
          </p>
        </div>
      </section>

      <Section eyebrow="How it works" title="Four considered steps">
        <ol className="border-ink grid border-t sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((s, i) => (
            <li
              key={s.title}
              className="border-border border-b px-2 py-10 text-center sm:px-6 lg:border-b-0 lg:border-l lg:first:border-l-0"
            >
              <span className="text-accent block font-serif text-4xl italic">{toRoman(i + 1)}</span>
              <span className="bg-gold mx-auto mt-5 block h-px w-8" aria-hidden />
              <h3 className="text-primary mt-5 text-2xl">{s.title}</h3>
              <p className="text-muted mx-auto mt-3 max-w-xs leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <div className="bg-muted-bg border-border border-y">
        <Section eyebrow="Our principles" title={<>The terms we keep</>}>
          <dl className="mx-auto grid max-w-5xl gap-x-16 md:grid-cols-2">
            {PRINCIPLES.map(({ title, body }, i) => (
              <div key={title} className="border-border flex gap-6 border-t py-8">
                <span className="text-accent w-8 shrink-0 font-serif text-lg italic" aria-hidden>
                  {toRoman(i + 1)}.
                </span>
                <div>
                  <dt className="font-serif text-2xl">{title}</dt>
                  <dd className="text-muted mt-2 leading-relaxed">{body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Section>
      </div>

      <Section eyebrow="Questions" title="Common questions">
        <div className="mx-auto max-w-3xl">
          <FaqList items={HOME_FAQ} />
          <p className="mt-10 text-center">
            <Link
              href="/faq"
              className="label-caps decoration-gold inline-flex items-center gap-2 underline underline-offset-8"
            >
              See all questions <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </p>
        </div>
      </Section>

      <ReferralBanner />
    </>
  );
}

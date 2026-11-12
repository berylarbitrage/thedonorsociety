import type { Metadata } from "next";
import Link from "next/link";
import { Em } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { CrossStitchRow, StitchIcon, type SamplerIcon } from "@/components/brand/stitch-bits";
import { Button } from "@/components/ui/button";
import { PARTNER_CLINICS_LINE, SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "About The Donor Society",
  description: `Who we are at ${SITE.brand}, what we believe, and how we care for egg and sperm donors.`,
  alternates: { canonical: "/about" },
};

const BELIEFS: { icon: SamplerIcon; title: string; body: string }[] = [
  {
    icon: "coordinator",
    title: "Choices made knowingly.",
    body: "Before you decide anything, you should have clear and balanced information — the risks included.",
  },
  {
    icon: "compensation",
    title: "Fair pay, plainly stated.",
    body: "Compensation honors your time and commitment, and is never tied to appearance, ethnicity or other personal traits.",
  },
  {
    icon: "privacy",
    title: "Your privacy, protected.",
    body: "Personal and health information is kept safe and never sold.",
  },
  {
    icon: "worldwide",
    title: "A real person beside you.",
    body: "Each donor has their own coordinator — someone you can call or text.",
  },
];

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title={
        <>
          About <Em>{SITE.brand}</Em>
        </>
      }
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xl leading-relaxed md:text-2xl">
          {SITE.brand} brings generous people together with the families who hope for their help. We
          find and pre-screen egg and sperm donors, then stay beside them through every step —
          honestly, respectfully, and with care in the details.
        </p>
        <CrossStitchRow className="mx-auto mt-10 w-40" />

        <h2 className="mt-12 text-center text-3xl md:text-4xl">The threads we hold to</h2>
        <ul className="fabric-card stitched stitch-divide mt-8 px-6 py-3 [--stitch:var(--sage-deep)] md:px-10">
          {BELIEFS.map((b) => (
            <li key={b.title} className="flex gap-5 py-6">
              <StitchIcon name={b.icon} className="size-12 shrink-0" />
              <p>
                <strong className="text-xl font-semibold">{b.title}</strong>{" "}
                <span className="text-muted">{b.body}</span>
              </p>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-center text-3xl md:text-4xl">Who does what</h2>
        <p className="text-muted mt-6 text-center leading-relaxed">
          We look after outreach, pre-screening, coordination, and matching donors with
          intended-parent families. All medical evaluations, testing, procedures and sample handling
          are {PARTNER_CLINICS_LINE}. {SITE.serviceArea}.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/egg-donor">Become an Egg Donor</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/sperm-donor">Become a Sperm Donor</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

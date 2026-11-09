import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/marketing/section";
import { toRoman } from "@/components/marketing/roman";
import { Button } from "@/components/ui/button";
import { PARTNER_CLINICS_LINE, SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.brand}, our mission, and how we support egg and sperm donors.`,
  alternates: { canonical: "/about" },
};

const BELIEFS = [
  {
    title: "Informed choice.",
    body: "Donors deserve clear, balanced information — including the risks — before making any decision.",
  },
  {
    title: "Fair, transparent compensation.",
    body: "Compensation recognizes your time and commitment. It is never based on appearance, ethnicity, or other personal traits.",
  },
  {
    title: "Privacy first.",
    body: "Your personal and health information is protected and never sold.",
  },
  {
    title: "Real support.",
    body: "Every donor has a dedicated coordinator — a real person you can call or text.",
  },
];

export default function AboutPage() {
  return (
    <Section eyebrow="About" title={`About ${SITE.brand}`}>
      <div className="mx-auto max-w-3xl">
        <p className="text-center font-serif text-xl leading-relaxed md:text-2xl">
          {SITE.brand} connects generous people with the families who need their help. We recruit
          and pre-screen egg and sperm donors, and guide them through every step of the process with
          care, honesty and respect.
        </p>

        <h2 className="mt-16 text-center text-3xl md:text-4xl">What we believe</h2>
        <ul className="border-ink mt-8 border-t">
          {BELIEFS.map((b, i) => (
            <li key={b.title} className="border-border flex gap-6 border-b py-6">
              <span className="text-accent w-8 shrink-0 font-serif text-lg italic" aria-hidden>
                {toRoman(i + 1)}.
              </span>
              <p>
                <strong className="font-serif text-xl font-normal">{b.title}</strong>{" "}
                <span className="text-muted">{b.body}</span>
              </p>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-center text-3xl md:text-4xl">How we work</h2>
        <p className="text-muted mt-6 text-center leading-relaxed">
          We handle outreach, pre-screening, coordination and matching donors with intended-parent
          families. All medical evaluations, testing, procedures and sample handling are{" "}
          {PARTNER_CLINICS_LINE}. {SITE.serviceArea}.
        </p>
        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
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

import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/marketing/section";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/jsonld";
import { Button } from "@/components/ui/button";
import { FAQ, type FaqGroup } from "@/content/faq";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about egg donation, sperm donation, compensation, and privacy.",
  alternates: { canonical: "/faq" },
};

const ORDER: FaqGroup[] = ["egg", "sperm", "general"];

export default function FaqPage() {
  const all = ORDER.flatMap((g) => FAQ[g].items);
  return (
    <>
      <JsonLd data={faqJsonLd(all)} />
      <Section
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        intro="Can't find your answer? Contact us any time."
      >
        <nav
          aria-label="FAQ sections"
          className="border-border mx-auto mb-14 flex max-w-3xl flex-wrap justify-center border-y"
        >
          {ORDER.map((g) => (
            <a key={g} href={`#${g}`} className="label-caps hover:text-accent px-4 py-4">
              {FAQ[g].title}
            </a>
          ))}
        </nav>
        <div className="mx-auto max-w-3xl space-y-16">
          {ORDER.map((g) => (
            <div key={g} id={g} className="scroll-mt-24">
              <h2 className="mb-6 text-center text-3xl md:text-4xl">{FAQ[g].title}</h2>
              <FaqList items={FAQ[g].items} />
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/apply/egg">Apply as an Egg Donor</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/apply/sperm">Apply as a Sperm Donor</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}

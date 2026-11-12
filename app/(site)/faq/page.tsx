import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/marketing/section";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/jsonld";
import { Button } from "@/components/ui/button";
import { FAQ, type FaqGroup } from "@/content/faq";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Questions & Answers",
  description:
    "Careful answers about egg and sperm donation, compensation, matching, medical testing and your privacy.",
  alternates: { canonical: "/faq" },
};

const ORDER: FaqGroup[] = ["general", "egg", "sperm"];

export default function FaqPage() {
  const all = ORDER.flatMap((g) => FAQ[g].items);
  return (
    <>
      <JsonLd data={faqJsonLd(all)} />
      <Section
        eyebrow="FAQ"
        title="Questions, answered with care"
        intro="If something isn't covered here, write to us. We're glad to help."
      >
        <nav
          aria-label="FAQ sections"
          className="mx-auto mb-12 flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {ORDER.map((g) => (
            <a
              key={g}
              href={`#${g}`}
              className="bg-fabric hover:text-primary rounded-full border-2 border-dashed border-[#cdb894] px-5 py-2.5 font-sans text-sm font-bold transition-colors hover:border-current"
            >
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

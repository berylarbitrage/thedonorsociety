import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrescreenForm } from "@/components/apply/prescreen-form";
import { isDonorType } from "@/config/eligibility";
import { turnstileSiteKey } from "@/lib/turnstile";
import { Em, Eyebrow } from "@/components/marketing/hero";

export function generateStaticParams() {
  return [{ type: "egg" }, { type: "sperm" }];
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  return {
    title: type === "egg" ? "Egg Donation Pre-Screen" : "Sperm Donation Pre-Screen",
    alternates: { canonical: `/apply/${type}` },
  };
}

export default async function ApplyPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!isDonorType(type)) notFound();
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:py-20">
      <header className="mb-10 text-center">
        <Eyebrow center>{type === "egg" ? "Egg donor" : "Sperm donor"} application</Eyebrow>
        <h1 className="mt-5 text-[2.2rem] leading-tight md:text-[3rem]">
          A few questions, <Em>gently asked</Em>
        </h1>
        <p className="text-muted mx-auto mt-4 max-w-lg text-lg">
          About 3 minutes to see whether you pre-qualify. Take your time — there are no wrong
          answers here.
        </p>
      </header>
      <PrescreenForm type={type} turnstileSiteKey={turnstileSiteKey()} />
    </div>
  );
}

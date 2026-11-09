import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrescreenForm } from "@/components/apply/prescreen-form";
import { isDonorType } from "@/config/eligibility";
import { turnstileSiteKey } from "@/lib/turnstile";

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
    title: type === "egg" ? "Egg Donor Pre-Screen" : "Sperm Donor Pre-Screen",
    alternates: { canonical: `/apply/${type}` },
  };
}

export default async function ApplyPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!isDonorType(type)) notFound();
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:py-20">
      <header className="mb-10 text-center">
        <p className="label-caps rule-ornament text-accent">
          {type === "egg" ? "Egg donor" : "Sperm donor"} application
        </p>
        <h1 className="mt-5 text-[2.2rem] leading-tight md:text-5xl">
          Let&apos;s see if you pre-qualify
        </h1>
      </header>
      <PrescreenForm type={type} turnstileSiteKey={turnstileSiteKey()} />
    </div>
  );
}

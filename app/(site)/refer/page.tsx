import type { Metadata } from "next";
import { Section } from "@/components/marketing/section";
import { ReferForm } from "@/components/forms/refer-form";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Share Your Referral Link",
  description: `Share your personal link with a friend who might donate eggs or sperm, and receive ${SITE.referralBonus} when they complete a donation.`,
  alternates: { canonical: "/refer" },
};

export default function ReferPage() {
  return (
    <Section
      eyebrow="Refer a friend"
      title={`Pass the thread along — receive ${SITE.referralBonus}`}
      intro="If a friend has ever wondered about donating, your personal link is an easy way to start the conversation."
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <ReferForm />
        <div>
          <h2 className="text-3xl">How it works</h2>
          <ol className="stitch-divide mt-5 [&>li]:flex [&>li]:items-baseline [&>li]:gap-3 [&>li]:py-3">
            <li>
              <strong className="font-script text-thread w-20 shrink-0 text-2xl font-normal">
                One
              </strong>
              <span>Enter your name and email to get your unique link.</span>
            </li>
            <li>
              <strong className="font-script text-sage-deep w-20 shrink-0 text-2xl font-normal">
                Two
              </strong>
              <span>Share it with friends who might be interested in donating.</span>
            </li>
            <li>
              <strong className="font-script text-thread w-20 shrink-0 text-2xl font-normal">
                Three
              </strong>
              <span>
                When they apply through your link, we&apos;ll record the referral automatically.
              </span>
            </li>
            <li>
              <strong className="font-script text-sage-deep w-20 shrink-0 text-2xl font-normal">
                Four
              </strong>
              <span>
                You receive <strong>{SITE.referralBonus}</strong> after your referral completes a
                donation.
              </span>
            </li>
          </ol>
          <h2 className="mt-10 text-2xl">The fine print</h2>
          <ul className="text-muted bg-fabric mt-3 list-disc space-y-2 rounded-2xl border-2 border-dashed border-[#cdb894] py-4 pr-4 pl-9 text-sm">
            <li>The bonus is paid only after the referred donor completes a donation.</li>
            <li>Referrals are tracked for 30 days after your friend clicks your link.</li>
            <li>Self-referrals are not eligible.</li>
            <li>We may change or end the program at any time. See our Terms of Use.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

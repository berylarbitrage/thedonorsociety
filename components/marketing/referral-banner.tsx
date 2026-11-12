import Link from "next/link";
import { Pin } from "@/components/brand/stitch-bits";
import { Eyebrow, Em } from "@/components/marketing/hero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";

/** Referral invitation, presented as a fabric patch pinned to the linen. */
export function ReferralBanner() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 md:py-20">
      <div className="relative md:-rotate-1">
        <Pin className="absolute -top-6 left-6 z-10 h-14 w-10 -rotate-12 md:left-10" />
        <Pin className="absolute -top-6 right-6 z-10 h-14 w-10 rotate-12 md:right-10" />
        <div className="stitched bg-sage-soft rounded-[2rem] px-6 py-12 shadow-[0_18px_36px_-26px_rgba(60,42,42,0.55)] [--stitch-inset:12px] [--stitch:var(--sage-deep)] md:px-14 md:py-14">
          <div className="grid items-center gap-8 md:rotate-1 md:grid-cols-[1fr_auto]">
            <div>
              <Eyebrow>Refer a friend</Eyebrow>
              <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]">
                Share the pattern with a friend, <Em>receive {SITE.referralBonus}</Em>
              </h2>
              <p className="text-muted mt-4 max-w-xl leading-relaxed">
                Know someone who would make a wonderful donor? Share your personal link. You receive
                a thank-you bonus once they complete a donation.
              </p>
            </div>
            <Button asChild size="lg" className="w-full md:w-auto">
              <Link href="/refer">Get My Referral Link</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

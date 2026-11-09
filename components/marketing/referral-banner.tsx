import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";

export function ReferralBanner() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="border-ink relative border p-2">
        <div className="border-gold border px-6 py-12 text-center md:px-16 md:py-16">
          <p className="label-caps rule-ornament text-accent">Invite a friend</p>
          <h2 className="text-primary mx-auto mt-6 max-w-2xl text-3xl leading-tight md:text-5xl">
            Extend the invitation, receive <Em>{SITE.referralBonus}</Em>
          </h2>
          <p className="text-muted mx-auto mt-5 max-w-xl leading-relaxed">
            Know someone who would make a wonderful donor? Share your personal link. You receive a
            thank-you bonus once they complete a donation.
          </p>
          <Button asChild size="lg" className="mt-9">
            <Link href="/refer">Get My Referral Link</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Em({ children }: { children: React.ReactNode }) {
  return <em className="italic">{children}</em>;
}

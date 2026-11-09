import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Application Received",
  robots: { index: false, follow: false },
};

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const eligible = status === "eligible";

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      {eligible ? (
        <>
          <CheckCircle2 className="text-accent mx-auto size-12" strokeWidth={1.25} aria-hidden />
          <h1 className="mt-6 text-3xl md:text-5xl">Great news — you pre-qualify!</h1>
          <p className="text-muted mt-4 text-lg">
            Thank you for applying. It looks like you already have an account with us, so for your
            security we&apos;ve emailed you a sign-in link to continue your full application. Your
            progress saves automatically after every step.
          </p>
          <ol className="border-ink [&>li]:border-border mx-auto mt-10 max-w-md border-t text-left [&>li]:border-b [&>li]:py-3">
            <li>
              <strong className="text-accent mr-2 font-serif font-normal italic">I.</strong> Check
              your inbox (and spam folder) for an email from {SITE.brand}.
            </li>
            <li>
              <strong className="text-accent mr-2 font-serif font-normal italic">II.</strong>{" "}
              Complete your full application in the secure portal.
            </li>
            <li>
              <strong className="text-accent mr-2 font-serif font-normal italic">III.</strong> Your
              coordinator will reach out to schedule a short video call.
            </li>
          </ol>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/portal">Go to Applicant Portal</Link>
            </Button>
          </div>
          <p className="text-muted mt-6 text-sm">
            Didn&apos;t get the email? You can request a new link from the portal sign-in page.
          </p>
        </>
      ) : (
        <>
          <Heart className="text-accent mx-auto size-12" strokeWidth={1.25} aria-hidden />
          <h1 className="mt-6 text-3xl md:text-5xl">Thank you for your interest</h1>
          <p className="text-muted mt-4 text-lg">
            Based on the current requirements of our partner programs, we&apos;re not able to move
            forward with your application right now. These requirements are set by medical providers
            and aren&apos;t a reflection of you.
          </p>
          <p className="mt-4 text-lg">
            You can still make a difference: refer a friend and earn{" "}
            <strong>{SITE.referralBonus}</strong> when they complete a donation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/refer">Refer a Friend</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

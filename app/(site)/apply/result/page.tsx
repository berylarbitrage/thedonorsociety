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
    <div className="mx-auto max-w-2xl px-4 py-14 text-center md:py-20">
      <div className="fabric-card stitched px-6 py-12 [--stitch:var(--sage-deep)] md:px-12">
        {eligible ? (
          <>
            <span className="bg-sage-soft text-accent mx-auto flex size-20 items-center justify-center rounded-full border-2 border-dashed border-current">
              <CheckCircle2 className="size-9" strokeWidth={1.5} aria-hidden />
            </span>
            <h1 className="mt-6 text-3xl md:text-[2.75rem] md:leading-tight">
              Wonderful — <span className="stitch-em">you pre-qualify!</span>
            </h1>
            <p className="text-muted mt-4 text-lg">
              Thank you for applying. You already have an account with us, so to keep it safe
              we&apos;ve emailed you a sign-in link for continuing your full application. Each step
              saves on its own as you go.
            </p>
            <ol className="stitch-divide mx-auto mt-10 max-w-md text-left [&>li]:flex [&>li]:items-baseline [&>li]:gap-3 [&>li]:py-3">
              <li>
                <strong className="font-script text-thread w-20 shrink-0 text-2xl font-normal">
                  One
                </strong>{" "}
                <span>Look in your inbox (and spam folder) for an email from {SITE.brand}.</span>
              </li>
              <li>
                <strong className="font-script text-sage-deep w-20 shrink-0 text-2xl font-normal">
                  Two
                </strong>{" "}
                <span>Finish your full application in the private portal.</span>
              </li>
              <li>
                <strong className="font-script text-thread w-20 shrink-0 text-2xl font-normal">
                  Three
                </strong>{" "}
                <span>Your coordinator will be in touch to arrange a short video call.</span>
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
            <span className="bg-primary-soft text-primary mx-auto flex size-20 items-center justify-center rounded-full border-2 border-dashed border-current">
              <Heart className="size-9" strokeWidth={1.5} aria-hidden />
            </span>
            <h1 className="mt-6 text-3xl md:text-[2.75rem] md:leading-tight">
              Thank you for thinking of us
            </h1>
            <p className="text-muted mt-4 text-lg">
              Our partner programs&apos; current requirements mean we can&apos;t take your
              application further right now. Those requirements come from medical providers, and
              they say nothing about you as a person.
            </p>
            <p className="mt-4 text-lg">
              You can still help a family begin: refer a friend and receive{" "}
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
    </div>
  );
}

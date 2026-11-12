import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Eyebrow } from "@/components/marketing/hero";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-2xl px-4 py-20 text-center">
        <svg
          viewBox="0 0 220 120"
          className="mx-auto h-auto w-56"
          fill="none"
          strokeLinecap="round"
          aria-hidden
        >
          {/* a loose, dropped thread */}
          <path
            d="M14 92 C 44 30, 82 120, 112 64 S 170 20, 200 70"
            stroke="var(--thread)"
            strokeWidth="5"
            strokeDasharray="14 10"
          />
          <path d="M196 74 L 214 100" stroke="var(--ink)" strokeWidth="3" />
          <circle cx="40" cy="104" r="7" fill="var(--knot)" />
        </svg>
        <div className="mt-6">
          <Eyebrow center>Error 404</Eyebrow>
        </div>
        <h1 className="mt-5 text-4xl md:text-5xl">
          We dropped a <span className="stitch-em">stitch.</span>
        </h1>
        <p className="text-muted mt-4">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </main>
      <Footer />
    </>
  );
}

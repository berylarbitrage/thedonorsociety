import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="text-accent font-serif text-6xl italic">CDIV</p>
        <p className="label-caps rule-ornament text-accent mt-6">Error 404</p>
        <h1 className="mt-6 text-4xl md:text-5xl">Page not found</h1>
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

import Link from "next/link";
import { Button } from "@/components/ui/button";

/** Mobile-only CTA bar pinned to the bottom of landing pages: a strip of fabric. */
export function StickyCta({ href, label, note }: { href: string; label: string; note?: string }) {
  return (
    <>
      <div className="h-24 md:hidden" aria-hidden />
      <div className="seam-top bg-fabric fixed inset-x-0 bottom-0 z-30 px-4 pt-6 pb-3 shadow-[0_-10px_24px_-18px_rgba(60,42,42,0.5)] md:hidden">
        <div className="flex items-center gap-3">
          {note && (
            <p className="text-muted line-clamp-2 min-w-0 flex-1 text-sm leading-tight">{note}</p>
          )}
          <Button asChild className={note ? "shrink-0" : "w-full"}>
            <Link href={href}>{label}</Link>
          </Button>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

/** Mobile-only CTA bar pinned to the bottom of landing pages. */
export function StickyCta({ href, label, note }: { href: string; label: string; note?: string }) {
  return (
    <>
      <div className="h-20 md:hidden" aria-hidden />
      <div className="on-ink bg-ink text-ivory border-gold fixed inset-x-0 bottom-0 z-30 border-t px-4 py-3 md:hidden">
        <div className="flex items-center gap-3">
          {note && (
            <p className="text-ink-muted line-clamp-2 min-w-0 flex-1 font-serif text-sm leading-tight italic">
              {note}
            </p>
          )}
          <Button asChild variant="ivory" className={note ? "shrink-0" : "w-full"}>
            <Link href={href}>{label}</Link>
          </Button>
        </div>
      </div>
    </>
  );
}

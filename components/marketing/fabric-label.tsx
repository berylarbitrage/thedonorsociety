import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TagLoop } from "@/components/brand/stitch-bits";
import { cn } from "@/lib/utils";

const TONES = {
  sage: { stitch: "var(--sage-deep)", loop: "var(--sage)", label: "text-accent" },
  thread: { stitch: "var(--thread)", loop: "var(--thread)", label: "text-primary" },
} as const;

/**
 * A sewn-in clothing label: fabric with a stitched border and a little ribbon
 * loop at the top. Used for compensation and program choices.
 */
export function FabricLabel({
  who,
  children,
  href,
  linkLabel = "Learn more",
  tone = "sage",
  className,
}: {
  who: string;
  children: React.ReactNode;
  href?: string;
  linkLabel?: string;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  const t = TONES[tone];
  return (
    <div className={cn("relative pt-7", className)}>
      <TagLoop className="absolute top-0 left-1/2 h-10 w-12 -translate-x-1/2" color={t.loop} />
      <div
        className="fabric-card stitched relative flex h-full flex-col px-7 pt-9 pb-8 md:px-9"
        style={{ ["--stitch" as string]: t.stitch }}
      >
        <p className={cn("thread-label", t.label)}>{who}</p>
        <div className="mt-3 flex-1 text-[1.6rem] leading-snug font-semibold md:text-[1.85rem]">
          {children}
        </div>
        {href && (
          <Link
            href={href}
            className="text-primary hover:text-ink mt-6 inline-flex items-center gap-2 self-start rounded font-sans font-bold underline decoration-dashed underline-offset-4"
          >
            {linkLabel} <ArrowRight className="size-4" aria-hidden />
          </Link>
        )}
      </div>
    </div>
  );
}

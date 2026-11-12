import Link from "next/link";
import { SITE } from "@/config/site";
import { LogoMark } from "@/components/brand/logo-mark";
import { cn } from "@/lib/utils";

/** Hoop-and-egg mark with the script wordmark in red thread over a dashed sage stitch. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5 rounded-lg", className)}
      aria-label={`${SITE.brand} home`}
    >
      <LogoMark className="size-11 shrink-0 transition-transform duration-300 group-hover:-rotate-6" />
      <span className="font-script text-thread border-sage border-b-2 border-dashed pb-3 text-[1.5rem] leading-none whitespace-nowrap">
        {SITE.brand}
      </span>
    </Link>
  );
}

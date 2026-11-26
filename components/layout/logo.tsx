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
      <LogoMark className="size-9 shrink-0 transition-transform duration-300 group-hover:-rotate-6 min-[380px]:size-11" />
      <span
        className="notranslate font-script text-thread border-sage border-b-2 border-dashed pb-3 text-[1.2rem] leading-none whitespace-nowrap min-[380px]:text-[1.5rem]"
        translate="no"
      >
        {SITE.brand}
      </span>
    </Link>
  );
}

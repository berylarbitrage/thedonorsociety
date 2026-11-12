import Link from "next/link";
import { SITE } from "@/config/site";
import { LogoMark } from "@/components/brand/logo-mark";
import { cn } from "@/lib/utils";

/** Script wordmark in red thread, with the stitched-heart mark. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2 rounded-lg", className)}
      aria-label={`${SITE.brand} home`}
    >
      <LogoMark className="size-9 shrink-0 transition-transform duration-300 group-hover:-rotate-6" />
      <span className="font-script text-thread pb-1 text-[1.5rem] leading-none whitespace-nowrap">
        {SITE.brand}
      </span>
    </Link>
  );
}

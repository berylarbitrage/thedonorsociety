import Link from "next/link";
import { SITE } from "@/config/site";
import { LogoMark } from "@/components/brand/logo-mark";
import { cn } from "@/lib/utils";

export function Logo({
  showSubtitle = true,
  className,
}: {
  showSubtitle?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${SITE.brand} home`}
    >
      <LogoMark className="size-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[0.8rem] font-medium tracking-[0.3em] whitespace-nowrap uppercase sm:text-[0.9rem]">
          {SITE.brand}
        </span>
        {showSubtitle && (
          <span className="mt-1.5 hidden font-serif text-[0.8rem] tracking-wide italic opacity-70 sm:block">
            {SITE.subtitle}
          </span>
        )}
      </span>
    </Link>
  );
}

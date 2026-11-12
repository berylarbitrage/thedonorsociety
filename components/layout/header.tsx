"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/config/site";
import { ApplyMenu } from "@/components/layout/apply-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background/95 sticky top-0 z-40 border-b-2 border-dashed border-[#cdb894] backdrop-blur-sm">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4">
        <Logo />
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className={cn(
                    "text-muted hover:text-foreground rounded font-sans text-[0.95rem] font-semibold whitespace-nowrap underline-offset-[6px] transition-colors hover:underline hover:decoration-dashed",
                    pathname === l.href &&
                      "text-primary decoration-thread underline decoration-dashed decoration-2",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-end gap-2">
          <ApplyMenu className="hidden sm:block" />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="bg-background border-t-2 border-dashed border-[#cdb894] px-4 pb-6 xl:hidden"
        >
          <ul className="stitch-divide flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="block rounded py-3.5 text-xl font-semibold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <Button asChild className="px-2">
              <Link href="/apply/egg" onClick={() => setOpen(false)}>
                Egg donor
              </Link>
            </Button>
            <Button asChild variant="outline" className="px-2">
              <Link href="/apply/sperm" onClick={() => setOpen(false)}>
                Sperm donor
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

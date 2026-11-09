"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/config/site";
import { ApplyMenu } from "@/components/layout/apply-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-border bg-background/95 sticky top-0 z-40 border-b backdrop-blur-sm">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-4 lg:h-[4.5rem] lg:grid-cols-[1fr_auto_1fr]">
        <p className="text-muted hidden font-serif text-sm italic lg:block">{SITE.subtitle}</p>
        <Logo showSubtitle={false} className="lg:justify-self-center" />
        <div className="flex items-center justify-end gap-2">
          <ApplyMenu className="hidden sm:block" />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <nav aria-label="Main" className="border-border hidden border-t lg:block">
        <ul className="mx-auto flex h-11 max-w-6xl items-center justify-center gap-10 px-4">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={cn(
                  "label-caps text-foreground/80 hover:text-foreground hover:border-gold border-b border-transparent py-1 whitespace-nowrap transition-colors",
                  pathname === l.href && "text-foreground border-gold",
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-border bg-background border-t px-4 pb-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href} className="border-border border-b">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="block py-4 font-serif text-xl"
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
            <Button asChild className="px-2">
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

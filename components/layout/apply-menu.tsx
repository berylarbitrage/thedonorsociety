"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const APPLY_OPTIONS = [
  { href: "/apply/egg", label: "Egg donor", note: "Apply to donate eggs" },
  { href: "/apply/sperm", label: "Sperm donor", note: "Apply to donate sperm" },
] as const;

/** "Apply Now" button that asks Egg or Sperm instead of assuming one. */
export function ApplyMenu({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      <Button
        size="sm"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="apply-menu"
        onClick={() => setOpen((v) => !v)}
      >
        Apply Now{" "}
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </Button>
      {open && (
        <div
          id="apply-menu"
          role="menu"
          className="border-ink bg-card absolute right-0 z-50 mt-2 w-64 border shadow-[0_18px_40px_-20px_rgba(18,18,18,0.35)]"
        >
          {APPLY_OPTIONS.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="hover:bg-muted-bg focus-visible:bg-muted-bg border-border block border-b px-5 py-4 last:border-b-0"
            >
              <span className="block font-serif text-lg leading-tight">{o.label}</span>
              <span className="text-muted mt-1 block text-xs tracking-wide">{o.note}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

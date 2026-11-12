import Link from "next/link";
import { DISCLAIMER, SITE } from "@/config/site";
import { Logo } from "@/components/layout/logo";
import { CrossStitchRow } from "@/components/brand/stitch-bits";
import { CookieSettingsLink } from "@/components/analytics/cookie-settings-link";

const linkCls =
  "text-foreground/85 hover:text-primary rounded underline-offset-4 hover:underline hover:decoration-dashed";

export function Footer() {
  return (
    <footer className="seam-top bg-linen-deep mt-16 [--stitch:var(--thread)]">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <Logo className="w-fit" />
            <p className="text-xl italic">{SITE.tagline}</p>
            <p className="flex flex-col items-start font-sans text-sm font-semibold">
              <a className={`inline-block py-2 ${linkCls}`} href={`mailto:${SITE.contactEmail}`}>
                {SITE.contactEmail}
              </a>
              <a
                className={`inline-block py-2 ${linkCls}`}
                href={`tel:${SITE.contactPhone.replace(/\D/g, "")}`}
              >
                {SITE.contactPhone}
              </a>
            </p>
            <p className="text-muted text-sm">{SITE.serviceArea}</p>
          </div>
          <div>
            <h2 className="thread-label text-accent mb-4">Donate</h2>
            <ul className="space-y-3 font-sans text-sm font-semibold">
              <li>
                <Link className={linkCls} href="/egg-donor">
                  Become an Egg Donor
                </Link>
              </li>
              <li>
                <Link className={linkCls} href="/sperm-donor">
                  Become a Sperm Donor
                </Link>
              </li>
              <li>
                <Link className={linkCls} href="/refer">
                  Refer a Friend
                </Link>
              </li>
              <li>
                <Link className={linkCls} href="/portal">
                  Applicant Login
                </Link>
              </li>
              {/* Intended Parent Login (/catalog/login) hidden for v1 — code kept. */}
            </ul>
          </div>
          <div>
            <h2 className="thread-label text-accent mb-4">Company</h2>
            <ul className="space-y-3 font-sans text-sm font-semibold">
              <li>
                <Link className={linkCls} href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className={linkCls} href="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className={linkCls} href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className={linkCls} href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className={linkCls} href="/terms">
                  Terms of Use
                </Link>
              </li>
              <li className="[&_a]:text-foreground/85 [&_button]:text-foreground/85 [&_button:hover]:text-primary">
                <CookieSettingsLink />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-dashed border-[#cdb894]">
        <div className="text-muted mx-auto max-w-6xl space-y-2 px-4 py-6 text-xs leading-relaxed">
          <p>
            <strong className="text-foreground font-semibold">Disclaimer:</strong> {DISCLAIMER}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
            </p>
            <CrossStitchRow className="w-28" />
          </div>
        </div>
      </div>
    </footer>
  );
}

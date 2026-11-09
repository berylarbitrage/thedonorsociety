import Link from "next/link";
import { DISCLAIMER, SITE } from "@/config/site";
import { Logo } from "@/components/layout/logo";
import { LogoMark } from "@/components/brand/logo-mark";
import { CookieSettingsLink } from "@/components/analytics/cookie-settings-link";

const linkCls = "text-ivory/85 hover:text-ivory underline-offset-4 hover:underline";

export function Footer() {
  return (
    <footer className="on-ink bg-ink text-ivory mt-20">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="flex flex-col items-center text-center">
          <LogoMark className="text-ivory size-16" />
          <p className="mt-6 font-serif text-2xl italic md:text-3xl">{SITE.tagline}</p>
        </div>
        <div className="border-ink-line mt-14 grid gap-10 border-t pt-12 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <Logo />
            <p className="flex flex-col items-start text-sm">
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
            <p className="text-ink-muted text-sm">{SITE.serviceArea}</p>
          </div>
          <div>
            <h2 className="label-caps text-gold-light mb-4">Donate</h2>
            <ul className="space-y-3 text-sm">
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
            <h2 className="label-caps text-gold-light mb-4">Company</h2>
            <ul className="space-y-3 text-sm">
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
              <li className="[&_button]:text-ivory/85 [&_button:hover]:text-ivory [&_a]:text-ivory/85">
                <CookieSettingsLink />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-ink-line border-t">
        <div className="text-ink-muted mx-auto max-w-6xl space-y-2 px-4 py-6 text-xs leading-relaxed">
          <p>
            <strong className="text-ivory font-medium">Disclaimer:</strong> {DISCLAIMER}
          </p>
          <p>
            © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

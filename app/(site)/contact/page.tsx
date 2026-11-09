import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Questions about becoming a donor? Contact ${SITE.brand}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Contact us" intro="Have a question? We're happy to help.">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_2fr]">
        <div className="border-ink space-y-4 border-t pt-6">
          <p className="flex items-center gap-3">
            <Mail className="text-accent size-5" aria-hidden />
            <a href={`mailto:${SITE.contactEmail}`} className="underline">
              {SITE.contactEmail}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <Phone className="text-accent size-5" aria-hidden />
            <a href={`tel:${SITE.contactPhone.replace(/\D/g, "")}`} className="underline">
              {SITE.contactPhone}
            </a>
          </p>
          <p className="text-muted text-sm">{SITE.serviceArea}.</p>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}

import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Get in Touch",
  description: `Wondering about donating? Write or call ${SITE.brand} and a real person will reply.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Pull up a chair"
      intro="Whatever you're wondering, big or small, send it our way and a real person will answer."
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_2fr]">
        <div className="fabric-card stitched h-fit space-y-4 px-6 py-8 [--stitch:var(--sage-deep)]">
          <p className="flex items-center gap-3">
            <Mail className="text-thread size-5 shrink-0" aria-hidden />
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="text-primary rounded break-all underline decoration-dashed underline-offset-4"
            >
              {SITE.contactEmail}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <Phone className="text-thread size-5 shrink-0" aria-hidden />
            <a
              href={`tel:${SITE.contactPhone.replace(/\D/g, "")}`}
              className="text-primary rounded break-all underline decoration-dashed underline-offset-4"
            >
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

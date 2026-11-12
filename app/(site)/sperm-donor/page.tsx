import type { Metadata } from "next";
import { DonorLanding } from "@/components/marketing/donor-landing";
import { Em } from "@/components/marketing/hero";
import { PARTNER_CLINICS_LINE, SITE, spermComp } from "@/config/site";

export const metadata: Metadata = {
  title: "Sperm Donation — Join Our Donor Database",
  description: `Join our donor database and be chosen by a family. ${spermComp}. A 3-minute pre-screen to begin — donors in the U.S. and internationally welcome.`,
  alternates: { canonical: "/sperm-donor" },
};

export default function SpermDonorPage() {
  return (
    <DonorLanding
      c={{
        type: "sperm",
        hero: {
          eyebrow: "Sperm donation",
          title: (
            <>
              Your kindness, <Em>woven into a family.</Em>
            </>
          ),
          subtitle: `Apply online, join our donor database, and wait to be chosen by a family who needs you. ${spermComp}.`,
        },
        partnerNote: (
          <>
            <strong>Who does what:</strong> {SITE.brand} looks after recruitment, your application
            and matching you with a family. Medical screening, testing and sample handling are{" "}
            {PARTNER_CLINICS_LINE}.
          </>
        ),
        comp: {
          amount: spermComp,
          covered: [
            "Medical screening, once a family has chosen you",
            "Genetic and infectious-disease testing",
            "Travel, if your match calls for it",
            "Your own coordinator, from first form to final donation",
          ],
          note: "Paid once a donation is completed, in recognition of your time and commitment. The exact amount depends on the program.",
        },
        steps: [
          {
            title: "Pre-screen",
            body: "A few simple questions online — about 3 minutes of your time.",
          },
          {
            title: "Full application",
            body: "Carry straight on into your profile and family health history; everything saves as you go.",
          },
          {
            title: "Coordinator call",
            body: "A short, friendly call so we can get to know you and answer anything on your mind.",
          },
          {
            title: "Approved — join our donor database",
            body: "When you're approved, your anonymous profile joins our donor database.",
          },
          {
            title: "Get matched with a family",
            body: "Intended parents look through profiles and choose their donor. We'll tell you as soon as you're matched.",
          },
          {
            title: "Medical screening & collection",
            body: `Once you're matched, a partner clinic arranges screening, testing and collection — all ${PARTNER_CLINICS_LINE}.`,
          },
          {
            title: "Donor agreement",
            body: "You read and sign your donor agreement before any donation takes place.",
          },
          {
            title: "Get compensated",
            body: "Compensation is provided per completed donation; the amount varies by program.",
          },
        ],
        concerns: [
          {
            title: "Is it safe?",
            body: "Sperm donation is non-invasive. Screening is made up of routine tests carried out by licensed medical staff at our partner clinics.",
          },
          {
            title: "How much time will it take?",
            body: "Before a match, only your application and one short coordinator call. After a match, the partner clinic explains every appointment involved before you agree to anything.",
          },
          {
            title: "Will I stay anonymous?",
            body: "That rests on the family's wishes — some arrangements are anonymous, others known or open-ID. You'll know which before you sign.",
          },
          {
            title: "Would I have legal responsibilities?",
            body: "Every donation is made under a written donor agreement that generally protects donors from parental rights and obligations. Laws differ by location, and the details will be explained to you.",
          },
        ],
      }}
    />
  );
}

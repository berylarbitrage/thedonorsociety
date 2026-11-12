import type { Metadata } from "next";
import { DonorLanding } from "@/components/marketing/donor-landing";
import { Em } from "@/components/marketing/hero";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Egg Donation — Donate With Care",
  description: `Donate eggs with a coordinator beside you at every step. Compensation of ${SITE.eggComp}, with medical, travel, legal and insurance costs covered. The pre-screen takes about 3 minutes.`,
  alternates: { canonical: "/egg-donor" },
};

export default function EggDonorPage() {
  return (
    <DonorLanding
      c={{
        type: "egg",
        hero: {
          eyebrow: "Egg donation",
          title: (
            <>
              Your gift of time, <Em>a family begun.</Em>
            </>
          ),
          subtitle: `Egg donors receive ${SITE.eggComp} and give someone the chance to become a parent. Your coordinator stays with you throughout, and every cost of care is paid.`,
        },
        comp: {
          amount: SITE.eggComp,
          covered: [
            "Every screening, medication and procedure",
            "Travel and a place to stay, if you need them",
            "Advice from your own independent attorney",
            "Complication insurance for your cycle",
          ],
        },
        steps: [
          {
            title: "Pre-screen",
            body: "A few simple questions online — about 3 minutes of your time.",
          },
          {
            title: "Full application",
            body: "Add your profile, health history and photos in your private portal, at your own pace.",
          },
          {
            title: "Video interview",
            body: "A short video call with your coordinator to talk everything through.",
          },
          {
            title: "Matching",
            body: "Intended parents looking for a donor see your anonymous profile.",
          },
          {
            title: "Medical & psychological evaluation",
            body: "At a partner clinic: blood work, an ultrasound, genetic testing and a conversation with a mental-health professional.",
          },
          {
            title: "Legal contract",
            body: "Your own independent attorney reviews the agreement with you before you sign — at no cost to you.",
          },
          {
            title: "Ovarian stimulation (about 10–14 days)",
            body: "Daily hormone injections, with regular monitoring appointments to keep an eye on you.",
          },
          {
            title: "Egg retrieval",
            body: "A brief outpatient procedure under light sedation, lasting about 20–30 minutes.",
          },
          { title: "Payment", body: "Your compensation is paid once the retrieval is complete." },
        ],
        concerns: [
          {
            title: "Is it safe?",
            body: "Egg donation is a long-established procedure carried out by experienced physicians. Like any medical treatment it carries risks — ovarian hyperstimulation syndrome (OHSS) or a reaction to medication, for example — and the clinic watches closely for them. They will walk you through every risk before you agree.",
          },
          {
            title: "Will it hurt?",
            body: "The injections use small needles, and most donors find them easier than expected. Retrieval happens under sedation. A few days of cramping and bloating afterward is common.",
          },
          {
            title: "What about my own fertility later?",
            body: "Research so far hasn't found that egg donation reduces fertility in healthy donors, though long-term data is still limited. A physician can talk through your own situation with you.",
          },
          {
            title: "Will I stay anonymous?",
            body: "Most donations are anonymous. A few families ask for a known or open-ID arrangement — you'll always know which before agreeing, and it will be written into your contract.",
          },
        ],
      }}
    />
  );
}

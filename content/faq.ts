import { ELIGIBILITY } from "@/config/eligibility";
import { PARTNER_CLINICS_LINE, SITE } from "@/config/site";

export interface FaqItem {
  q: string;
  a: string;
}

export type FaqGroup = "general" | "egg" | "sperm";

const egg = ELIGIBILITY.egg;
const sperm = ELIGIBILITY.sperm;

export const FAQ: Record<FaqGroup, { title: string; items: FaqItem[] }> = {
  general: {
    title: "Before you begin",
    items: [
      {
        q: "How much time does the first step take?",
        a: "The online pre-screen takes about 3 minutes. It asks only the basics, plus 3–5 photos of yourself — we won't ask for your Social Security number or medical records at this stage.",
      },
      {
        q: "What happens once I've sent the pre-screen?",
        a: "Your initial result appears straight away. If you pre-qualify, you can carry on into the full application right then. Every step saves as you go, and we also email you a link so you can pick it up again whenever suits you. After that, a coordinator will be in touch.",
      },
      {
        q: "What exactly does The Donor Society do?",
        a: `We find and pre-screen egg and sperm donors, walk alongside them through the application, and match them with intended-parent families. Medical screening, testing, procedures and sample handling are ${PARTNER_CLINICS_LINE}.`,
      },
      {
        q: "Do you accept donors outside the U.S.?",
        a: `Yes. ${SITE.serviceArea}. If a program involves travel, it is arranged and paid for.`,
      },
      {
        q: "How is my personal information looked after?",
        a: "It is stored securely, seen only by our screening team and partner clinics, and never sold. Our Privacy Policy sets out the details.",
      },
      {
        q: "Can I ask you to delete my information?",
        a: `Yes. Write to ${SITE.contactEmail}. Once we've confirmed it's you, we'll delete your data, apart from anything we're legally required to keep.`,
      },
      {
        q: "Am I free to change my mind?",
        a: "Always. Donating is voluntary, and you can step away at any point before a procedure.",
      },
      {
        q: "Does how I look, my background or my grades affect what I'm paid?",
        a: "No. Compensation recognizes your time, effort and commitment — never appearance, ethnicity, intelligence or any other personal trait.",
      },
      {
        q: "Do you offer medical advice?",
        a: "We can talk you through the process, but medical questions belong with a licensed physician. Final eligibility is decided by our partner medical providers.",
      },
      {
        q: "Is there a thank-you for referring a friend?",
        a: `Yes — you receive ${SITE.referralBonus} once someone you refer completes a donation. Your personal link is waiting on our Refer a Friend page.`,
      },
    ],
  },
  egg: {
    title: "Egg donation",
    items: [
      {
        q: "What do egg donors get paid?",
        a: "Your compensation depends on how you're matched. If your eggs are matched through an egg bank, you'll typically receive $8,000 – $10,000 per cycle. If you're matched directly with a family, compensation starts at $10,000 per cycle. Experienced donors receive higher compensation than first-time donors. Compensation is paid for your time and commitment, and all medical, travel, legal and insurance costs are covered on top of that.",
      },
      {
        q: "Can I be an egg donor?",
        a: `Most of our donors are ${egg.minAge}–${egg.maxAge}, have a BMI under ${egg.maxBmi}, don't smoke or vape, have regular cycles, have no significant medical conditions, and are currently in college or have a college degree. Not sure you qualify? Take our 3-minute pre-screen to find out. Final eligibility is confirmed by our partner clinic.`,
      },
      {
        q: "How long is the journey from start to finish?",
        a: "Usually about 2–4 months from application to retrieval. The medication phase lasts roughly 10–14 days, and screening plus appointments add up to about 3–6 weeks of commitment.",
      },
      {
        q: "Could donating affect my fertility later on?",
        a: "Current research hasn't shown that egg donation lowers future fertility in healthy donors, but everyone is different. The clinic's physician will go through the risks with you — please ask them anything.",
      },
      {
        q: "What are the risks, plainly put?",
        a: "As with any medical procedure, there are some: ovarian hyperstimulation syndrome (OHSS), reactions to medication, and rare complications from the procedure itself. Partner clinics monitor you closely to keep risk low.",
      },
      {
        q: "Is the retrieval painful?",
        a: "It's done under light sedation, so most donors feel nothing during it. Some cramping or bloating afterward is common and usually settles within a few days. The clinic's physician can tell you what to expect in your case.",
      },
      {
        q: "Who covers the medical bills?",
        a: "Every screening, medication, procedure and related insurance policy is paid for. You won't pay anything out of pocket for donation-related medical care.",
      },
      {
        q: "I use birth control — can I still apply?",
        a: "Often, yes. Many methods are compatible, though some implants or injections may need pausing. Just tell us what you use in the pre-screen.",
      },
      {
        q: "Will I miss work or class?",
        a: "Probably some, so plan ahead. Donation is a real commitment. If you live near the clinic, most monitoring appointments are early in the morning, and you should take retrieval day and the day after off. If you're a travel donor, plan to be away for about 7–14 days around stimulation and retrieval. Your coordinator will give you a schedule in advance so you can arrange time off from work or school.",
      },
      {
        q: "Is my identity kept confidential?",
        a: "Most are. Some intended parents ask for a known or open-ID arrangement instead. You'll always know which it is before you agree, and it will be written into your legal contract.",
      },
      {
        q: "Can I donate again?",
        a: "Yes, many donors do! If your first cycle goes well and the clinic clears you medically, you can donate again. Following American Society for Reproductive Medicine (ASRM) guidelines, we limit donors to a maximum of six donation cycles. Experienced donors also receive higher compensation.",
      },
    ],
  },
  sperm: {
    title: "Sperm donation",
    items: [
      {
        q: "What do sperm donors get paid?",
        a: "You're paid for each completed donation, and the amount depends on the program. Usually, from $3,000 and up to $20,000. Compensation is for your time and commitment, and all medical screening and testing is covered at no cost to you. Your coordinator will explain the exact amount before you sign your donor agreement.",
      },
      {
        q: "How does sperm donation work here?",
        a: "Much like an egg donation agency. You complete a short pre-screen and the full application, talk with a coordinator, and once approved your profile joins our donor database. When a family chooses you, our partner clinic arranges screening and collection.",
      },
      {
        q: "Can I be a sperm donor?",
        a: `Most of our donors are ${sperm.minAge}–${sperm.maxAge}, at least ${Math.floor(sperm.minHeightInches / 12)}'${sperm.minHeightInches % 12}" tall, have a BMI under ${sperm.maxBmi}, don't smoke or vape, and are currently in college or have a college degree. Not sure you qualify? Take our 3-minute pre-screen to find out. Final eligibility is confirmed by our partner clinic.`,
      },
      {
        q: "How long might I wait for a match?",
        a: "It varies. Some donors are matched a few weeks after approval; others wait several months, depending on what families are looking for. Your coordinator keeps you posted, and you can update your availability whenever you like.",
      },
      {
        q: "How do I spend the time before a match?",
        a: "Only the essentials: finish your application, have a short call with your coordinator, and keep your contact details current. There are no clinic visits or samples before a match — medical screening begins only once a family has chosen you.",
      },
      {
        q: "Who carries out the medical testing?",
        a: `Medical screening, testing and sample handling are ${PARTNER_CLINICS_LINE}. ${SITE.brand} looks after recruitment, your application and matching.`,
      },
      {
        q: "Why are there height and education requirements?",
        a: "These guidelines reflect what intended parents most often look for when choosing a donor, so they help your profile get matched. They're about matching only, and they don't affect your compensation.",
      },
      {
        q: "Is my identity kept confidential?",
        a: "That depends on the family — some want an anonymous donor, others a known or open-ID arrangement. You'll know which before you agree, and it will be set out in your donor agreement.",
      },
      {
        q: "Do I carry any parental responsibility?",
        a: "Donations are made under a written donor agreement that generally protects donors from parental rights and obligations. Laws differ from place to place, so the agreement and our partners will explain the specifics.",
      },
      {
        q: "I live outside the U.S. Can I apply?",
        a: "Yes! We work with donors across the U.S. and internationally. If you live outside the U.S., you'll need a valid U.S. visa to donate here. If a match involves travel, we arrange it and cover the cost.",
      },
    ],
  },
};

/** The 5 questions shown on the home page. */
export const HOME_FAQ: FaqItem[] = [
  FAQ.general.items[0]!,
  FAQ.general.items[1]!,
  FAQ.egg.items[0]!,
  FAQ.sperm.items[0]!,
  FAQ.general.items[4]!,
];

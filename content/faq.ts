import { ELIGIBILITY } from "@/config/eligibility";
import { PARTNER_CLINICS_LINE, SITE, spermComp } from "@/config/site";

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
        a: "The online pre-screen takes about 3 minutes. It asks only the basics — we won't ask for your Social Security number, medical records or photos at this stage.",
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
        q: "Can you give me medical advice?",
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
        q: "What is egg donors' compensation?",
        a: `Typically ${SITE.eggComp}, for your time and commitment. Medical, travel, legal and insurance costs are all covered on top of that.`,
      },
      {
        q: "Who can become an egg donor?",
        a: `The starting guidelines: ${egg.minAge}–${egg.maxAge} years old, a BMI under ${egg.maxBmi}, a non-smoker, regular menstrual cycles, and at least a high school diploma.`,
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
        q: "What are the medical risks?",
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
        q: "Will I need time away from work or classes?",
        a: "Monitoring appointments are mostly early in the morning. Plan to take retrieval day off, and possibly the day after.",
      },
      {
        q: "Will my donation be anonymous?",
        a: "Most are. Some intended parents ask for a known or open-ID arrangement instead. You'll always know which it is before you agree, and it will be written into your legal contract.",
      },
      {
        q: "Can I donate again later?",
        a: "Many donors can, within clinic guidelines and industry recommendations on the total number of cycles.",
      },
    ],
  },
  sperm: {
    title: "Sperm donation",
    items: [
      {
        q: "What is sperm donors' compensation?",
        a: `${spermComp}. It is paid for your time and commitment once a donation is completed.`,
      },
      {
        q: "How does sperm donation work here?",
        a: "Much like an egg donation agency. You complete a short pre-screen and the full application, talk with a coordinator, and once approved your profile joins our donor database. When a family chooses you, our partner clinic arranges screening and collection.",
      },
      {
        q: "Who can become a sperm donor?",
        a: `The starting guidelines: ${sperm.minAge}–${sperm.maxAge} years old, at least ${Math.floor(sperm.minHeightInches / 12)}'${sperm.minHeightInches % 12}" tall, a non-smoker, and currently in college or a graduate.`,
      },
      {
        q: "How long might I wait for a match?",
        a: "It varies. Some donors are matched a few weeks after approval; others wait several months, depending on what families are looking for. Your coordinator keeps you posted, and you can update your availability whenever you like.",
      },
      {
        q: "Is there anything to do while I wait?",
        a: "Only the essentials: finish your application, have a short call with your coordinator, and keep your contact details current. There are no clinic visits or samples before a match — medical screening begins only once a family has chosen you.",
      },
      {
        q: "Who carries out the medical testing?",
        a: `Medical screening, testing and sample handling are ${PARTNER_CLINICS_LINE}. ${SITE.brand} looks after recruitment, your application and matching.`,
      },
      {
        q: "Why are there height and education guidelines?",
        a: "They reflect what intended-parent families ask for. They have no bearing on compensation.",
      },
      {
        q: "Will my donation be anonymous?",
        a: "That depends on the family — some want an anonymous donor, others a known or open-ID arrangement. You'll know which before you agree, and it will be set out in your donor agreement.",
      },
      {
        q: "Would I have any responsibility for a child?",
        a: "Donations are made under a written donor agreement that generally protects donors from parental rights and obligations. Laws differ from place to place, so the agreement and our partners will explain the specifics.",
      },
      {
        q: "I live outside the United States. Can I apply?",
        a: "Yes. We welcome donors across the U.S. and internationally. If a match involves travel, it is arranged and paid for.",
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

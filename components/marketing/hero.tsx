import { HeroArt } from "@/components/brand/hero-art";

export function Hero({
  eyebrow,
  title,
  subtitle,
  art,
  children,
  footnote,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  art: "home" | "egg" | "sperm";
  children: React.ReactNode;
  footnote?: React.ReactNode;
}) {
  return (
    <section className="border-border relative border-b">
      <div className="mx-auto max-w-4xl px-4 pt-14 pb-16 text-center md:pt-20 md:pb-24">
        <HeroArt variant={art} className="text-ink mx-auto size-32 md:size-40" />
        {eyebrow && <p className="label-caps rule-ornament text-accent mt-10">{eyebrow}</p>}
        <h1 className="text-primary mx-auto mt-6 max-w-3xl text-[2.6rem] leading-[1.04] md:text-7xl">
          {title}
        </h1>
        <p className="text-muted mx-auto mt-7 max-w-xl text-lg leading-relaxed md:text-xl">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          {children}
        </div>
        {footnote && <div className="mt-12">{footnote}</div>}
      </div>
    </section>
  );
}

/** Italic Didone emphasis for a word or phrase inside a headline. */
export function Em({ children }: { children: React.ReactNode }) {
  return <em className="font-serif italic">{children}</em>;
}

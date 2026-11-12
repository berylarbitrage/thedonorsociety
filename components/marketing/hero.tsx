import { HeroArt } from "@/components/brand/hero-art";

/**
 * Two-column hero: words on the left, an embroidered fabric swatch on the right.
 * On small screens the artwork sits above the headline, smaller.
 */
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
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 pb-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:pt-16 md:pb-20">
        <div className="order-2 md:order-1">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-5 text-[2.5rem] leading-[1.1] md:text-[3.6rem]">{title}</h1>
          <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed">{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>
          {footnote && <div className="mt-8">{footnote}</div>}
        </div>
        <div className="order-1 md:order-2">
          <HeroArt
            variant={art}
            className="mx-auto h-auto w-56 sm:w-72 md:w-full md:max-w-[26rem]"
          />
        </div>
      </div>
    </section>
  );
}

/** Small sans label with a short running stitch before it. */
export function Eyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <p
      className={`thread-label text-accent flex items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      <span className="running-stitch-x w-9 shrink-0 [--stitch:var(--sage-deep)]" aria-hidden />
      <span>{children}</span>
      {center && (
        <span className="running-stitch-x w-9 shrink-0 [--stitch:var(--sage-deep)]" aria-hidden />
      )}
    </p>
  );
}

/** Emphasised headline words: red thread, dashed stitched underline. */
export function Em({ children }: { children: React.ReactNode }) {
  return <span className="stitch-em">{children}</span>;
}

import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  align = "center",
  className,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  children: React.ReactNode;
}) {
  const centered = align === "center";
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-4 py-16 md:py-24", className)}>
      {(eyebrow || title || intro) && (
        <header
          className={cn("mb-12 md:mb-16", centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}
        >
          {eyebrow && (
            <p
              className={cn(
                "label-caps text-accent mb-5",
                centered ? "rule-ornament" : "flex items-center gap-3",
              )}
            >
              {!centered && <span className="bg-gold h-px w-10" aria-hidden />}
              <span className="text-accent">{eyebrow}</span>
            </p>
          )}
          {title && (
            <h2 className="text-primary text-[2.1rem] leading-[1.1] md:text-5xl">{title}</h2>
          )}
          {intro && <div className="text-muted mt-5 text-lg leading-relaxed">{intro}</div>}
        </header>
      )}
      {children}
    </section>
  );
}

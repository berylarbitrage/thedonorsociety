import { Eyebrow } from "@/components/marketing/hero";
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
    <section id={id} className={cn("mx-auto max-w-6xl px-4 py-14 md:py-20", className)}>
      {(eyebrow || title || intro) && (
        <header
          className={cn("mb-10 md:mb-14", centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}
        >
          {eyebrow && <Eyebrow center={centered}>{eyebrow}</Eyebrow>}
          {title && (
            <h2 className={cn("text-[2rem] leading-[1.15] md:text-[2.75rem]", eyebrow && "mt-4")}>
              {title}
            </h2>
          )}
          {intro && <div className="text-muted mt-4 text-lg leading-relaxed">{intro}</div>}
        </header>
      )}
      {children}
    </section>
  );
}

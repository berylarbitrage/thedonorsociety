import type { FaqItem } from "@/content/faq";

/** Accessible accordion built on <details>, works without JS. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-ink divide-border border-t border-b">
      {items.map((item) => (
        <details
          key={item.q}
          className="group border-border border-b last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-serif text-lg leading-snug md:text-xl">
            <span>{item.q}</span>
            <span
              aria-hidden
              className="text-accent mt-0.5 w-4 shrink-0 text-center font-sans text-xl leading-none font-light"
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="text-muted max-w-3xl pr-10 pb-6 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

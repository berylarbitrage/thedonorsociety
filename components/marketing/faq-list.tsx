import type { FaqItem } from "@/content/faq";

/** Accessible accordion built on <details>, works without JS. Stitched dividers. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="fabric-card stitch-divide px-5 py-2 md:px-8">
      {items.map((item) => (
        <details key={item.q} className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-5 rounded-lg py-5 text-lg leading-snug font-semibold md:text-xl">
            <span>{item.q}</span>
            <span
              aria-hidden
              className="text-thread mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-current font-sans text-lg leading-none font-bold"
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="text-muted max-w-3xl pr-2 pb-6 leading-relaxed md:pr-10">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Vertical process: steps strung on one running-stitch thread, each on a knot. */
export function Timeline({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol>
      {steps.map((s, i) => (
        <li
          key={s.title}
          className="relative grid grid-cols-[2.25rem_1fr] gap-4 pb-8 last:pb-0 md:grid-cols-[2.75rem_1fr] md:gap-6"
        >
          {i < steps.length - 1 && (
            <span
              className="running-stitch-y absolute top-11 bottom-1 left-[calc(1.125rem-1.5px)] md:top-13 md:left-[calc(1.375rem-1.5px)]"
              aria-hidden
            />
          )}
          <span
            className="bg-knot text-ink relative flex size-9 items-center justify-center rounded-full font-sans text-sm font-extrabold md:size-11 md:text-base"
            aria-hidden
          >
            {i + 1}
          </span>
          <div className="pt-1 md:pt-2">
            <h3 className="text-xl md:text-2xl">
              <span className="sr-only">Step {i + 1}: </span>
              {s.title}
            </h3>
            <p className="text-muted mt-1.5 leading-relaxed">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

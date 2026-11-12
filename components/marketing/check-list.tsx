/** Requirements list: each line starts with a little stitched tick. */
export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-1 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 py-2.5">
          <svg
            viewBox="0 0 24 24"
            className="mt-0.5 size-6 shrink-0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="var(--sage)"
              strokeWidth="2"
              strokeDasharray="3 2.6"
            />
            <path d="M7.5 12.5 L 10.5 15.5 L 16.5 9" stroke="var(--thread)" strokeWidth="2.4" />
          </svg>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

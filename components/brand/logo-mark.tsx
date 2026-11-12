/**
 * The Donor Society mark ("two threads, one heart"): two running-stitch
 * threads, one red and one sage, each ending in a small head, curve into a
 * heart around a mustard egg with a thin ring. Pure inline SVG, original artwork.
 */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="10 14 88 86"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      {title && <title>{title}</title>}
      <path
        d="M54 92 C 18 70, 18 34, 38 28"
        stroke="var(--thread)"
        strokeWidth="3"
        strokeDasharray="6 4"
        strokeLinecap="round"
      />
      <path
        d="M54 92 C 90 70, 90 34, 70 28"
        stroke="var(--sage)"
        strokeWidth="3"
        strokeDasharray="6 4"
        strokeLinecap="round"
      />
      <ellipse cx="40" cy="28" rx="7" ry="5" fill="var(--thread)" transform="rotate(-20 40 28)" />
      <ellipse cx="68" cy="28" rx="7" ry="5" fill="var(--sage)" transform="rotate(20 68 28)" />
      <circle cx="54" cy="56" r="15.5" stroke="#c99a35" strokeWidth="1.5" />
      <circle cx="54" cy="56" r="12" fill="var(--knot)" />
    </svg>
  );
}

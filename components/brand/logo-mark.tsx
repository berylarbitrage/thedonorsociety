/**
 * The Donor Society mark: a heart sewn in red running stitch, with a small
 * needle drawing the thread through. Pure inline SVG, original artwork.
 */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {title && <title>{title}</title>}
      <path
        d="M17 34 C 7.5 27, 4 20, 7.5 14.6 C 10.4 10.4, 15.4 11.2, 17 15.4 C 18.6 11.2, 23.6 10.4, 26.5 14.6 C 30 20, 26.5 27, 17 34 Z"
        stroke="var(--thread)"
        strokeWidth="2.6"
        strokeDasharray="3.4 2.6"
      />
      {/* needle */}
      <path d="M23.5 18.5 L36 6" stroke="var(--ink)" strokeWidth="1.7" />
      <ellipse
        cx="34.4"
        cy="7.6"
        rx="1.9"
        ry="0.85"
        transform="rotate(-45 34.4 7.6)"
        stroke="var(--ink)"
        strokeWidth="0.9"
      />
      {/* thread through the eye */}
      <path
        d="M34.6 7.4 C 38.5 10.5, 36.5 15.5, 31 15.2"
        stroke="var(--thread)"
        strokeWidth="1.2"
      />
    </svg>
  );
}

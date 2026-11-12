/**
 * The Donor Society mark ("egg in the hoop"): a wooden embroidery hoop with
 * its brass screw at the top, holding a mustard egg inside a dotted red
 * stitched ring, and a red sperm whose tail is a running stitch entering from
 * the top-left. Pure inline SVG, original artwork.
 */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="6 2 96 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      {title && <title>{title}</title>}
      <circle cx="54" cy="55" r="42" fill="#fffaf2" stroke="#c49a6c" strokeWidth="7" />
      <rect x="49" y="6" width="10" height="9" rx="2" fill="#a77b4f" />
      <circle cx="62" cy="58" r="15.5" stroke="#c0485b" strokeWidth="3" strokeDasharray="1 5" />
      <circle cx="62" cy="58" r="6" fill="#e8b84a" />
      <g transform="translate(40 42) rotate(30) scale(0.9)">
        <path
          d="M-6 0 C -11 -6, -16 6, -22 0 S -33 -6, -40 0"
          stroke="#c0485b"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        <ellipse cx="0" cy="0" rx="7.5" ry="5.4" fill="#c0485b" />
      </g>
    </svg>
  );
}

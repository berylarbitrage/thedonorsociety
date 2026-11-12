/**
 * Embroidery-hoop artwork: a wooden hoop holding a round of fabric, with a
 * motif sewn in dotted thread, lazy-daisy leaves and mustard French knots.
 * Original inline SVG, purely decorative.
 *
 *  - home:  a stitched heart on a sprig
 *  - egg:   a stitched circle with a blossom at its centre
 *  - sperm: a single flowing thread in running stitch
 */
export function HeroArt({
  variant,
  className,
}: {
  variant: "home" | "egg" | "sperm";
  className?: string;
}) {
  const uid = `hoop-${variant}`;
  return (
    <svg
      viewBox="0 0 400 420"
      className={className ?? "mx-auto size-72"}
      aria-hidden
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <pattern id={`${uid}-weave`} width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 0.5H6M0.5 0V6" stroke="rgba(120,90,60,0.07)" strokeWidth="1" />
        </pattern>
        <linearGradient id={`${uid}-wood`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9ad74" />
          <stop offset="0.55" stopColor="var(--wood)" />
          <stop offset="1" stopColor="var(--wood-deep)" />
        </linearGradient>
      </defs>

      {/* soft shadow under the hoop */}
      <ellipse cx="200" cy="404" rx="120" ry="10" fill="rgba(60,42,42,0.08)" />

      {/* fabric */}
      <circle cx="200" cy="216" r="168" fill="var(--fabric)" />
      <circle cx="200" cy="216" r="168" fill={`url(#${uid}-weave)`} />

      {/* the stitched inner frame */}
      <circle
        cx="200"
        cy="216"
        r="150"
        stroke="var(--thread)"
        strokeWidth="3"
        strokeDasharray="9 8"
      />

      {/* wooden hoop: outer and inner ring */}
      <circle cx="200" cy="216" r="176" stroke={`url(#${uid}-wood)`} strokeWidth="15" />
      <circle cx="200" cy="216" r="166" stroke="var(--wood-deep)" strokeWidth="3" opacity="0.7" />
      <path d="M70 120 A 168 168 0 0 1 150 54" stroke="#f0cf9f" strokeWidth="3" opacity="0.8" />

      {/* brass clamp + screw at the top */}
      <rect x="180" y="18" width="40" height="34" rx="7" fill={`url(#${uid}-wood)`} />
      <rect
        x="180"
        y="18"
        width="40"
        height="34"
        rx="7"
        stroke="var(--wood-deep)"
        strokeWidth="2"
      />
      <rect x="168" y="8" width="64" height="12" rx="6" fill="#c9b27a" />
      <circle cx="232" cy="14" r="9" fill="#b89a5a" />
      <path d="M227 14h10" stroke="#7f6a3a" strokeWidth="2" />

      {variant === "home" && <HomeMotif />}
      {variant === "egg" && <EggMotif />}
      {variant === "sperm" && <SpermMotif />}
    </svg>
  );
}

/** Dotted "satin stitch" thread: round dots along a path. */
const dots = { strokeWidth: 7, strokeDasharray: "1 10" } as const;

function Leaf({
  x,
  y,
  r,
  color = "var(--sage-deep)",
}: {
  x: number;
  y: number;
  r: number;
  color?: string;
}) {
  // A lazy-daisy stitch: one closed loop of thread, anchored at its tip.
  return (
    <path
      d="M0 0 C 7 -9, 19 -9, 24 0 C 19 9, 7 9, 0 0 Z"
      transform={`translate(${x} ${y}) rotate(${r})`}
      stroke={color}
      strokeWidth="3"
    />
  );
}

function Knot({ x, y, r = 6.5 }: { x: number; y: number; r?: number }) {
  // A French knot: a little wound bead of mustard thread.
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="var(--knot)" />
      <path
        d={`M${x - r * 0.45} ${y} a ${r * 0.45} ${r * 0.45} 0 1 1 ${r * 0.45} ${r * 0.45}`}
        stroke="#b88a22"
        strokeWidth="1.4"
      />
    </g>
  );
}

function Cross({ x, y, color = "var(--sage)" }: { x: number; y: number; color?: string }) {
  return (
    <path
      d={`M${x - 5} ${y - 5} L${x + 5} ${y + 5} M${x + 5} ${y - 5} L${x - 5} ${y + 5}`}
      stroke={color}
      strokeWidth="3"
    />
  );
}

function HomeMotif() {
  return (
    <g>
      {/* sprigs */}
      <path d="M104 160 C 120 132, 150 122, 170 136" stroke="var(--sage)" {...dots} />
      <path d="M296 160 C 280 132, 250 122, 230 136" stroke="var(--sage)" {...dots} />
      <Leaf x={120} y={140} r={-120} />
      <Leaf x={146} y={127} r={-80} />
      <Leaf x={280} y={140} r={-60} />
      <Leaf x={254} y={127} r={-100} />

      {/* the heart */}
      <path
        d="M200 290 C 136 244, 128 184, 162 170 C 184 161, 200 178, 200 196 C 200 178, 216 161, 238 170 C 272 184, 264 244, 200 290 Z"
        stroke="var(--thread)"
        {...dots}
      />
      {/* stem, with two leaves */}
      <path d="M200 290 C 200 318, 192 336, 178 356" stroke="var(--sage)" {...dots} />
      <Leaf x={196} y={322} r={-20} />
      <Leaf x={190} y={338} r={200} />

      <Knot x={126} y={268} />
      <Knot x={278} y={262} />
      <Knot x={150} y={318} r={5} />
      <Knot x={254} y={316} r={5} />
      <Cross x={110} y={222} />
      <Cross x={292} y={214} />
    </g>
  );
}

function EggMotif() {
  const petals = [0, 60, 120, 180, 240, 300];
  return (
    <g>
      <circle cx="200" cy="222" r="96" stroke="var(--thread)" {...dots} />
      <circle cx="200" cy="222" r="76" stroke="var(--sage)" strokeWidth="3" strokeDasharray="8 7" />
      {/* blossom of lazy-daisy petals */}
      {petals.map((deg) => (
        <path
          key={deg}
          d="M0 0 C 8 -13, 30 -13, 38 0 C 30 13, 8 13, 0 0 Z"
          transform={`translate(200 222) rotate(${deg}) translate(10 0)`}
          stroke="var(--thread)"
          strokeWidth="3.2"
        />
      ))}
      <Knot x={200} y={222} r={8} />
      <Knot x={190} y={212} r={4} />
      <Knot x={211} y={213} r={4} />
      <Knot x={202} y={234} r={4} />

      <Leaf x={112} y={312} r={-50} />
      <Leaf x={288} y={312} r={-130} />
      <Knot x={126} y={146} r={5} />
      <Knot x={276} y={140} r={5} />
      <Cross x={98} y={226} />
      <Cross x={302} y={222} />
    </g>
  );
}

function SpermMotif() {
  return (
    <g>
      {/* a soft sage echo of the thread */}
      <path
        d="M86 330 C 140 286, 118 214, 182 206 S 252 238, 280 168"
        stroke="var(--sage)"
        strokeWidth="3"
        strokeDasharray="10 9"
      />
      {/* the main flowing thread in running stitch */}
      <path
        d="M98 350 C 156 302, 130 236, 196 226 S 266 254, 292 182"
        stroke="var(--thread)"
        strokeWidth="5"
        strokeDasharray="16 10"
      />
      {/* stitched head */}
      <ellipse
        cx="304"
        cy="150"
        rx="30"
        ry="21"
        transform="rotate(-62 304 150)"
        stroke="var(--thread)"
        {...dots}
      />
      <Knot x={304} y={150} r={7} />

      <Leaf x={120} y={170} r={-100} />
      <Leaf x={136} y={156} r={-40} />
      <Knot x={150} y={330} r={5} />
      <Knot x={250} y={318} r={6} />
      <Cross x={230} y={124} />
      <Cross x={98} y={250} />
      <Cross x={292} y={276} color="var(--thread)" />
    </g>
  );
}

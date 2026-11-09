const NUMERALS: [number, string][] = [
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

/** 1 → "I", 4 → "IV", 12 → "XII". Enough for step lists (< 40). */
export function toRoman(n: number): string {
  let out = "";
  for (const [value, glyph] of NUMERALS) {
    while (n >= value) {
      out += glyph;
      n -= value;
    }
  }
  return out;
}

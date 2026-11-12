import { DISCLAIMER } from "@/config/site";

export function Disclaimer() {
  return (
    <aside className="mx-auto max-w-4xl px-4 py-6">
      <p className="text-muted rounded-2xl border-2 border-dashed border-[#cdb894] px-5 py-4 text-center text-sm leading-relaxed">
        <span className="thread-label text-foreground mr-2">Please note</span> {DISCLAIMER}
      </p>
    </aside>
  );
}

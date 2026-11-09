import { DISCLAIMER } from "@/config/site";

export function Disclaimer() {
  return (
    <aside className="mx-auto max-w-4xl px-4">
      <p className="border-border text-muted border-y py-5 text-center text-sm leading-relaxed">
        <span className="label-caps text-foreground mr-2">Please note</span> {DISCLAIMER}
      </p>
    </aside>
  );
}

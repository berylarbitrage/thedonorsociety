import { toRoman } from "@/components/marketing/roman";

export function Timeline({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="border-border border-t">
      {steps.map((s, i) => (
        <li
          key={s.title}
          className="border-border grid grid-cols-[3.5rem_1fr] gap-4 border-b py-6 md:grid-cols-[5rem_1fr]"
        >
          <span className="text-accent font-serif text-2xl leading-none italic md:text-3xl">
            {toRoman(i + 1)}
          </span>
          <div>
            <h3 className="text-xl md:text-2xl">{s.title}</h3>
            <p className="text-muted mt-2 leading-relaxed">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

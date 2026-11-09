export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="border-border grid border-t sm:grid-cols-2 sm:gap-x-12">
      {items.map((item) => (
        <li key={item} className="border-border flex items-baseline gap-4 border-b py-4">
          <span className="text-gold shrink-0 text-[0.6rem]" aria-hidden>
            ◆
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

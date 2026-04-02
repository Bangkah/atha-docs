import SectionShell from "../SectionShell";
import { useCases } from "../data";

export default function UseCasesSection() {
  return (
    <SectionShell id="use-cases" eyebrow="Use cases" title="Who gets the most value from ATHA?">
      <div className="grid gap-3 md:grid-cols-3">
        {useCases.map((item) => (
          <article key={item.title} className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <h4 className="text-base font-semibold">{item.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
            <p className="mt-3 rounded-md bg-slate-900 px-2 py-1 text-xs text-emerald-300">
              {item.outcome}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

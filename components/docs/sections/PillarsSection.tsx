import { corePillars } from "../data";
import SectionShell from "../SectionShell";

export default function PillarsSection() {
  return (
    <SectionShell id="pillars" eyebrow="Core pillars" title="The design goals behind ATHA.">
      <div className="grid gap-3 md:grid-cols-3">
        {corePillars.map((pillar) => (
          <article key={pillar.label} className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
              {pillar.label}
            </p>
            <h4 className="mt-1 text-base font-semibold">{pillar.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">{pillar.desc}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

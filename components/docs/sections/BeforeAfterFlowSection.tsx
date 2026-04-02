import SectionShell from "../SectionShell";
import { beforeAfterFlow } from "../data";

export default function BeforeAfterFlowSection() {
  return (
    <SectionShell id="before-after" eyebrow="Before vs after" title="Three-step workflow shift with ATHA">
      <div className="grid gap-3 md:grid-cols-3">
        {beforeAfterFlow.map((item) => (
          <article key={item.step} className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">{item.step}</p>
            <p className="mt-2 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300">
              <span className="mr-1 text-slate-400">Before:</span>
              {item.before}
            </p>
            <p className="mt-2 rounded-md border border-emerald-700/60 bg-emerald-950/20 px-3 py-2 text-sm text-emerald-200">
              <span className="mr-1 text-emerald-300">After:</span>
              {item.after}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

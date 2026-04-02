import SectionShell from "../SectionShell";
import { switchReasons } from "../data";

export default function WhySwitchSection() {
  return (
    <SectionShell
      id="why-switch"
      eyebrow="Why switch"
      title="Why move from plain pacman or helper-only workflow?"
    >
      <div className="grid gap-3">
        {switchReasons.map((item) => (
          <article key={item.title} className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <h4 className="text-base font-semibold">{item.title}</h4>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <p className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300">
                <span className="mr-1 text-slate-400">Without ATHA:</span>
                {item.plain}
              </p>
              <p className="rounded-md border border-emerald-700/60 bg-emerald-950/20 px-3 py-2 text-sm text-emerald-200">
                <span className="mr-1 text-emerald-300">With ATHA:</span>
                {item.atha}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

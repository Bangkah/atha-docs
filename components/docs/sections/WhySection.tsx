export default function WhySection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="why">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Why ATHA exists
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">
          Safer package workflows with explicit decisions.
        </h3>
      </div>
      <p className="text-sm leading-7 text-slate-300">
        Daily package operations are often opaque in routine usage. ATHA makes
        workflows explicit before execution, traceable after execution, and
        consistent across install, remove, and update commands.
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold text-slate-100">
            Problem: opaque package operations
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Default package flows can hide source decisions, dependency impact,
            and command execution details.
          </p>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold text-slate-100">
            Solution: explicit workflow layers
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            ATHA introduces plan analysis, dry-run simulation, and local history
            so each package action is explainable and reviewable.
          </p>
        </article>
      </div>
    </section>
  );
}

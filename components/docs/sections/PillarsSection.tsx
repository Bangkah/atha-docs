export default function PillarsSection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="pillars">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Core pillars
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">
          The design goals behind ATHA.
        </h3>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">Safety</p>
          <h4 className="mt-1 text-base font-semibold">See impact before changing packages.</h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Execution simulation and confirmations reduce accidental package
            changes.
          </p>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">Transparency</p>
          <h4 className="mt-1 text-base font-semibold">Explain what will happen and why.</h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Plan mode surfaces source selection and transaction intent in plain
            output.
          </p>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">Auditability</p>
          <h4 className="mt-1 text-base font-semibold">Track operations through local history.</h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Timeline and summary views make recent install, remove, and update
            actions reviewable.
          </p>
        </article>
      </div>
    </section>
  );
}

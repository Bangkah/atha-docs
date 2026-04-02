export default function QuickStartSection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="quick-start">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Quick start
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">
          Recommended commands from the official docs.
        </h3>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">Get ATHA</h4>
          <pre className="mt-2 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
            <code>yay -S atha</code>
          </pre>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">Run checks</h4>
          <pre className="mt-2 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
            <code>{`atha doctor
atha install --plan vim`}</code>
          </pre>
        </article>
      </div>
    </section>
  );
}

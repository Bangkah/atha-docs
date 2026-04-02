export default function CommandsSection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="commands">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Command reference
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">Key ATHA commands and behavior.</h3>
      </div>
      <div className="grid gap-2">
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">install</h4>
          <p className="mt-1 text-sm leading-6 text-slate-300">
            Installs from official repositories first, then falls back to AUR
            when needed.
          </p>
          <code className="mt-2 block overflow-x-auto rounded-md bg-black/40 px-3 py-2 text-xs text-amber-100">
            atha install [--dry-run|--plan] [--yes] &lt;pkg&gt;
          </code>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">remove</h4>
          <p className="mt-1 text-sm leading-6 text-slate-300">
            Removes installed packages and skips missing targets.
          </p>
          <code className="mt-2 block overflow-x-auto rounded-md bg-black/40 px-3 py-2 text-xs text-amber-100">
            atha remove [--dry-run|--plan] [--yes] &lt;pkg&gt;
          </code>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">update</h4>
          <p className="mt-1 text-sm leading-6 text-slate-300">
            Runs full system upgrade with optional previews.
          </p>
          <code className="mt-2 block overflow-x-auto rounded-md bg-black/40 px-3 py-2 text-xs text-amber-100">
            atha update [--dry-run|--plan]
          </code>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">history</h4>
          <p className="mt-1 text-sm leading-6 text-slate-300">
            Shows local history with timeline, summary, and filters.
          </p>
          <code className="mt-2 block overflow-x-auto rounded-md bg-black/40 px-3 py-2 text-xs text-amber-100">
            atha history [--limit N] [--full|--timeline|--summary] [--action NAME] [--status NAME]
          </code>
        </article>
      </div>
      <p className="mt-3 text-sm text-slate-300">
        Mode definitions: <strong>plan</strong> for decision analysis,
        <strong>dry-run</strong> for execution simulation, and <strong>yes</strong>
        to skip prompts when supported.
      </p>
    </section>
  );
}

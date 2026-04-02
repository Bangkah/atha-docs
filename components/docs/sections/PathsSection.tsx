export default function PathsSection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="paths">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Logs and history paths
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">Default locations used by ATHA.</h3>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">Logs</h4>
          <pre className="mt-2 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
            <code>{`/tmp/atha.log
$XDG_CACHE_HOME/atha/atha.log
~/.cache/atha/atha.log`}</code>
          </pre>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">History</h4>
          <pre className="mt-2 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
            <code>{`$XDG_STATE_HOME/atha/history.log
~/.local/state/atha/history.log`}</code>
          </pre>
        </article>
      </div>
    </section>
  );
}

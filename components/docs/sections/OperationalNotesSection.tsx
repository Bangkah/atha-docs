export default function OperationalNotesSection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="operational-notes">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Operational notes
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">Behavior details from upstream docs.</h3>
      </div>
      <ul className="list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300">
        <li>Install skips packages that are already installed.</li>
        <li>Install falls back to AUR when package is unavailable in official repositories.</li>
        <li>Remove skips packages that are not installed.</li>
        <li>Update with plan and dry-run is non-destructive.</li>
        <li>Doctor exits non-zero if required dependencies are missing.</li>
      </ul>
    </section>
  );
}

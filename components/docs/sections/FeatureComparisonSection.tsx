export default function FeatureComparisonSection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="comparison">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Feature comparison
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">
          Workflow-focused capabilities in ATHA.
        </h3>
      </div>
      <div className="overflow-x-auto" role="region" aria-label="Feature comparison table">
        <table className="w-full min-w-[540px] border-collapse overflow-hidden rounded-md border border-slate-700 text-sm">
          <thead className="bg-slate-800 text-slate-100">
            <tr>
              <th className="border-b border-slate-700 px-3 py-2 text-left">Capability</th>
              <th className="border-b border-slate-700 px-3 py-2 text-left">pacman</th>
              <th className="border-b border-slate-700 px-3 py-2 text-left">yay</th>
              <th className="border-b border-slate-700 px-3 py-2 text-left">ATHA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-slate-700 px-3 py-2">Workflow-level dry-run</td>
              <td className="border-b border-slate-700 px-3 py-2">No</td>
              <td className="border-b border-slate-700 px-3 py-2">Limited</td>
              <td className="border-b border-slate-700 px-3 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border-b border-slate-700 px-3 py-2">Decision plan mode</td>
              <td className="border-b border-slate-700 px-3 py-2">No</td>
              <td className="border-b border-slate-700 px-3 py-2">Limited</td>
              <td className="border-b border-slate-700 px-3 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border-b border-slate-700 px-3 py-2">Plan explanation layer</td>
              <td className="border-b border-slate-700 px-3 py-2">No</td>
              <td className="border-b border-slate-700 px-3 py-2">No</td>
              <td className="border-b border-slate-700 px-3 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border-b border-slate-700 px-3 py-2">Local operation timeline</td>
              <td className="border-b border-slate-700 px-3 py-2">No</td>
              <td className="border-b border-slate-700 px-3 py-2">No</td>
              <td className="border-b border-slate-700 px-3 py-2">Yes</td>
            </tr>
            <tr>
              <td className="px-3 py-2">Built-in environment doctor</td>
              <td className="px-3 py-2">No</td>
              <td className="px-3 py-2">No</td>
              <td className="px-3 py-2">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

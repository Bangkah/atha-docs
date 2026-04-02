import SectionShell from "../SectionShell";
import { comparisonRows } from "../data";

export default function FeatureComparisonSection() {
  return (
    <SectionShell
      id="comparison"
      eyebrow="Feature comparison"
      title="Workflow-focused capabilities in ATHA."
    >
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
            {comparisonRows.map((row, index) => (
              <tr key={row[0]}>
                {row.map((value, columnIndex) => (
                  <td
                    key={`${row[0]}-${columnIndex}`}
                    className={`px-3 py-2 ${index !== comparisonRows.length - 1 ? "border-b border-slate-700" : ""}`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}

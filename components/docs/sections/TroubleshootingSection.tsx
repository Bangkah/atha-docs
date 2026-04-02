import SectionShell from "../SectionShell";
import { troubleshooting } from "../data";

export default function TroubleshootingSection() {
  return (
    <SectionShell
      id="troubleshooting"
      eyebrow="Troubleshooting"
      title="Common issues from the wiki."
    >
      <div className="grid gap-2">
        {troubleshooting.map((item, index) => (
          <details key={item.title} className="rounded-lg border border-slate-700 bg-slate-800/60 p-4" open={index === 0}>
            <summary className="cursor-pointer text-sm font-semibold">{item.title}</summary>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

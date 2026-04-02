import SectionShell from "../SectionShell";
import { installationMethods, installationRequirements } from "../data";

export default function InstallationSection() {
  return (
    <SectionShell id="installation" eyebrow="Installation" title="Requirements and methods.">
      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">Requirements</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300">
            {installationRequirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">Methods</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300">
            {installationMethods.map(([label, cmd]) => (
              <li key={label}>
                {label}: <code className="text-amber-100">{cmd}</code>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}

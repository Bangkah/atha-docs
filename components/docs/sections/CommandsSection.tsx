import SectionShell from "../SectionShell";
import { commands } from "../data";

export default function CommandsSection() {
  return (
    <SectionShell id="commands" eyebrow="Command reference" title="Key ATHA commands and behavior.">
      <div className="grid gap-2">
        {commands.map((item) => (
          <article key={item.title} className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <h4 className="text-base font-semibold">{item.title}</h4>
            <p className="mt-1 text-sm leading-6 text-slate-300">{item.desc}</p>
            <code className="mt-2 block overflow-x-auto rounded-md bg-black/40 px-3 py-2 text-xs text-amber-100">
              {item.syntax}
            </code>
          </article>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-300">
        Mode definitions: <strong>plan</strong> for decision analysis,
        <strong>dry-run</strong> for execution simulation, and <strong>yes</strong>
        to skip prompts when supported.
      </p>
    </SectionShell>
  );
}

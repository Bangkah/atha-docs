import SectionShell from "../SectionShell";
import { docsLinks } from "../data";

export default function DocsIndexSection() {
  return (
    <SectionShell id="docs" eyebrow="Resources" title="Official documentation and references.">
      <div className="grid gap-2 md:grid-cols-2">
        {docsLinks.map((link) => (
          <a
            key={link.title}
            className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="text-base font-semibold">{link.title}</h4>
            <p className="mt-1 text-sm text-slate-300">{link.desc}</p>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}

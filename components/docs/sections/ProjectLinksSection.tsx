import SectionShell from "../SectionShell";
import { projectLinks } from "../data";

export default function ProjectLinksSection() {
  return (
    <SectionShell id="links" eyebrow="Project links" title="Official project resources.">
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {projectLinks.map((link) => (
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

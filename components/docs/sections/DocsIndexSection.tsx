const docsLinks = [
  {
    title: "Home",
    desc: "Start page and quick navigation.",
    href: "https://github.com/Bangkah/Atha/wiki/Home",
  },
  {
    title: "Installation",
    desc: "Requirements and install methods.",
    href: "https://github.com/Bangkah/Atha/wiki/Installation",
  },
  {
    title: "Commands",
    desc: "CLI command behavior and examples.",
    href: "https://github.com/Bangkah/Atha/wiki/Commands",
  },
  {
    title: "Troubleshooting",
    desc: "Known issues and diagnosis steps.",
    href: "https://github.com/Bangkah/Atha/wiki/Troubleshooting",
  },
  {
    title: "Release notes",
    desc: "Version timeline and release changes.",
    href: "https://github.com/Bangkah/Atha/wiki/Release-Notes",
  },
  {
    title: "Release announcement v2.2.3",
    desc: "Official announcement for the latest documented release.",
    href: "https://github.com/Bangkah/Atha/wiki/Release-Announcement-v2.2.3",
  },
  {
    title: "Brand guidelines",
    desc: "Logo and brand usage references.",
    href: "https://github.com/Bangkah/Atha/wiki/Brand-Guidelines",
  },
  {
    title: "AUR reviewer response",
    desc: "Maintainer clarification and packaging rationale.",
    href: "https://github.com/Bangkah/Atha/wiki/AUR-Reviewer-Response",
  },
  {
    title: "User feedback loop",
    desc: "Feedback handling and iteration process.",
    href: "https://github.com/Bangkah/Atha/wiki/User-Feedback-Loop",
  },
] as const;

export default function DocsIndexSection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="docs">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Documentation index
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">Official wiki pages.</h3>
      </div>
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
    </section>
  );
}

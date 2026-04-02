const projectLinks = [
  {
    title: "GitHub repository",
    desc: "Source code, wiki, and releases.",
    href: "https://github.com/Bangkah/Atha",
  },
  {
    title: "AUR package",
    desc: "Published package entry for Arch users.",
    href: "https://aur.archlinux.org/packages/atha",
  },
  {
    title: "Issue tracker",
    desc: "Bug reports, feature discussion, and feedback.",
    href: "https://github.com/Bangkah/Atha/issues",
  },
  {
    title: "Clone wiki locally",
    desc: "Repository: https://github.com/Bangkah/Atha.wiki.git",
    href: "https://github.com/Bangkah/Atha.wiki.git",
  },
] as const;

export default function ProjectLinksSection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="links">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Project links
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">Official project resources.</h3>
      </div>
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
    </section>
  );
}

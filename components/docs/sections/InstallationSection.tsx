export default function InstallationSection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="installation">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Installation
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">Requirements and methods.</h3>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">Requirements</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300">
            <li>Arch Linux</li>
            <li>bash, pacman, sudo</li>
            <li>tar</li>
            <li>one of git, curl, or wget</li>
            <li>makepkg for AUR fallback builds</li>
          </ul>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">Methods</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300">
            <li>
              AUR: <code className="text-amber-100">yay -S atha</code>
            </li>
            <li>
              Installer (curl):
              <code className="text-amber-100"> curl -fsSL https://raw.githubusercontent.com/Bangkah/Atha/main/install.sh | bash</code>
            </li>
            <li>
              Installer (wget):
              <code className="text-amber-100"> wget -qO- https://raw.githubusercontent.com/Bangkah/Atha/main/install.sh | bash</code>
            </li>
            <li>
              Update: <code className="text-amber-100">yay -Syu atha</code>
            </li>
            <li>
              Uninstall: <code className="text-amber-100">sudo pacman -Rns atha</code>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default function TroubleshootingSection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="troubleshooting">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Troubleshooting
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">Common issues from the wiki.</h3>
      </div>
      <div className="grid gap-2">
        <details className="rounded-lg border border-slate-700 bg-slate-800/60 p-4" open>
          <summary className="cursor-pointer text-sm font-semibold">pacman: command not found</summary>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            ATHA targets Arch Linux systems where pacman is available.
          </p>
        </details>
        <details className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <summary className="cursor-pointer text-sm font-semibold">Permission denied while writing logs</summary>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Ensure fallback cache/state paths are writable by your current user.
          </p>
        </details>
        <details className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <summary className="cursor-pointer text-sm font-semibold">plan and dry-run look similar</summary>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Plan gives decision analysis, dry-run shows execution preview.
          </p>
        </details>
        <details className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <summary className="cursor-pointer text-sm font-semibold">update exits with error</summary>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Run atha doctor, sudo -v, pacman -V, then inspect atha logs.
          </p>
        </details>
        <details className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <summary className="cursor-pointer text-sm font-semibold">Permission denied (publickey) while pushing to AUR</summary>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Add your SSH key to AUR account settings, then test with
            <code className="text-amber-100"> ssh -T aur@aur.archlinux.org</code>.
          </p>
        </details>
        <details className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <summary className="cursor-pointer text-sm font-semibold">Color code shows as raw text</summary>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Ensure ATHA runs with bash and check terminal profile/TERM settings.
          </p>
        </details>
        <details className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <summary className="cursor-pointer text-sm font-semibold">AUR installs an older version</summary>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            AUR indexing may lag. Check with
            <code className="text-amber-100"> pacman -Qi atha</code> and retry
            <code className="text-amber-100"> yay -Syu atha</code> after a few minutes.
          </p>
        </details>
      </div>
    </section>
  );
}

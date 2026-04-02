import Image from "next/image";

export default function Home() {
  const navItems = [
    ["Introduction", "#overview"],
    ["Why Atha", "#why"],
    ["Core pillars", "#pillars"],
    ["Feature comparison", "#comparison"],
    ["Quick start", "#quick-start"],
    ["Installation", "#installation"],
    ["Commands", "#commands"],
    ["Operational notes", "#operational-notes"],
    ["Logs and history", "#paths"],
    ["Troubleshooting", "#troubleshooting"],
    ["Docs index", "#docs"],
    ["Project links", "#links"],
  ] as const;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 lg:grid lg:grid-cols-[300px_minmax(0,1fr)]">
      <aside className="border-b border-slate-800 bg-slate-900/95 px-6 py-6 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
        <div className="mb-5 flex items-center gap-3">
          <Image
            src="/atha-mark.svg"
            alt="ATHA mark"
            width={40}
            height={40}
            className="h-10 w-10 rounded-md bg-slate-800 p-1"
          />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
              ATHA docs
            </p>
            <h1 className="text-lg font-semibold leading-tight">
              Workflow layer for pacman
            </h1>
          </div>
        </div>

        <nav className="grid gap-1" aria-label="Documentation navigation">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-6 rounded-lg border border-slate-700 bg-slate-800/70 p-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
            Project status
          </p>
          <p className="mb-3 text-sm leading-6 text-slate-300">
            Arch Linux shell tooling focused on safety, transparency, and
            auditability.
          </p>
          <a
            href="https://github.com/Bangkah/Atha"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-emerald-300 hover:text-emerald-200"
          >
            View source
          </a>
        </div>
      </aside>

      <main className="space-y-4 p-4 md:p-6">
        <section
          className="grid gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]"
          id="overview"
        >
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Bangkah / Atha
            </p>
            <Image
              src="/atha-logo.svg"
              alt="ATHA logo"
              width={172}
              height={40}
              className="mb-4 h-10 w-auto"
            />
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              ATHA Documentation
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              ATHA is not a pacman replacement and not a yay clone. It adds
              plan mode, dry-run previews, local history, and doctor checks so
              package operations are clearer before and after execution.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                className="rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
                href="https://github.com/Bangkah/Atha/wiki"
                target="_blank"
                rel="noreferrer"
              >
                Open wiki
              </a>
              <a
                className="rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-700"
                href="https://aur.archlinux.org/packages/atha"
                target="_blank"
                rel="noreferrer"
              >
                AUR package
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
            <div className="grid gap-2">
              <article className="rounded-md border border-slate-700 bg-slate-800/70 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                  Safety
                </p>
                <p className="mt-1 text-sm font-semibold">Dry-run and confirmation</p>
              </article>
              <article className="rounded-md border border-slate-700 bg-slate-800/70 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                  Transparency
                </p>
                <p className="mt-1 text-sm font-semibold">Plan mode with decision context</p>
              </article>
              <article className="rounded-md border border-slate-700 bg-slate-800/70 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                  Auditability
                </p>
                <p className="mt-1 text-sm font-semibold">Timeline and summary history</p>
              </article>
            </div>
            <div className="mt-3 overflow-hidden rounded-md border border-slate-700 bg-black/40">
              <div className="flex gap-2 border-b border-slate-700 bg-slate-800 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
              </div>
              <pre className="overflow-x-auto p-3 text-xs leading-6 text-slate-200">
                <code>{`$ atha doctor
$ atha install --plan vim
$ atha install --dry-run vim
$ atha history --timeline --limit 20`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="why">
          <div className="mb-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Why ATHA exists
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">
              Safer package workflows with explicit decisions.
            </h3>
          </div>
          <p className="text-sm leading-7 text-slate-300">
            Daily package operations are often opaque in routine usage. ATHA
            makes workflows explicit before execution, traceable after execution,
            and consistent across install, remove, and update commands.
          </p>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="pillars">
          <div className="mb-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Core pillars
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">The design goals behind ATHA.</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">Safety</p>
              <h4 className="mt-1 text-base font-semibold">See impact before changing packages.</h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Execution simulation and confirmations reduce accidental package
                changes.
              </p>
            </article>
            <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">Transparency</p>
              <h4 className="mt-1 text-base font-semibold">Explain what will happen and why.</h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Plan mode surfaces source selection and transaction intent in
                plain output.
              </p>
            </article>
            <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">Auditability</p>
              <h4 className="mt-1 text-base font-semibold">Track operations through local history.</h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Timeline and summary views make recent install, remove, and
                update actions reviewable.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="comparison">
          <div className="mb-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Feature comparison
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">Workflow-focused capabilities in ATHA.</h3>
          </div>
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
                <tr>
                  <td className="border-b border-slate-700 px-3 py-2">Workflow-level dry-run</td>
                  <td className="border-b border-slate-700 px-3 py-2">No</td>
                  <td className="border-b border-slate-700 px-3 py-2">Limited</td>
                  <td className="border-b border-slate-700 px-3 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border-b border-slate-700 px-3 py-2">Decision plan mode</td>
                  <td className="border-b border-slate-700 px-3 py-2">No</td>
                  <td className="border-b border-slate-700 px-3 py-2">Limited</td>
                  <td className="border-b border-slate-700 px-3 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border-b border-slate-700 px-3 py-2">Plan explanation layer</td>
                  <td className="border-b border-slate-700 px-3 py-2">No</td>
                  <td className="border-b border-slate-700 px-3 py-2">No</td>
                  <td className="border-b border-slate-700 px-3 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border-b border-slate-700 px-3 py-2">Local operation timeline</td>
                  <td className="border-b border-slate-700 px-3 py-2">No</td>
                  <td className="border-b border-slate-700 px-3 py-2">No</td>
                  <td className="border-b border-slate-700 px-3 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Built-in environment doctor</td>
                  <td className="px-3 py-2">No</td>
                  <td className="px-3 py-2">No</td>
                  <td className="px-3 py-2">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="quick-start">
          <div className="mb-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Quick start
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">Recommended commands from the official docs.</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <h4 className="text-base font-semibold">Get ATHA</h4>
              <pre className="mt-2 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
                <code>yay -S atha</code>
              </pre>
            </article>
            <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <h4 className="text-base font-semibold">Run checks</h4>
              <pre className="mt-2 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
                <code>{`atha doctor
atha install --plan vim`}</code>
              </pre>
            </article>
          </div>
        </section>

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
                <li>Update: <code className="text-amber-100">yay -Syu atha</code></li>
                <li>Uninstall: <code className="text-amber-100">sudo pacman -Rns atha</code></li>
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="commands">
          <div className="mb-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Command reference
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">Key ATHA commands and behavior.</h3>
          </div>
          <div className="grid gap-2">
            <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <h4 className="text-base font-semibold">install</h4>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                Installs from official repositories first, then falls back to
                AUR when needed.
              </p>
              <code className="mt-2 block overflow-x-auto rounded-md bg-black/40 px-3 py-2 text-xs text-amber-100">
                atha install [--dry-run|--plan] [--yes] &lt;pkg&gt;
              </code>
            </article>
            <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <h4 className="text-base font-semibold">remove</h4>
              <p className="mt-1 text-sm leading-6 text-slate-300">Removes installed packages and skips missing targets.</p>
              <code className="mt-2 block overflow-x-auto rounded-md bg-black/40 px-3 py-2 text-xs text-amber-100">
                atha remove [--dry-run|--plan] [--yes] &lt;pkg&gt;
              </code>
            </article>
            <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <h4 className="text-base font-semibold">update</h4>
              <p className="mt-1 text-sm leading-6 text-slate-300">Runs full system upgrade with optional previews.</p>
              <code className="mt-2 block overflow-x-auto rounded-md bg-black/40 px-3 py-2 text-xs text-amber-100">
                atha update [--dry-run|--plan]
              </code>
            </article>
            <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <h4 className="text-base font-semibold">history</h4>
              <p className="mt-1 text-sm leading-6 text-slate-300">Shows local history with timeline, summary, and filters.</p>
              <code className="mt-2 block overflow-x-auto rounded-md bg-black/40 px-3 py-2 text-xs text-amber-100">
                atha history [--limit N] [--full|--timeline|--summary] [--action NAME] [--status NAME]
              </code>
            </article>
          </div>
          <p className="mt-3 text-sm text-slate-300">
            Mode definitions: <strong>plan</strong> for decision analysis, <strong>dry-run</strong> for execution simulation, and <strong>yes</strong> to skip prompts when supported.
          </p>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="operational-notes">
          <div className="mb-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Operational notes
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">Behavior details from upstream docs.</h3>
          </div>
          <ul className="list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300">
            <li>Install skips packages that are already installed.</li>
            <li>Install falls back to AUR when package is unavailable in official repositories.</li>
            <li>Remove skips packages that are not installed.</li>
            <li>Update with plan and dry-run is non-destructive.</li>
            <li>Doctor exits non-zero if required dependencies are missing.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="paths">
          <div className="mb-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Logs and history paths
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">Default locations used by ATHA.</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <h4 className="text-base font-semibold">Logs</h4>
              <pre className="mt-2 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
                <code>{`/tmp/atha.log
$XDG_CACHE_HOME/atha/atha.log
~/.cache/atha/atha.log`}</code>
              </pre>
            </article>
            <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <h4 className="text-base font-semibold">History</h4>
              <pre className="mt-2 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
                <code>{`$XDG_STATE_HOME/atha/history.log
~/.local/state/atha/history.log`}</code>
              </pre>
            </article>
          </div>
        </section>

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
              <p className="mt-2 text-sm leading-6 text-slate-300">ATHA targets Arch Linux systems where pacman is available.</p>
            </details>
            <details className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
              <summary className="cursor-pointer text-sm font-semibold">Permission denied while writing logs</summary>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Ensure fallback cache/state paths are writable by your current
                user.
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
              <p className="mt-2 text-sm leading-6 text-slate-300">Run atha doctor, sudo -v, pacman -V, then inspect atha logs.</p>
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
                AUR indexing may lag. Check with <code className="text-amber-100">pacman -Qi atha</code> and retry <code className="text-amber-100">yay -Syu atha</code> after a few minutes.
              </p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="docs">
          <div className="mb-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Documentation index
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">Official wiki pages.</h3>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha/wiki/Home"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">Home</h4>
              <p className="mt-1 text-sm text-slate-300">Start page and quick navigation.</p>
            </a>
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha/wiki/Installation"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">Installation</h4>
              <p className="mt-1 text-sm text-slate-300">Requirements and install methods.</p>
            </a>
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha/wiki/Commands"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">Commands</h4>
              <p className="mt-1 text-sm text-slate-300">CLI command behavior and examples.</p>
            </a>
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha/wiki/Troubleshooting"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">Troubleshooting</h4>
              <p className="mt-1 text-sm text-slate-300">Known issues and diagnosis steps.</p>
            </a>
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha/wiki/Release-Notes"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">Release notes</h4>
              <p className="mt-1 text-sm text-slate-300">Version timeline and release changes.</p>
            </a>
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha/wiki/Release-Announcement-v2.2.3"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">Release announcement v2.2.3</h4>
              <p className="mt-1 text-sm text-slate-300">Official announcement for the latest documented release.</p>
            </a>
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha/wiki/Brand-Guidelines"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">Brand guidelines</h4>
              <p className="mt-1 text-sm text-slate-300">Logo and brand usage references.</p>
            </a>
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha/wiki/AUR-Reviewer-Response"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">AUR reviewer response</h4>
              <p className="mt-1 text-sm text-slate-300">Maintainer clarification and packaging rationale.</p>
            </a>
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha/wiki/User-Feedback-Loop"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">User feedback loop</h4>
              <p className="mt-1 text-sm text-slate-300">Feedback handling and iteration process.</p>
            </a>
          </div>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="links">
          <div className="mb-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Project links
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">Official project resources.</h3>
          </div>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">GitHub repository</h4>
              <p className="mt-1 text-sm text-slate-300">Source code, wiki, and releases.</p>
            </a>
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://aur.archlinux.org/packages/atha"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">AUR package</h4>
              <p className="mt-1 text-sm text-slate-300">Published package entry for Arch users.</p>
            </a>
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha/issues"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">Issue tracker</h4>
              <p className="mt-1 text-sm text-slate-300">Bug reports, feature discussion, and feedback.</p>
            </a>
            <a
              className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 transition hover:border-amber-300/40 hover:bg-slate-800"
              href="https://github.com/Bangkah/Atha.wiki.git"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="text-base font-semibold">Clone wiki locally</h4>
              <p className="mt-1 text-sm text-slate-300">Repository: https://github.com/Bangkah/Atha.wiki.git</p>
            </a>
          </div>
        </section>

        <footer className="flex flex-wrap justify-between gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-5 py-4 text-sm text-slate-300">
          <p>Built from public ATHA repository and wiki material.</p>
          <p>Upstream project license: MIT.</p>
        </footer>
      </main>
    </div>
  );
}

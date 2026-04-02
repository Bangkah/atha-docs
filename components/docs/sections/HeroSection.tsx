import Image from "next/image";

export default function HeroSection() {
  return (
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
          className="mb-4"
        />
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          See what happens before you install anything on Arch Linux.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          ATHA adds safety, transparency, and history to your package workflow
          without replacing pacman or cloning yay behavior.
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
          Built for users who want clearer decisions before execution and
          auditability after execution.
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
  );
}

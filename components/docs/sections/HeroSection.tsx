import Image from "next/image";
import TrackedLink from "../TrackedLink";

export default function HeroSection() {
  return (
    <section
      className="grid gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]"
      id="overview"
    >
      <div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Bangkah / ATHA
        </p>
        <Image
          src="/atha-logo.svg"
          alt="ATHA logo"
          width={172}
          height={40}
          className="mb-4"
        />
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Plan first, execute safely, and review everything after.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          ATHA gives Arch Linux users clearer package decisions with plan mode,
          safer execution previews with dry-run, and reliable post-action
          history.
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
          It does not replace pacman. ATHA adds a workflow guardrail layer on
          top of your existing package operations.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <TrackedLink
            className="rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
            href="https://aur.archlinux.org/packages/atha"
            label="conversion__hero__install_from_aur"
            location="hero"
          >
            Install ATHA in under 60 seconds
          </TrackedLink>
          <TrackedLink
            className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
            href="https://raw.githubusercontent.com/Bangkah/Atha/main/install.sh"
            label="consideration__hero__view_install_script"
            location="hero"
          >
            Install script
          </TrackedLink>
          <TrackedLink
            className="rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-700"
            href="https://github.com/Bangkah/Atha"
            label="awareness__hero__view_source"
            location="hero"
          >
            View source
          </TrackedLink>
          <TrackedLink
            className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
            href="https://github.com/Bangkah/Atha/wiki"
            label="consideration__hero__read_docs"
            location="hero"
          >
            Read docs
          </TrackedLink>
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

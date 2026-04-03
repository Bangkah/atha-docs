import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ATHA Arch Linux Guide",
  description:
    "ATHA Arch Linux guide for safer package workflows with plan mode, dry-run, and operation history.",
  keywords: [
    "ATHA Arch Linux",
    "atha arch linux",
    "arch linux package workflow",
    "pacman workflow layer",
    "atha install arch linux",
  ],
  alternates: {
    canonical: "https://atha-docs.pages.dev/atha-arch-linux",
  },
};

export default function AthaArchLinuxPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-4 p-4 text-slate-100 md:p-6">
      <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          ATHA / Arch Linux
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          ATHA for Arch Linux package workflows
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          ATHA is a workflow layer for pacman on Arch Linux. It helps you check
          package decisions before execution, simulate actions safely, and
          review operation history after each command.
        </p>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <h2 className="text-xl font-semibold">Why ATHA on Arch Linux</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300">
          <li>Plan mode for clearer package source and action context.</li>
          <li>Dry-run mode to preview changes before touching system state.</li>
          <li>History timeline to audit package operations over time.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <h2 className="text-xl font-semibold">Quick commands</h2>
        <pre className="mt-3 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
          <code>{`yay -S atha
atha doctor
atha install --plan vim
atha install --dry-run vim`}</code>
        </pre>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            className="rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
            href="https://aur.archlinux.org/packages/atha"
            target="_blank"
            rel="noreferrer"
          >
            Install from AUR
          </a>
          <Link
            className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
            href="/"
          >
            Back to ATHA homepage
          </Link>
        </div>
      </section>
    </main>
  );
}

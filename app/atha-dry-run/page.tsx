import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ATHA Dry Run Guide",
  description:
    "ATHA dry-run guide on Arch Linux: preview package actions safely before execution and reduce risky updates.",
  keywords: [
    "ATHA dry run",
    "atha dry-run",
    "dry run package update",
    "atha plan and dry run",
    "safe package update arch linux",
  ],
  alternates: {
    canonical: "https://atha-docs.pages.dev/atha-dry-run",
  },
};

export default function AthaDryRunPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-4 p-4 text-slate-100 md:p-6">
      <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          ATHA / Dry-run
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          ATHA dry-run for safer package changes
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          Use ATHA dry-run to simulate package execution without modifying your
          system. Pair it with plan mode to understand both decision context and
          execution preview before running real commands.
        </p>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <h2 className="text-xl font-semibold">Recommended flow</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-300">
          <li>Run plan mode to inspect package source and action intent.</li>
          <li>Run dry-run to preview execution and dependency impact.</li>
          <li>Run actual command only after both checks look safe.</li>
        </ol>
        <pre className="mt-3 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
          <code>{`atha install --plan neovim
atha install --dry-run neovim
atha install neovim`}</code>
        </pre>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <h2 className="text-xl font-semibold">Learn more</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <a
            className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
            href="https://github.com/Bangkah/Atha/wiki/Commands"
            target="_blank"
            rel="noreferrer"
          >
            Read command docs
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

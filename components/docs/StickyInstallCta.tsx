import TrackedLink from "./TrackedLink";

export default function StickyInstallCta() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 p-3">
      <div className="pointer-events-auto mx-auto flex w-full max-w-4xl items-center justify-between gap-3 rounded-xl border border-amber-300/40 bg-slate-900/95 px-4 py-3 shadow-lg backdrop-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">
            Ready to try ATHA today
          </p>
          <p className="text-sm text-slate-200">
            Install in under 60 seconds, then run your first safe plan or dry-run.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <TrackedLink
            className="rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
            href="https://aur.archlinux.org/packages/atha"
            label="conversion__sticky_cta__install_from_aur"
            location="sticky_cta"
          >
            Install in 60s
          </TrackedLink>
          <TrackedLink
            className="rounded-md border border-slate-600 px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
            href="https://raw.githubusercontent.com/Bangkah/Atha/main/install.sh"
            label="consideration__sticky_cta__view_install_script"
            location="sticky_cta"
          >
            Install script
          </TrackedLink>
          <TrackedLink
            className="rounded-md border border-slate-600 px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
            href="https://github.com/Bangkah/Atha/wiki"
            label="consideration__sticky_cta__read_docs"
            location="sticky_cta"
          >
            Docs
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}

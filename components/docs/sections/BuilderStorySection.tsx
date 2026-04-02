export default function BuilderStorySection() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id="builder-story">
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Why I built ATHA
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">A short maintainer story</h3>
      </div>
      <p className="text-sm leading-7 text-slate-300">
        ATHA started from a practical need: package operations felt too implicit
        for routine work. The goal was never to replace pacman, but to make
        decisions and execution more visible, safer, and easier to review later.
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-400">
        If you care about operational clarity before pressing Enter, ATHA is
        designed for that exact workflow.
      </p>
    </section>
  );
}

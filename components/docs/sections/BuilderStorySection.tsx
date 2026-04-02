import SectionShell from "../SectionShell";

export default function BuilderStorySection() {
  return (
    <SectionShell id="builder-story" eyebrow="Why I built ATHA" title="A short maintainer story">
      <p className="text-sm leading-7 text-slate-300">
        ATHA started from a practical need: package operations felt too implicit
        for routine work. The goal was never to replace pacman, but to make
        decisions and execution more visible, safer, and easier to review later.
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-400">
        If you care about operational clarity before pressing Enter, ATHA is
        designed for that exact workflow.
      </p>
    </SectionShell>
  );
}

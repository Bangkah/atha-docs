import SectionShell from "../SectionShell";

export default function WhySection() {
  return (
    <SectionShell
      id="why"
      eyebrow="Why ATHA exists"
      title="Safer package workflows with explicit decisions."
    >
      <p className="text-sm leading-7 text-slate-300">
        Daily package operations are often opaque in routine usage. ATHA makes
        workflows explicit before execution, traceable after execution, and
        consistent across install, remove, and update commands.
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold text-slate-100">
            Problem: opaque package operations
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Default package flows can hide source decisions, dependency impact,
            and command execution details.
          </p>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold text-slate-100">
            Solution: explicit workflow layers
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            ATHA introduces plan analysis, dry-run simulation, and local history
            so each package action is explainable and reviewable.
          </p>
        </article>
      </div>
    </SectionShell>
  );
}

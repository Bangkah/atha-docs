import SectionShell from "../SectionShell";

export default function QuickExampleSection() {
  return (
    <SectionShell
      id="quick-example"
      eyebrow="Quick wow moment"
      title="Try one command, instantly see ATHA value."
    >
      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">Run this</h4>
          <pre className="mt-2 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
            <code>{`atha install --plan neovim`}</code>
          </pre>
        </article>
        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <h4 className="text-base font-semibold">Expected idea of output</h4>
          <pre className="mt-2 overflow-x-auto rounded-md bg-black/40 p-3 text-xs leading-6 text-slate-200">
            <code>{`[PLAN]
Source: official repo
Dependencies: ...
Action: install neovim`}</code>
          </pre>
        </article>
      </div>
    </SectionShell>
  );
}

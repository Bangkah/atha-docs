import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function SectionShell({
  id,
  eyebrow,
  title,
  children,
}: SectionShellProps) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5" id={id}>
      <div className="mb-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          {eyebrow}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      </div>
      {children}
    </section>
  );
}

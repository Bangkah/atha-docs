import Image from "next/image";
import SectionShell from "../SectionShell";
import TrackedLink from "../TrackedLink";
import { brandGuide } from "../data";

export default function BrandGuideSection() {
  return (
    <SectionShell id="brand-guide" eyebrow="Brand guide" title="Keep ATHA communication consistent">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]">
        <div className="space-y-3">
          <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">One-line pitch</p>
            <p className="mt-2 text-sm leading-7 text-slate-200">{brandGuide.oneLinePitch}</p>
          </article>

          <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">Tone principles</p>
            <div className="mt-2 grid gap-2 md:grid-cols-3">
              {brandGuide.tonePrinciples.map((item) => (
                <div key={item.title} className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2">
                  <p className="text-sm font-semibold text-slate-100">{item.title}</p>
                  <p className="mt-1 text-xs leading-6 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">Logo usage</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300">
              {brandGuide.logoUsage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">Brand assets</p>
          <div className="mt-3 space-y-2">
            <div className="rounded-md border border-slate-700 bg-slate-900 p-3">
              <Image src="/atha-logo.svg" alt="ATHA wordmark" width={180} height={42} className="h-auto w-auto" />
            </div>
            <div className="rounded-md border border-slate-700 bg-slate-900 p-3">
              <Image src="/atha-mark.svg" alt="ATHA mark" width={48} height={48} className="h-12 w-12" />
            </div>
          </div>
          <TrackedLink
            className="mt-4 inline-block text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            href={brandGuide.references.href}
            label="consideration__brand_guide__open_references"
            location="brand_guide"
          >
            {brandGuide.references.title}
          </TrackedLink>
        </article>
      </div>
    </SectionShell>
  );
}

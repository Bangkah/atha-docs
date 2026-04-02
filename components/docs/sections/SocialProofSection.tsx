import SectionShell from "../SectionShell";
import TrackedLink from "../TrackedLink";
import { socialProofSignals } from "../data";

export default function SocialProofSection() {
  return (
    <SectionShell id="social-proof" eyebrow="Trust signals" title="Why users can evaluate ATHA with confidence">
      <div className="grid gap-3 md:grid-cols-3">
        {socialProofSignals.map((item) => (
          <article key={item.title} className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <h4 className="text-base font-semibold">{item.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
            <TrackedLink
              className="mt-3 inline-block text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              href={item.ctaHref}
              label={item.trackingLabel}
              location="social_proof"
            >
              {item.ctaLabel}
            </TrackedLink>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

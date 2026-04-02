import SectionShell from "../SectionShell";
import { faqItems } from "../data";

export default function FaqSection() {
  return (
    <SectionShell id="faq" eyebrow="FAQ" title="Pertanyaan yang paling sering ditanyain sebelum install">
      <div className="grid gap-2">
        {faqItems.map((item, index) => (
          <details key={item.q} className="rounded-lg border border-slate-700 bg-slate-800/60 p-4" open={index === 0}>
            <summary className="cursor-pointer text-sm font-semibold">{item.q}</summary>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.a}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

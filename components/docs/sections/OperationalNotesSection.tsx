import SectionShell from "../SectionShell";
import { operationalNotes } from "../data";

export default function OperationalNotesSection() {
  return (
    <SectionShell
      id="operational-notes"
      eyebrow="Operational notes"
      title="Behavior details from upstream docs."
    >
      <ul className="list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300">
        {operationalNotes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </SectionShell>
  );
}

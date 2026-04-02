import Image from "next/image";
import { navItems } from "./constants";

export default function Sidebar() {
  return (
    <aside className="border-b border-slate-800 bg-slate-900/95 px-6 py-6 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
      <div className="mb-5 flex items-center gap-3">
        <Image
          src="/atha-mark.svg"
          alt="ATHA mark"
          width={40}
          height={40}
          className="h-10 w-10 rounded-md bg-slate-800 p-1"
        />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
            Official ATHA
          </p>
          <p className="text-lg font-semibold leading-tight">
            Safer workflows for pacman
          </p>
        </div>
      </div>

      <nav className="grid gap-1" aria-label="Product navigation">
        {navItems.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="mt-6 rounded-lg border border-slate-700 bg-slate-800/70 p-4">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
          Brand statement
        </p>
        <p className="mb-3 text-sm leading-6 text-slate-300">
          ATHA is an Arch Linux package workflow layer focused on safety,
          transparency, and auditability.
        </p>
        <a
          href="https://github.com/Bangkah/Atha"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-emerald-300 hover:text-emerald-200"
        >
          View source
        </a>
      </div>
    </aside>
  );
}

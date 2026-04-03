export const corePillars = [
  {
    label: "Safety",
    title: "See impact before changing packages.",
    desc: "Execution simulation and confirmations reduce accidental package changes.",
  },
  {
    label: "Transparency",
    title: "Explain what will happen and why.",
    desc: "Plan mode surfaces source selection and transaction intent in plain output.",
  },
  {
    label: "Auditability",
    title: "Track operations through local history.",
    desc: "Timeline and summary views make recent install, remove, and update actions reviewable.",
  },
] as const;

export const comparisonRows = [
  ["Workflow-level dry-run", "No", "Limited", "Yes"],
  ["Decision plan mode", "No", "Limited", "Yes"],
  ["Plan explanation layer", "No", "No", "Yes"],
  ["Local operation timeline", "No", "No", "Yes"],
  ["Built-in environment doctor", "No", "No", "Yes"],
] as const;

export const installationRequirements = [
  "Arch Linux",
  "bash, pacman, sudo",
  "tar",
  "one of git, curl, or wget",
  "makepkg for AUR fallback builds",
] as const;

export const installationMethods = [
  ["AUR", "yay -S atha"],
  [
    "Installer (curl)",
    "curl -fsSL https://raw.githubusercontent.com/Bangkah/Atha/main/install.sh | bash",
  ],
  [
    "Installer (wget)",
    "wget -qO- https://raw.githubusercontent.com/Bangkah/Atha/main/install.sh | bash",
  ],
  ["Update", "yay -Syu atha"],
  ["Uninstall", "sudo pacman -Rns atha"],
] as const;

export const commands = [
  {
    title: "install",
    desc: "Installs from official repositories first, then falls back to AUR when needed.",
    syntax: "atha install [--dry-run|--plan] [--yes] <pkg>",
  },
  {
    title: "remove",
    desc: "Removes installed packages and skips missing targets.",
    syntax: "atha remove [--dry-run|--plan] [--yes] <pkg>",
  },
  {
    title: "update",
    desc: "Runs full system upgrade with optional previews.",
    syntax: "atha update [--dry-run|--plan]",
  },
  {
    title: "history",
    desc: "Shows local history with timeline, summary, and filters.",
    syntax:
      "atha history [--limit N] [--full|--timeline|--summary] [--action NAME] [--status NAME]",
  },
] as const;

export const operationalNotes = [
  "Install skips packages that are already installed.",
  "Install falls back to AUR when package is unavailable in official repositories.",
  "Remove skips packages that are not installed.",
  "Update with plan and dry-run is non-destructive.",
  "Doctor exits non-zero if required dependencies are missing.",
] as const;

export const troubleshooting = [
  {
    title: "pacman: command not found",
    desc: "ATHA targets Arch Linux systems where pacman is available.",
  },
  {
    title: "Permission denied while writing logs",
    desc: "Ensure fallback cache/state paths are writable by your current user.",
  },
  {
    title: "plan and dry-run look similar",
    desc: "Plan gives decision analysis, dry-run shows execution preview.",
  },
  {
    title: "update exits with error",
    desc: "Run atha doctor, sudo -v, pacman -V, then inspect atha logs.",
  },
  {
    title: "Permission denied (publickey) while pushing to AUR",
    desc: "Add your SSH key to AUR account settings, then test with ssh -T aur@aur.archlinux.org.",
  },
  {
    title: "Color code shows as raw text",
    desc: "Ensure ATHA runs with bash and check terminal profile/TERM settings.",
  },
  {
    title: "AUR installs an older version",
    desc: "AUR indexing may lag. Check with pacman -Qi atha and retry yay -Syu atha after a few minutes.",
  },
] as const;

export const docsLinks = [
  {
    title: "ATHA Arch Linux guide",
    desc: "Keyword-focused page for ATHA on Arch Linux workflows.",
    href: "/atha-arch-linux",
  },
  {
    title: "ATHA dry-run guide",
    desc: "Keyword-focused page for ATHA dry-run usage and safe execution flow.",
    href: "/atha-dry-run",
  },
  {
    title: "Home",
    desc: "Start page and quick navigation.",
    href: "https://github.com/Bangkah/Atha/wiki/Home",
  },
  {
    title: "Installation",
    desc: "Requirements and install methods.",
    href: "https://github.com/Bangkah/Atha/wiki/Installation",
  },
  {
    title: "Commands",
    desc: "CLI command behavior and examples.",
    href: "https://github.com/Bangkah/Atha/wiki/Commands",
  },
  {
    title: "Troubleshooting",
    desc: "Known issues and diagnosis steps.",
    href: "https://github.com/Bangkah/Atha/wiki/Troubleshooting",
  },
  {
    title: "Release notes",
    desc: "Version timeline and release changes.",
    href: "https://github.com/Bangkah/Atha/wiki/Release-Notes",
  },
  {
    title: "Release announcement v2.2.3",
    desc: "Official announcement for the latest documented release.",
    href: "https://github.com/Bangkah/Atha/wiki/Release-Announcement-v2.2.3",
  },
  {
    title: "Brand guidelines",
    desc: "Logo and brand usage references.",
    href: "https://github.com/Bangkah/Atha/wiki/Brand-Guidelines",
  },
  {
    title: "AUR reviewer response",
    desc: "Maintainer clarification and packaging rationale.",
    href: "https://github.com/Bangkah/Atha/wiki/AUR-Reviewer-Response",
  },
  {
    title: "User feedback loop",
    desc: "Feedback handling and iteration process.",
    href: "https://github.com/Bangkah/Atha/wiki/User-Feedback-Loop",
  },
] as const;

export const projectLinks = [
  {
    title: "GitHub repository",
    desc: "Source code, wiki, and releases.",
    href: "https://github.com/Bangkah/Atha",
  },
  {
    title: "AUR package",
    desc: "Published package entry for Arch users.",
    href: "https://aur.archlinux.org/packages/atha",
  },
  {
    title: "Issue tracker",
    desc: "Bug reports, feature discussion, and feedback.",
    href: "https://github.com/Bangkah/Atha/issues",
  },
  {
    title: "Clone wiki locally",
    desc: "Repository: https://github.com/Bangkah/Atha.wiki.git",
    href: "https://github.com/Bangkah/Atha.wiki.git",
  },
] as const;

export const useCases = [
  {
    title: "Daily Arch user",
    desc: "Preview package impact before upgrading your workstation and avoid accidental breakage.",
    outcome: "Safer daily updates with clear intent.",
  },
  {
    title: "Dotfiles maintainer",
    desc: "Standardize package decisions across machines with plan mode and explicit command flows.",
    outcome: "Consistent setup process across environments.",
  },
  {
    title: "Ops and infra hobbyist",
    desc: "Use dry-run and history to understand each package action and debug unexpected behavior faster.",
    outcome: "Traceable operational changes.",
  },
] as const;

export const switchReasons = [
  {
    title: "From implicit to explicit",
    plain: "Traditional flows jump straight to execution.",
    atha: "ATHA surfaces decision context first through plan mode.",
  },
  {
    title: "From risky to testable",
    plain: "Many workflows rely on manual caution only.",
    atha: "ATHA supports dry-run simulation before touching packages.",
  },
  {
    title: "From one-shot to reviewable",
    plain: "After execution, context is easy to lose.",
    atha: "ATHA keeps history views for timeline and summary analysis.",
  },
] as const;

export const beforeAfterFlow = [
  {
    step: "Step 1",
    before: "Run install/update directly and hope assumptions are correct.",
    after: "Run plan mode first to inspect source and intended package actions.",
  },
  {
    step: "Step 2",
    before: "Execute without a simulation layer.",
    after: "Run dry-run to preview execution effects before system changes.",
  },
  {
    step: "Step 3",
    before: "Lose context after command finishes.",
    after: "Review history timeline to audit and explain what happened.",
  },
] as const;

export const socialProofSignals = [
  {
    title: "Open source and fully inspectable",
    desc: "Code, issues, release notes, and roadmap context are publicly visible so users can verify claims directly.",
    ctaLabel: "Explore repository",
    ctaHref: "https://github.com/Bangkah/Atha",
    trackingLabel: "awareness__social_proof__open_repository",
  },
  {
    title: "Native fit for Arch workflows",
    desc: "Install via AUR and keep package flow aligned with how Arch Linux users already work day to day.",
    ctaLabel: "Open AUR package",
    ctaHref: "https://aur.archlinux.org/packages/atha",
    trackingLabel: "conversion__social_proof__open_aur_package",
  },
  {
    title: "Documentation that explains real behavior",
    desc: "The wiki covers command behavior, troubleshooting paths, and release context so users can make informed decisions.",
    ctaLabel: "Read wiki",
    ctaHref: "https://github.com/Bangkah/Atha/wiki",
    trackingLabel: "consideration__social_proof__read_wiki",
  },
] as const;

export const faqItems = [
  {
    q: "ATHA ini ganti pacman, atau jalan bareng?",
    a: "ATHA jalan bareng pacman. Tujuannya bukan mengganti, tapi menambah guardrail workflow: plan sebelum eksekusi, dry-run untuk simulasi, dan history untuk review.",
  },
  {
    q: "Kapan saya pakai plan dan kapan pakai dry-run?",
    a: "Pakai plan saat kamu mau lihat keputusan paket dan sumbernya. Pakai dry-run saat kamu sudah siap uji simulasi eksekusi tanpa mengubah sistem.",
  },
  {
    q: "Cocok buat pemakaian harian atau cuma buat advanced user?",
    a: "Cocok untuk harian, terutama kalau kamu ingin update dan install yang lebih jelas alurnya. Advanced user tetap dapat benefit karena semua langkah lebih mudah diaudit.",
  },
] as const;

export const brandGuide = {
  oneLinePitch: "ATHA makes Arch Linux package operations safer, clearer, and reviewable.",
  tonePrinciples: [
    {
      title: "Direct",
      desc: "Use clear language, short commands, and avoid vague claims.",
    },
    {
      title: "Practical",
      desc: "Explain behavior with real workflows: plan, dry-run, execute, review.",
    },
    {
      title: "Trustworthy",
      desc: "Prefer verifiable statements tied to visible product behavior.",
    },
  ],
  logoUsage: [
    "Use ATHA wordmark for primary product references.",
    "Use mark icon for compact surfaces like nav and favicon.",
    "Keep clear spacing around logo; do not stretch or recolor assets.",
  ],
  references: {
    title: "Official brand references",
    href: "https://github.com/Bangkah/Atha/wiki/Brand-Guidelines",
  },
} as const;

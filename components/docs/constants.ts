import { faqItems } from "./data";

export const navItems = [
  ["Product overview", "#overview"],
  ["Why ATHA", "#why"],
  ["Use cases", "#use-cases"],
  ["Why switch", "#why-switch"],
  ["Before vs after", "#before-after"],
  ["Trust signals", "#social-proof"],
  ["FAQ", "#faq"],
  ["Quick example", "#quick-example"],
  ["Core pillars", "#pillars"],
  ["Feature comparison", "#comparison"],
  ["Quick start", "#quick-start"],
  ["Builder story", "#builder-story"],
  ["Brand guide", "#brand-guide"],
  ["Installation", "#installation"],
  ["Commands", "#commands"],
  ["Operational notes", "#operational-notes"],
  ["Logs and history", "#paths"],
  ["Troubleshooting", "#troubleshooting"],
  ["Resources", "#docs"],
  ["Project links", "#links"],
] as const;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://atha-docs.pages.dev/#organization",
      name: "ATHA",
      url: "https://atha-docs.pages.dev/",
      logo: "https://atha-docs.pages.dev/atha-mark.svg",
      sameAs: [
        "https://github.com/Bangkah/Atha",
        "https://github.com/Bangkah/Atha/wiki",
        "https://aur.archlinux.org/packages/atha",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://atha-docs.pages.dev/#website",
      name: "ATHA",
      url: "https://atha-docs.pages.dev/",
      description:
        "Official ATHA product landing page for safer Arch Linux package workflows.",
      inLanguage: ["en", "id"],
      keywords: [
        "ATHA",
        "ATHA docs",
        "Arch Linux package workflow",
        "pacman workflow layer",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://atha-docs.pages.dev/#software",
      name: "ATHA",
      description:
        "Workflow layer for pacman on Arch Linux with plan mode, dry-run simulation, and operation history.",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Arch Linux",
      softwareVersion: "2.2.3",
      url: "https://github.com/Bangkah/Atha",
      downloadUrl: "https://aur.archlinux.org/packages/atha",
      softwareHelp: "https://github.com/Bangkah/Atha/wiki",
      publisher: {
        "@id": "https://atha-docs.pages.dev/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://atha-docs.pages.dev/#faq",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

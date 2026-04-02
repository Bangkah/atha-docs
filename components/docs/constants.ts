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
      name: "ATHA",
      url: "https://atha-docs.pages.dev/",
      logo: "https://atha-docs.pages.dev/atha-mark.svg",
    },
    {
      "@type": "WebSite",
      name: "ATHA",
      url: "https://atha-docs.pages.dev/",
      description:
        "Official ATHA product landing page for safer Arch Linux package workflows.",
    },
    {
      "@type": "SoftwareApplication",
      name: "ATHA",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Arch Linux",
      softwareVersion: "2.2.3",
      url: "https://github.com/Bangkah/Atha",
      downloadUrl: "https://aur.archlinux.org/packages/atha",
    },
  ],
};

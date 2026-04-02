export const navItems = [
  ["Introduction", "#overview"],
  ["Why Atha", "#why"],
  ["Quick example", "#quick-example"],
  ["Core pillars", "#pillars"],
  ["Feature comparison", "#comparison"],
  ["Quick start", "#quick-start"],
  ["Builder story", "#builder-story"],
  ["Installation", "#installation"],
  ["Commands", "#commands"],
  ["Operational notes", "#operational-notes"],
  ["Logs and history", "#paths"],
  ["Troubleshooting", "#troubleshooting"],
  ["Docs index", "#docs"],
  ["Project links", "#links"],
] as const;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "ATHA Docs",
      url: "https://atha-docs.pages.dev/",
      description:
        "Official ATHA documentation for installation, commands, troubleshooting, release notes, and package workflow behavior on Arch Linux.",
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

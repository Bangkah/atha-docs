import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atha-docs.pages.dev"),
  title: {
    default: "ATHA Docs | Safer Arch Package Workflows",
    template: "%s | ATHA",
  },
  description:
    "Official ATHA docs and landing page. Safer package workflows on Arch Linux with plan mode, dry-run safety, troubleshooting guides, and operation history.",
  applicationName: "ATHA",
  category: "Developer Tools",
  authors: [{ name: "Bangkah" }],
  creator: "Bangkah",
  publisher: "Bangkah",
  keywords: [
    "ATHA",
    "ATHA docs",
    "ATHA Arch Linux",
    "Bangkah ATHA",
    "Arch Linux",
    "pacman",
    "AUR",
    "atha aur",
    "atha install",
    "atha plan",
    "atha dry run",
    "atha history",
    "workflow layer pacman",
    "pacman workflow",
    "safe package install arch",
    "arch linux package manager helper",
    "arch linux package workflow",
    "dry run package update",
    "package operation history",
    "troubleshooting arch packages",
    "docs atha",
    "dokumentasi atha",
    "panduan atha",
    "atha commands",
    "atha troubleshooting",
    "atha arch linux docs",
    "atha package workflow docs",
    "atha plan mode",
    "atha dry-run mode",
    "pacman safety workflow",
    "aur package atha",
    "alat paket arch linux",
    "landing page",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://atha-docs.pages.dev/",
  },
  verification: {
    google: "NGXlme7e5z94b134xNmVz9R34KrMFZLhJ2oH2seTCU8",
  },
  openGraph: {
    type: "website",
    url: "https://atha-docs.pages.dev/",
    siteName: "ATHA",
    title: "ATHA Docs | Safer Arch Package Workflows",
    description:
      "Official ATHA docs and landing page for safer package workflows on Arch Linux with plan mode, dry-run, and operation history.",
    locale: "en_US",
    images: [
      {
        url: "/atha-logo.svg",
        width: 1200,
        height: 630,
        alt: "ATHA product landing page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATHA Docs | Safer Arch Package Workflows",
    description:
      "Official ATHA docs and workflow layer for pacman with safer execution and clearer decisions.",
    images: ["/atha-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/atha-mark.svg",
    shortcut: "/atha-mark.svg",
    apple: "/atha-mark.svg",
  },
  other: {
    "google": "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {gtmId ? (
          <Script id="gtm-bootstrap" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}
        {children}
      </body>
    </html>
  );
}

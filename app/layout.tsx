import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
    default: "ATHA Documentation",
    template: "%s | ATHA Docs",
  },
  description:
    "Official ATHA documentation for installation, commands, troubleshooting, release notes, and package workflow behavior on Arch Linux.",
  applicationName: "ATHA Docs",
  keywords: [
    "ATHA",
    "Arch Linux",
    "pacman",
    "AUR",
    "package workflow",
    "documentation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "ATHA Docs",
    title: "ATHA Documentation",
    description:
      "Official ATHA documentation for installation, commands, troubleshooting, release notes, and package workflow behavior on Arch Linux.",
    images: [
      {
        url: "/atha-logo.svg",
        width: 1200,
        height: 630,
        alt: "ATHA documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATHA Documentation",
    description:
      "Official ATHA documentation for installation, commands, troubleshooting, and package workflow behavior on Arch Linux.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

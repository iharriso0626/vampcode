import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import { PROFILE } from "./data/resume";
import { SITE_URL } from "./data/site";

// Load Cinzel from Google Fonts, specifying at least one subset (e.g. "latin").
const cinzel = Cinzel({
  subsets: ["latin"], // or ["latin-ext", "latin"]
  display: "swap", // optional: controls the font-display strategy
});

const description = `Professional portfolio of ${PROFILE.name} — ${PROFILE.role} in ${PROFILE.location}. Security compliance, cloud infrastructure, and full-stack development.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VampCoding",
  description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Ian Harrison",
    "Security Analyst",
    "Systems Analyst",
    "Cybersecurity",
    "Security Compliance",
    "Atlanta",
    "Google Cloud",
    "AWS",
  ],
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  // Explicitly opt in to full indexing and rich previews.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description,
    url: SITE_URL,
    siteName: "VampCoding",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} — ${PROFILE.role}`,
      },
    ],
  },
  twitter: {
    // summary_large_image gives the full-width preview card rather than a
    // thumbnail, which is what LinkedIn and Slack render from too.
    card: "summary_large_image",
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.className} antialiased`}>
        {/* Without JS the tab buttons cannot switch panels, so reveal every
            section instead — the whole resume reads as one page. Crawlers that
            do not execute JS get the same treatment. */}
        <noscript>
          <style>{`main > section[hidden] { display: block !important; }`}</style>
        </noscript>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

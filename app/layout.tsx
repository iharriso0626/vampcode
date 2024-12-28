import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";


// Load Cinzel from Google Fonts, specifying at least one subset (e.g. "latin").
const cinzel = Cinzel({
  subsets: ["latin"], // or ["latin-ext", "latin"]
  display: "swap",    // optional: controls the font-display strategy
});

export const metadata: Metadata = {
  title: "VampCoding",
  description: "Professional Portfolio of Ian Harrison.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

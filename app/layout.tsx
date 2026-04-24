import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cedar Information Technology | Legacy Modernization & AI Adoption Consulting",
  description:
    "Cedar Information Technology helps organizations modernize legacy systems, adopt AI-first workflows, and train existing teams to become high-performing AI-first teams.",
  keywords:
    "legacy application modernization India, AI consulting Hyderabad, AI adoption training, Drupal 7 migration, CiviCRM migration, healthcare software modernization, AI-first software development, ERP modernization, CRM modernization, Claude Code development, custom software company Hyderabad",
  authors: [{ name: "Cedar Information Technology" }],
  openGraph: {
    title: "Cedar Information Technology | Legacy Modernization & AI Adoption",
    description:
      "Transform legacy systems into AI-driven platforms. We modernize outdated applications and train your existing team—without disruption.",
    url: "https://cedarinfotech.com",
    siteName: "Cedar Information Technology",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

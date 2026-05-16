import type { Metadata } from "next";
import { Instrument_Serif, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-instrument-serif",
});

const siteUrl = "https://arnolfokam.com";
const description =
  "Arnol Fokam is a Research Engineer working on reinforcement learning, large language models, and AI systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arnol Fokam - Research Engineer",
    template: "%s - Arnol Fokam",
  },
  description,
  keywords: [
    "Arnol Fokam",
    "Research Engineer",
    "Machine Learning Engineer",
    "African in Tech",
    "London",
  ],
  authors: [{ name: "Arnol Fokam", url: siteUrl }],
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Arnol Fokam",
    title: "Arnol Fokam - Research Engineer",
    description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "Arnol Fokam - Research Engineer",
    description,
  },
  icons: {
    icon: [
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/logo/apple-touch-icon.png", type: "image/png" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arnol Fokam",
  url: siteUrl,
  jobTitle: "Research Engineer",
  description,
  sameAs: [
    "https://www.linkedin.com/in/arnolfokam/",
    "https://github.com/ArnolFokam",
    "https://scholar.google.com/citations?user=cA1hu0UAAAAJ&hl=en",
  ],
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${instrumentSerif.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://arnolfokam.com";
const description =
  "I write code, train models, and ship things. On a mission to bring a distinctly African identity into global tech.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arnol Fokam — AI Builder",
  description,
  keywords: [
    "Arnol Fokam",
    "AI Builder",
    "Machine Learning Engineer",
    "Research Engineer",
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
    title: "Arnol Fokam — AI Builder",
    description,
    locale: "en_GB",
    images: [
      {
        url: "/working.jpg",
        width: 1200,
        height: 800,
        alt: "Arnol Fokam at work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnol Fokam — AI Builder",
    description,
    images: ["/working.jpg"],
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
  jobTitle: "AI Builder",
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
    <html lang="en" className={spaceGrotesk.className}>
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

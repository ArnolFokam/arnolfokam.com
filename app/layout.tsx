import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arnol Fokam",
  description: "Research Engineer & Entrepreneur bridging AI research and real-world impact.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>{children}</body>
    </html>
  );
}

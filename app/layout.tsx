import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ccgc.us"),
  title: {
    default: "CCGC | Continental Consulting Group Corporation",
    template: "%s | CCGC",
  },
  description:
    "Continental Consulting Group Corporation (CCGC) — Navigating Your Path to Government Business. Federal and defense consulting in strategic planning, business development, and government relations.",
  keywords: [
    "federal consulting",
    "defense consulting",
    "government business development",
    "DoD lobbying",
    "Army aviation strategy",
    "federal market strategy",
    "Alexandria VA",
  ],
  openGraph: {
    title: "CCGC | Continental Consulting Group Corporation",
    description: "Navigating Your Path to Government Business since 2000.",
    url: "https://ccgc.us",
    siteName: "CCGC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCGC | Continental Consulting Group Corporation",
    description: "Navigating Your Path to Government Business since 2000.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

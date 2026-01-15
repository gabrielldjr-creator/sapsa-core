import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAPSA",
  description: "System for Analysis of Animal Sanitary Patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="site-header">
          <div className="site-header-inner">
            <Link className="site-brand" href="/">
              SAPSA
            </Link>
            <nav className="site-nav" aria-label="Primary">
              <Link href="/indicators">Indicators</Link>
              <Link href="/delivery-models">Delivery Models</Link>
              <Link href="/institutional-use-scenarios">Use Scenarios</Link>
              <Link href="/governance-legal-boundaries">Governance</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Inter, Outfit } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nexora Marketing — Smarter Marketing. Faster Growth.",
  description:
    "Nexora Marketing is a performance-focused digital agency helping startups and businesses grow through paid ads, SEO, conversion optimization, and data-driven strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable} font-[var(--font-body)] antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

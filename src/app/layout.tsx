import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Jan Novák | Zakázkové Truhlářství",
  description: "Prémiový nábytek na míru s důrazem na detail a kvalitu masivního dřeva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased selection:bg-[#E8DCC4] selection:text-[#111111]`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}

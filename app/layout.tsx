import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bright Stack — Software Development Studio",
    template: "%s | Bright Stack",
  },
  description:
    "Johannesburg-based software development studio building custom web apps, mobile apps, and digital platforms for businesses across South Africa and beyond.",
  openGraph: {
    siteName: "Bright Stack",
    type: "website",
    locale: "en_ZA",
    title: "Bright Stack — Software Development Studio",
    description:
      "Custom web apps, mobile apps, and digital platforms. Based in Johannesburg, South Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col bg-surface text-slate-900 antialiased font-sans">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

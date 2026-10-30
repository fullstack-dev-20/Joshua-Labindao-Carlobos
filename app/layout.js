import { Geist, Geist_Mono, Nunito } from "next/font/google";
import { profile } from "@/data/profile";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["800", "900"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${profile.shortName}`,
  },
  description: siteDescription,
  authors: [{ name: profile.fullName }],
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    siteName: profile.fullName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${nunito.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-screen" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only z-[60] rounded-lg bg-accent-strong px-4 py-2 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

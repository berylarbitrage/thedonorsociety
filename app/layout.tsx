import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import { SITE, siteUrl } from "@/config/site";
import { CookieBanner } from "@/components/analytics/cookie-banner";
import { Analytics } from "@/components/analytics/analytics";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${SITE.brand} | Egg & Sperm Donation`,
    template: `%s | ${SITE.brand}`,
  },
  description:
    "An invitation to become an egg or sperm donor and help a family begin. Compensation for your time, medical costs covered, a dedicated coordinator — U.S. and international donors welcome.",
  openGraph: {
    type: "website",
    siteName: SITE.brand,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F3",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${bodoni.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}

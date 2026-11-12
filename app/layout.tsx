import type { Metadata, Viewport } from "next";
import { Lora, Nunito_Sans, Pacifico } from "next/font/google";
import "./globals.css";
import { SITE, siteUrl } from "@/config/site";
import { CookieBanner } from "@/components/analytics/cookie-banner";
import { Analytics } from "@/components/analytics/analytics";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${SITE.brand} | Egg & Sperm Donation`,
    template: `%s | ${SITE.brand}`,
  },
  description:
    "Egg and sperm donation, taken one careful step at a time: a coordinator beside you, medical costs covered and compensation for your time. Donors in the U.S. and internationally welcome.",
  openGraph: {
    type: "website",
    siteName: SITE.brand,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#F6EFE2",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${nunito.variable} ${pacifico.variable}`}>
      <body className="min-h-dvh font-serif antialiased">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}

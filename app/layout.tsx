import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://urbantouch.cm";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Urban Touch SARL | Marketing & Communication au Cameroun",
    template: "%s | Urban Touch SARL",
  },
  description:
    "Urban Touch SARL — agence spécialisée en marketing stratégique, communication créative et prestation de services depuis 2021. Donnez vie à votre marque au Cameroun.",
  keywords: [
    "marketing Cameroun", "agence communication Cameroun", "Urban Touch SARL",
    "branding Cameroun", "publicité Douala", "stratégie marketing Afrique",
  ],
  authors: [{ name: "Urban Touch SARL", url: siteUrl }],
  creator: "Urban Touch SARL",
  publisher: "Urban Touch SARL",
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: siteUrl,
    siteName: "Urban Touch SARL",
    title: "Urban Touch SARL | Marketing & Communication au Cameroun",
    description: "Agence spécialisée en marketing stratégique, communication créative et prestation de services au Cameroun depuis 2021.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Urban Touch SARL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Touch SARL | Marketing & Communication",
    description: "Agence spécialisée en marketing et communication au Cameroun depuis 2021.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${raleway.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-[#1D1D1B] font-[family-name:var(--font-inter)] antialiased flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Laura Flores Hairstylist | Colorimetría en Villahermosa",
  description:
    "Especialista en colorimetría y cuidado capilar en Villahermosa, Tabasco. Consulta disponibilidad y agenda tu cita por WhatsApp.",
  keywords: [
    "colorimetría Villahermosa",
    "hairstylist Villahermosa",
    "cuidado capilar Tabasco",
    "Laura Flores Hairstylist",
  ],
  authors: [{ name: "Laura Flores Hairstylist" }],
  creator: "Laura Flores Hairstylist",
  category: "beauty",
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "Laura Flores Hairstylist",
    description:
      "Colorimetría y cuidado capilar en Villahermosa, Tabasco.",
    siteName: "Laura Flores Hairstylist",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laura Flores Hairstylist",
    description:
      "Colorimetría y cuidado capilar en Villahermosa, Tabasco.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${manrope.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}

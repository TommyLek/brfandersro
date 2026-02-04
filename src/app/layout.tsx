import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BRF Andersro | Exklusiva lägenheter i Visby",
  description: "BRF Andersro - 70 moderna lägenheter med parkeringsgarage i hjärtat av Visby, Gotland. Planerad byggstart 2027. Anmäl ditt intresse idag.",
  keywords: ["BRF Andersro", "lägenheter Visby", "bostadsrätt Gotland", "nyproduktion Visby"],
  openGraph: {
    title: "BRF Andersro | Exklusiva lägenheter i Visby",
    description: "70 moderna lägenheter med parkeringsgarage i hjärtat av Visby. Planerad byggstart 2027.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${dmSans.variable} ${cormorant.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

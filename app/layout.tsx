import { Outfit, Inter } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Emersson Álvarez | Full-Stack & Medical Software",
  description: "Portafolio de Emersson Rodrigo Álvarez Ordinola - Desarrollador de Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

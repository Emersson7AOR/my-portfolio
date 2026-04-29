import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./globals.css";

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
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

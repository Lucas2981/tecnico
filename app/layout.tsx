import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Escala from "@/components/Escala";
import FooterSimple from "@/components/FooterSimple";

export const metadata: Metadata = {
  title: "TecniCo | Construcción y reformas en Catamarca",
  description:
    "¿Tienes un proyecto en mente? Contacta con nosotros. Construcción y reformas en San Fernando del Valle de Catamarca. ¡Solicita tu presupuesto ahora!",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <head>
        <meta
          name="google-site-verification"
          content="clW8wctaAKt0oqOU-x2YibigIsz2f84eYyiujzRTdWI"
        />
        <script
          defer
          src="https://umani.tutecnico.com.ar/script.js"
          data-website-id="d0de678d-1104-4b94-ad08-0e5d0c50913b"></script>
      </head>
      <body className="bg-base">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Escala />
        <FooterSimple />
      </body>
    </html>
  );
}

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

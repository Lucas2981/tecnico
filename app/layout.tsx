import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Escala from "@/components/Escala";

export const metadata: Metadata = {
  title: "TecniCo constructor",
  description:
    "Tu maestro mayor de obras en el Valle Central de Catamarca, ¿a cuanto esta el m2 de construcción? ¿cuanto sale un albañil?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-base">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Escala />
        <Footer />
      </body>
    </html>
  );
}

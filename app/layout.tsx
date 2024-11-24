import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Escala from "@/components/Escala";
import FooterSimple from "@/components/FooterSimple";

export const metadata: Metadata = {
  title: "TecniCo constructor - Catamarca",
  description:
    "Tu maestro mayor de obras, ¿a cuanto esta el m2 de construcción? ¿cuanto sale un albañil? Cotizaciones precisas, planificación detallada, insumos necesarios y certificación de tareas para tu obra en Catamarca.",
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
        <FooterSimple />
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soporte - Movilform",
  description:
    "Para solicitar apoyo en nuestros productos, no dude en consultarnos. Tenemos un equipo especializado dispuesto a atenderlo y a entregar el mejor servicio.",
  alternates: { canonical: "/soporte" },
};

export default function SoporteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
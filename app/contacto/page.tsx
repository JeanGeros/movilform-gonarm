import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto - Movilform",
  description:
    "Para mayor información de nuestros productos, no dude en consultarnos. Tenemos un equipo especializado dispuesto a atenderlo y a entregar el mejor servicio.",
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  return <ContactoClient />;
}

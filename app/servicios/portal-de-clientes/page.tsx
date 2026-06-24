import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal de Clientes - Movilform",
  description:
    "Entrega a tus clientes acceso directo a documentos e informes automatizados con el Portal de Clientes de MovilForm mejora su experiencia y reduce la carga operativa",
  alternates: { canonical: "/servicios/portal-de-clientes" },
};

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ImageCarousel from "@/app/components/ImageCarousel";
import SlideIn from "@/app/components/SlideIn";
import ServicesCarousel from "@/app/components/ServicesCarousel";

const PORTAL_IMAGES = [
  "/servicios/portal-de-clientes/portal-clientes-1.webp",
  "/servicios/portal-de-clientes/portal-clientes-2.webp",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortalDeClientes() {
  return (
    <main className="w-full bg-[#feeaed] min-h-screen flex flex-col">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 mt-10 pb-16 flex flex-col gap-10 max-w-7xl mx-auto">
        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-[42%_1fr] gap-8 md:gap-12 items-center">
            <h1 className="font-satoshi text-[36px] md:text-[62px] font-black text-[#e52533] leading-[42px] md:leading-[70px]">
              Portal de
              <br />
              Clientes
            </h1>
            <div className="font-satoshi text-[15px] md:text-[17px] text-[#231d1b] leading-[24px] md:leading-[28px] space-y-4">
              <p>
                Permite a tus clientes interactuar con información y datos de
                forma automática, con este portal podrás entregarles acceso a
                informes, documentos y Dashboard personalizados.
              </p>
              <p>
                Además, podrás hacer integraciones y generar flujos de
                aprobación, con esto podrás disminuir tareas repetitivas y
                permitirá a tus clientes resolver dudas sin necesidad de
                contactar a tu equipo de operación o soporte.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. PORTALES PERSONALIZADOS ──────────────────────────────────── */}
        <SlideIn>
          <section className="bg-white rounded-[20px] px-6 py-8 md:px-[50px] md:py-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-[11fr_9fr] gap-8 md:gap-12 items-center">
              <div>
                <h2 className="font-satoshi text-[28px] text-center md:text-start md:text-[40px] font-extrabold text-[#192437] leading-[34px] md:leading-[46px]">
                  Portales personalizados a tu
                  <br />
                  medida
                </h2>
                <p className="font-satoshi text-justify mt-5 md:mt-8 text-[15px] md:text-[17.6px] text-[#232321] leading-[24px] md:leading-[26px]">
                  Podrás agregar imágenes y contenido relacionados con tu
                  negocio y generar cuentas de acceso con niveles de seguridad
                  para ofrecer una experiencia de usuario con información
                  relevante y útil.
                </p>
              </div>
              <ImageCarousel images={PORTAL_IMAGES} contain />
            </div>
          </section>
        </SlideIn>
      </div>

      {/* ── 3. MÁS SERVICIOS ────────────────────────────────────────────────── */}
      <ServicesCarousel currentSlug="portal-de-clientes" />

      <Footer cardBg="bg-white" />
    </main>
  );
}

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeatureSection from "@/app/components/FeatureSection";
import ServicesCarousel from "@/app/components/ServicesCarousel";

const IMG_PORTAL = "/servicios/portal-de-clientes/portal-clientes-2.webp";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortalDeClientes() {
  return (
    <main className="w-full bg-[#feeaed] min-h-screen flex flex-col">

      <div className="relative h-[88px]">
        <Navbar />
      </div>

      <div className="mt-10 pb-16 flex flex-col gap-10 max-w-7xl mx-auto">

        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px]">
          <div className="grid grid-cols-[42%_1fr] gap-12 items-center">
            <h1 className="font-satoshi text-[62px] font-black text-[#e52533] leading-[70px]">
              Portal de<br />Clientes
            </h1>
            <div className="font-satoshi text-[17px] text-[#231d1b] leading-[28px] space-y-4">
              <p>
                Permite a tus clientes interactuar con información y datos de forma automática,
                con este portal podrás entregarles acceso a informes, documentos y Dashboard
                personalizados.
              </p>
              <p>
                Además, podrás hacer integraciones y generar flujos de aprobación, con esto
                podrás disminuir tareas repetitivas y permitirá a tus clientes resolver dudas sin
                necesidad de contactar a tu equipo de operación o soporte.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. PORTALES PERSONALIZADOS ──────────────────────────────────── */}
        <FeatureSection
          title={<>Portales personalizados a tu<br />medida</>}
          imageSrc={IMG_PORTAL}
          imageAlt="Portal de clientes MovilForm con dashboard personalizado"
          imageContain
        >
          <p>
            Podrás agregar imágenes y contenido relacionados con tu negocio y generar
            cuentas de acceso con niveles de seguridad para ofrecer una experiencia de
            usuario con información relevante y útil.
          </p>
        </FeatureSection>

      </div>

      {/* ── 3. MÁS SERVICIOS ────────────────────────────────────────────────── */}
      <ServicesCarousel currentSlug="portal-de-clientes" />

      <Footer cardBg="bg-white" />
    </main>
  );
}

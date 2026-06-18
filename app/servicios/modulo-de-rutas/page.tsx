import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeatureSection from "@/app/components/FeatureSection";
import ServicesCarousel from "@/app/components/ServicesCarousel";

const IMG_GESTION   = "/servicios/modulo-de-rutas/gestion-rutas.webp";
const IMG_OPTIMIZA  = "/servicios/modulo-de-rutas/optimiza-rutas.webp";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ModuloDeRutas() {
  return (
    <main className="w-full bg-[#feeaed] min-h-screen">

      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <div className="relative h-[88px]">
        <Navbar />
      </div>

      <div className="px-[110px] pb-16 flex flex-col gap-6 max-w-[1440px] mx-auto">

        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px]">
          <div className="grid grid-cols-[42%_1fr] gap-12 items-center">
            <h1 className="font-satoshi text-[60px] font-black text-[#e52533] leading-[68px]">
              Módulo de<br />Rutas
            </h1>
            <div className="font-satoshi text-[17px] text-[#231d1b] leading-[28px] space-y-4">
              <p>
                Para las empresas que realizan diferentes tipos de servicios en terreno, MovilForm
                será su aliado perfecto utilizando el módulo de rutas.
              </p>
              <p>
                Con este módulo, podrás programar las visitas a tus clientes generando rutas
                diarias, semanales o mensuales, las cuales se asignarán de forma automática al
                personal en terreno.
              </p>
              <p>
                Sólo debes seleccionar los clientes a visitar y los servicios a realizar y el sistema
                automáticamente buscará la ruta óptima para que sea ejecutada por el personal en
                terreno.
              </p>
              <p>
                Con MovilForm podrás registrar todas las actividades realizadas en terreno, tales
                como inspecciones técnicas, reparaciones de fibra óptica, cambios de hardware,
                mantenimiento de sitios móviles, checklist de herramientas o EPP y mucho más.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. GESTIÓN DE RUTAS ─────────────────────────────────────────── */}
        <FeatureSection
          title="Gestión de Rutas"
          imageSrc={IMG_GESTION}
          imageAlt="Gestiona tus rutas en cualquier lugar con MovilForm"
        >
          <p>
            Las rutas son claves para la atención de tus clientes. Con MovilForm podrás
            crear y asignar rutas indicando el personal que ejecutará la actividad y el
            vehículo en cual lo realizarán, los puntos de servicio, y otras variables que
            desees incorporar.
          </p>
        </FeatureSection>

        {/* ── 3. PLANIFICA Y OPTIMIZA ──────────────────────────────────────── */}
        <FeatureSection
          title={<>Planifica y Optimiza<br />tus rutas</>}
          imageSrc={IMG_OPTIMIZA}
          imageAlt="Módulo de Rutas - plataforma web MovilForm"
          imageShadow
        >
          <p>
            Ingresa a la plataforma web y planifica y optimiza las rutas que deben
            realizar tus equipos en terreno, llevando un seguimiento preciso de cada
            servicio solicitado. Con MovilForm, aseguras una ejecución eficiente y en
            línea con las necesidades de cada cliente.
          </p>
        </FeatureSection>

      </div>

      {/* ── 4. MÁS SERVICIOS ────────────────────────────────────────────────── */}
      <ServicesCarousel currentSlug="modulo-de-rutas" />

      <Footer />
    </main>
  );
}

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeatureSection from "@/app/components/FeatureSection";
import ServicesCarousel from "@/app/components/ServicesCarousel";

const IMG_VISUALIZA = "/servicios/modulo-de-tareas/visualiza-tareas.webp";
const IMG_DETALLE   = "/servicios/modulo-de-tareas/detalle-tarea.webp";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ModuloDeTareas() {
  return (
    <main className="w-full bg-[#feeaed] min-h-screen">

      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <div className="relative h-[88px]">
        <Navbar />
      </div>

      <div className="mt-10 pb-16 flex flex-col gap-6 max-w-7xl mx-auto">

        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px]">
          <div className="grid grid-cols-[40%_1fr] gap-12 items-center">
            <h1 className="font-satoshi text-[60px] font-black text-[#e52533] leading-[68px]">
              Módulo de<br />Tareas
            </h1>
            <div className="font-satoshi text-[17px] text-[#231d1b] leading-[28px] space-y-4">
              <p>
                Con el módulo de tareas podrás programar visitas individuales sin necesidad de
                asignarlas a una ruta, pudiendo manejar diferentes servicios en una misma visita.
              </p>
              <p>
                Si tienes una emergencia o necesitas realizar una mantención a un cliente
                específico, asigna una tarea con MovilForm.
              </p>
              <p>
                El personal en terreno podrá tener una programación con tareas específicas para
                realizar en uno o más clientes, esta funcionalidad es utilizada en visitas que
                requieren muchas horas en un cliente, emergencias o apoyo a un equipo en terreno.
              </p>
              <p>
                Selecciona el cliente a visitar, servicio y el equipo técnico para que MovilForm
                cargue los servicios y el personal en terreno comience a registrar la actividad.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. VISUALIZA TAREAS (imagen izquierda) ──────────────────────── */}
        <FeatureSection
          title="Visualiza tus tareas programadas y en ejecución"
          imageSrc={IMG_VISUALIZA}
          imageAlt="Visualiza tus tareas programadas con MovilForm"
          imagePosition="left"
          imageShadow
        >
          <p>
            Con la vista de resumen, podrás ver detalles de la programación de la ruta,
            como el cliente a visitar, las fechas de inicio y fin, el trabajador asignado y el
            estado de la ruta.
          </p>
        </FeatureSection>

        {/* ── 3. DETALLE DE TAREA (imagen derecha) ────────────────────────── */}
        <FeatureSection
          title="Revisa el detalle de cada tarea"
          imageSrc={IMG_DETALLE}
          imageAlt="Detalle de tarea en la plataforma MovilForm"
          imageShadow
        >
          <p>
            Podrás acceder al detalle de cada tarea y revisar toda la información capturada
            por sus formularios y el estado de realización de estos, el cual es indicado con
            los colores verde (completado) y rojo (no completado), y además tendrás la
            posibilidad de ver cada formulario en formato de reporte web y descargarlo en
            PDF.
          </p>
        </FeatureSection>

      </div>

      {/* ── 4. MÁS SERVICIOS ────────────────────────────────────────────────── */}
      <ServicesCarousel currentSlug="modulo-de-tareas" />

      <Footer />
    </main>
  );
}

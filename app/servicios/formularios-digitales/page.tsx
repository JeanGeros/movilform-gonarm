import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formularios Digitales - Movilform",
  description:
    "Captura datos con formularios digitales de MovilForm diseña plantillas personalizadas, registra ubicación y firma, y genera reportes automáticos desde cualquier dispositivo",
  alternates: { canonical: "/servicios/formularios-digitales" },
};

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeatureSection from "@/app/components/FeatureSection";
import ServicesCarousel from "@/app/components/ServicesCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faFileSignature, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const IMG_LAPTOP    = "/servicios/formularios-digitales/laptop.webp";
const IMG_TECH      = "/servicios/formularios-digitales/technician.webp";

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepItem({
  icon,
  title,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-6 border-0">
      <div className="flex-shrink-0 w-[70px] h-[70px] md:w-[110px] md:h-[110px] mt-2 rounded-full bg-[#f6c5cd] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-satoshi text-[24px] md:text-[32px] font-bold text-black leading-[32px] md:leading-[42px]">
          {title}
        </h3>
        <ul className="mt-2 space-y-1">
          {bullets.map((b) => (
            <li key={b} className="font-satoshi text-[14px] md:text-[16px] font-medium text-black leading-[22px] md:leading-[27px]">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FormulariosDigitales() {
  return (
    <main className="w-full bg-[#feeaed] min-h-screen flex flex-col">

      {/* ── Navbar overlay ──────────────────────────────────────────────────── */}
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 mt-10 pb-16 flex flex-col gap-10 max-w-7xl mx-auto">

        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-[42%_1fr] gap-8 md:gap-12 items-center">
            <h1 className="font-satoshi text-[36px] md:text-[64px] font-black text-[#e52533] leading-[42px] md:leading-[68px]">
              Formularios<br />Digitales
            </h1>
            <div className="font-satoshi text-[15px] md:text-[17px] text-[#231d1b] leading-[24px] md:leading-[28px] space-y-4">
              <p>
                Los formularios digitales han sido diseñados para capturar información de forma
                ordenada y efectiva. Esta tecnología es una evolución del formulario en papel, la
                cual permite que los equipos de trabajo aumenten su productividad y eficiencia.
              </p>
              <p>
                Con MovilForm podrás crear y editar de forma sencilla formularios digitales o
                checklists para cualquier tipo de trabajo que se realice en terreno.
              </p>
              <p>
                Recibirás de forma rápida y eficientemente la información capturada, para así
                compartirla con tu equipo o clientes.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. EFFICIENCY ───────────────────────────────────────────────── */}
        <FeatureSection
          title={<>Mejora en la eficiencia y<br />productividad</>}
          imageSrc={IMG_LAPTOP}
          imageAlt="Plataforma MovilForm en laptop y móvil"
        >
          <p>
            Con MovilForm, puedes despedirte de los formularios de papel y dar la bienvenida
            a un sistema digital intuitivo.
          </p>
          <p>
            Diseña y personaliza formularios, crea y optimiza rutas todo esto adaptado a las
            necesidades de tu equipo, agilizando el trabajo en terreno y reduciendo el tiempo
            utilizado para capturar y procesar datos.
          </p>
        </FeatureSection>

        {/* ── 3. FUNCTIONALITIES ──────────────────────────────────────────── */}
        <FeatureSection
          title={<>Funcionalidades para un<br />mayor control</>}
          imageSrc={IMG_TECH}
          imageAlt="Técnico en terreno usando MovilForm"
          imageShadow
        >
          <ul className="space-y-5">
            <li>
              Registra automáticamente la ubicación, fecha y hora de cuándo y dónde se
              completó un formulario, captura firmas directamente en el formulario para
              garantizar aprobaciones rápidas y seguras.
            </li>
            <li>
              Visualiza en el mapa la información los puntos visitados y formularios completados.
            </li>
            <li>
              Documenta cada proceso con fotografías integradas en el formulario.
            </li>
            <li>
              Asegura datos precisos y completos, utilizando selectores múltiples tipo combobox
              y checkbox facilitando el registro de datos y la generación de reportes y auditorías
              a la información.
            </li>
          </ul>
        </FeatureSection>

        {/* ── 4. HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-6 py-8 md:px-[70px] md:py-[50px]">
          <h2 className="font-satoshi text-[28px] md:text-[38px] font-extrabold text-[#192437] leading-[34px] md:leading-[46px]">
            ¿Como funciona?
          </h2>
          <div className="mt-8 divide-y divide-gray-100">
            <StepItem
              icon={<FontAwesomeIcon icon={faPlusCircle} className="text-[2rem] md:text-[4rem] text-white" />}
              title="Crear"
              bullets={[
                "- Edita una plantilla o comienza desde cero en el diseñador de formularios.",
                "- Crea tu formulario con múltiples opciones de personalización.",
                "- Genera rutas y tareas para asignar a tu equipo.",
                "- Puedes realizarlo desde la web o con autoasignación desde la aplicación móvil.",
              ]}
            />
            <StepItem
              icon={<FontAwesomeIcon icon={faFileSignature} className="text-[2rem] md:text-[4rem] text-white" />}
              title="Asignar"
              bullets={[
                "- Selecciona o crea una ruta o tarea.",
                "- Asigna uno o más clientes a visitar.",
                "- Carga los servicios o formularios digitales a completar.",
                "- Asigna la visita a tu personal en terreno.",
              ]}
            />
            <StepItem
              icon={<FontAwesomeIcon icon={faFileAlt} className="text-[2rem] md:text-[4rem] text-white" />}
              title="Recibir información"
              bullets={[
                "- Recibe los datos capturados de forma automática y online.",
                "- Completa flujos de procesos y actualiza estados.",
                "- Genera y envía informes o reportes de forma automática.",
                "- Muestra la información en un portal para tus clientes.",
                "- Envía los datos a otro sistema por la API de integración.",
              ]}
            />
          </div>
        </section>

      </div>

      {/* ── 5. MORE SERVICES ────────────────────────────────────────────────── */}
      <ServicesCarousel currentSlug="formularios-digitales" />

      <Footer cardBg="bg-white" />
    </main>
  );
}

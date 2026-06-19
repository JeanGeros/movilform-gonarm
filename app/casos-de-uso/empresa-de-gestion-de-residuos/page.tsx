import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BenefitsCarousel from "../BenefitsCarousel";
import FeaturesCardCarousel from "../FeaturesCardCarousel";
import { faTasks, faMapMarkedAlt, faRoute, faTabletAlt } from "@fortawesome/free-solid-svg-icons";


const IMG_HERO          = "/casos-de-uso/empresa-de-gestion-de-residuos/hero.webp";
const IMG_EFICIENCIA    = "/casos-de-uso/empresa-de-gestion-de-residuos/eficiencia.webp";
const IMG_ACCESIBILIDAD = "/casos-de-uso/empresa-de-gestion-de-residuos/accesibilidad.webp";
const IMG_PRODUCTIVIDAD = "/casos-de-uso/empresa-de-gestion-de-residuos/productividad.webp";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EmpresaDeGestionDeResiduos() {
  return (
    <main className="w-full bg-white min-h-screen flex flex-col">

      <div className="relative h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 pb-16 flex flex-col gap-6 max-w-7xl mx-auto">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="relative rounded-[20px] overflow-hidden h-[250px] md:h-[400px]">
          <img
            src={IMG_HERO}
            alt="Gestión de residuos domiciliarios e industriales"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 rounded-[20px]" />
          <div className="relative h-full flex items-center justify-center px-6">
            <h1 className="font-satoshi text-[26px] md:text-[38px] font-bold text-white text-center leading-[34px] md:leading-[48px]">
              Gestión de residuos domiciliarios e industriales
            </h1>
          </div>
        </section>

        {/* ── 2. INTRO DOS COLUMNAS ────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-4 items-center">
              <div className="w-[9px] hidden md:block flex-shrink-0 self-stretch rounded-full bg-[#feeaed]" />
              <p className="font-satoshi text-[16px] text-[#231d1b] leading-[24px] md:leading-[26px] text-justify">
                Si tu empresa pertenece al rubro de la gestión de residuos industriales,
                domiciliarios, de contenedores o reciclaje, estás en el lugar correcto.
                MovilForm te permitirá planificar todos los servicios de recolección que
                se necesiten diariamente, considerando diferentes variables como tipos
                de vehículos, turnos del personal y servicios a realizar.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-[9px]  hidden md:block flex-shrink-0 rounded-full bg-[#feeaed]" />
              <div className="font-satoshi text-[16px] text-[#231d1b] leading-[24px] md:leading-[26px] space-y-4 text-justify">
                <p>
                  Además, podrás optimizar los servicios de forma automática, generando
                  importantes ahorros de tiempo, combustible y desgaste del vehículo, lo
                  cual impactará directa y positivamente en tu presupuesto operativo.
                </p>
                <p>
                  También podrás generar informes o reportes automáticos para tus
                  clientes, manteniéndolos informados en todo momento, mejorando tu
                  imagen y compromiso como empresa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. COMPROMISO Y EXCELENCIA ───────────────────────────────────── */}
        <section className="bg-[#feeaed] rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px] my-4 md:my-10 text-center">
          <h2 className="font-satoshi text-[28px] md:text-[40px] font-extrabold text-[#e22939] leading-[34px] md:leading-[40px]">
            Compromiso y excelencia
          </h2>
          <p className="font-satoshi mt-4 md:mt-6 text-[15px] md:text-[16px] text-[#232321] leading-[24px] md:leading-[26px] max-w-[500px] mx-auto">
            Nos especializamos en digitalizar procesos con tecnología intuitiva y eficiente.
            Trabajamos junto a nuestros clientes para asegurar la mejor experiencia y calidad
            en los resultados.
          </p>
        </section>

        {/* ── 4. BENEFICIOS ────────────────────────────────────────────────── */}
        <div>
          <h2 className="font-satoshi text-[24px] md:text-[32px] font-extrabold text-[#e22939] text-center leading-[30px] md:leading-[40px] mb-6">
            Beneficios para tu empresa
          </h2>
          <BenefitsCarousel
            benefits={[
              {
                img: IMG_EFICIENCIA,
                alt: "Eficiencia operativa",
                title: "Eficiencia",
                desc: "Planifica tus servicios y optimiza los recursos y aumenta el control de las tareas que se ejecutan diariamente.",
              },
              {
                img: IMG_ACCESIBILIDAD,
                alt: "Accesibilidad desde smartphones",
                title: "Accesibilidad",
                desc: "Desde tu Smartphone o Tablet, captura toda la información que necesites y envía reportes automáticos.",
              },
              {
                img: IMG_PRODUCTIVIDAD,
                alt: "Productividad con formularios digitales",
                title: "Productividad",
                desc: "Simplifica tus procesos y facilita el trabajo de tu equipo utilizando formularios digitales.",
              },
            ]}
          />
        </div>

        {/* ── 5. BANNER CTA ────────────────────────────────────────────────── */}
        <section className="bg-[#feeaed] rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px] text-center">
          <p className="font-satoshi text-[22px] md:text-[32px] font-bold text-[#192437] leading-[30px] md:leading-[36px] max-w-[780px] mx-auto">
            Planifica tus servicios y optimiza los recursos, consiguiendo <span className="text-[#e22939]"> control y eficiencia </span>
            para tu empresa
          </p>
        </section>

        {/* ── 6. FUNCIONALIDADES ───────────────────────────────────────────── */}
        <FeaturesCardCarousel
          features={[
            { icon: faTasks, title: "Asigna tareas", desc: "Asigna tareas individuales sin necesidad de generar rutas y registra toda la actividad realizada en terreno." },
            { icon: faMapMarkedAlt, title: "Planifica rutas", desc: "Establece los criterios necesarios para planificar tus servicios diarios, semanales o mensuales." },
            { icon: faRoute, title: "Optimiza rutas", desc: "Mejora la eficiencia y reduce costos operativos con la mejor secuencia de atención." },
            { icon: faTabletAlt, title: "Controla rutas", desc: "Realiza el seguimiento de los servicios de forma remota y totalmente online." },
          ]}
        />

      </div>

      <Footer />
    </main>
  );
}
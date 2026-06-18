import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeatureSection from "@/app/components/FeatureSection";
import ServicesCarousel from "@/app/components/ServicesCarousel";

const IMG_REPORTES  = "/servicios/reportes-y-dashboards/reportes-informes.webp";
const IMG_INFO      = "/servicios/reportes-y-dashboards/informacion-linea.webp";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ReportesYDashboards() {
  return (
    <main className="w-full bg-[#feeaed] min-h-screen">

      <div className="relative h-[88px]">
        <Navbar />
      </div>

      <div className="mt-10 pb-16 flex flex-col gap-10 max-w-7xl mx-auto">

        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px]">
          <div className="grid grid-cols-[42%_1fr] gap-12 items-center">
            <h1 className="font-satoshi text-[60px] font-black text-[#e52533] leading-[68px]">
              Reportes y<br />Dashboard
            </h1>
            <div className="font-satoshi text-[17px] text-[#231d1b] leading-[28px] space-y-4">
              <p>
                Todas las actividades realizadas con MovilForm generan una gran cantidad de
                información y datos que se encuentran disponibles para realizar análisis y
                generación de reportes.
              </p>
              <p>
                Cuando un formulario es completado, el sistema tiene la capacidad de generar un
                informe automático con formato estándar en PDF para que sea entregado al cliente
                luego de realizada la visita.
              </p>
              <p>
                Con MovilForm también es posible generar reportes o informes totalmente
                personalizados según las necesidades que tengan, además estos pueden ser
                automatizados para ser enviados a los clientes finales.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. REPORTES E INFORMES (imagen izquierda) ───────────────────── */}
        <FeatureSection
          title="Reportes e informes"
          imageSrc={IMG_REPORTES}
          imageAlt="Dashboard de reportes en MovilForm"
          imagePosition="left"
          imageContain
        >
          <p>
            Todos los informes son generados de forma automática a partir de los datos
            capturados con la APP MovilForm, estos pueden mostrar los textos e imágenes
            capturadas por los formularios digitales. Además, la plataforma web cuenta con la
            opción de descargar la información en diferentes formatos como PDF, Excel o
            visualizar en la misma web.{" "}
            <strong className="text-[#192437]">Ver reporte PDF</strong>
          </p>
        </FeatureSection>

        {/* ── 3. INFORMACIÓN EN LÍNEA (imagen derecha) ────────────────────── */}
        <FeatureSection
          title="Información en línea"
          imageSrc={IMG_INFO}
          imageAlt="Visualiza en línea la información de tu empresa y sus reportes"
          imageContain
        >
          <p>
            Visualiza toda la información capturada de forma fácil y en diferentes formatos,
            accede a tu información histórica y elige el formato para descargar.
          </p>
        </FeatureSection>

      </div>

      {/* ── 4. MÁS SERVICIOS ────────────────────────────────────────────────── */}
      <ServicesCarousel currentSlug="reportes-y-dashboards" />

      <Footer cardBg="bg-white" />
    </main>
  );
}

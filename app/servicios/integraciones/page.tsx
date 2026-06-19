import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeatureSection from "@/app/components/FeatureSection";
import ServicesCarousel from "@/app/components/ServicesCarousel";

const IMG_ENWIS   = "/servicios/integraciones/integra-tus-sistemas.webp";
const IMG_GPSGATE = "/servicios/integraciones/monitoreo-flotas.webp";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Integraciones() {
  return (
    <main className="w-full bg-[#feeaed] min-h-screen flex flex-col">

      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 mt-10 pb-16 flex flex-col gap-10 max-w-7xl mx-auto">

        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-[42%_1fr] gap-8 md:gap-12 items-center">
            <h1 className="font-satoshi text-[36px] md:text-[60px] font-black text-[#e52533] leading-[42px] md:leading-[68px]">
              Integraciones
            </h1>
            <div className="font-satoshi text-[15px] md:text-[17px] text-justify text-[#231d1b] leading-[24px] md:leading-[25px] space-y-4">
              <p>
                MovilForm pone a disposición su API Rest de integración para diferentes tipos de
                softwares, ya sean propios o externos. Nuestros clientes tienen acceso a su
                información de forma automática, con la cual podrán realizar sus propios análisis
                y reportes o alimentar otros sistemas.
              </p>
              <p>
                Adicionalmente, nuestra aplicación móvil posee su propia API la cual permite
                consultar información directamente desde el smartphone o tablet hacia una base
                de datos propia del cliente, para luego ingresarla en el formulario digital. Un
                ejemplo de esta funcionalidad sería la extracción de datos de un inventario para
                agregarla de forma automática y online en el formulario digital que se está
                completando.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. INTEGRACIÓN CON BUSINESS CENTRAL Y ENWIS ─────────────────── */}
        <FeatureSection
          title={<>Integración de MovilForm con<br />Bussiness Central y ENWIS</>}
          imageSrc={IMG_ENWIS}
          imageAlt="Integración de MovilForm con Business Central y ENWIS"
          imageShadow
        >
          <p>
            ENWIS es una solución empresarial basada en la plataforma Business Central, el
            cual fue desarrollado por TegosGroup.
          </p>
          <p>
            La integración de MovilForm con ENWIS permite entregar una completa solución
            de última milla para la operación de Empresas de Recolección y Economía
            Circular.
          </p>
          <p>
            Para realizar esto, se implementa el módulo de rutas, donde las programaciones
            generadas en ENWIS son recibidas de forma automática, luego estas son
            asignadas al personal en terreno para realizar su labor diaria con la APP de
            MovilForm. Toda la información capturada es entregada de forma automática y
            online a través de la API de integración logrando procesar los diferentes tipos
            de servicios que las empresas requieran.
          </p>
        </FeatureSection>

        {/* ── 3. INTEGRACIÓN CON GPSGATE ──────────────────────────────────── */}
        <FeatureSection
          title={<>Integración de MovilForm con<br />GpsGate</>}
          imageSrc={IMG_GPSGATE}
          imageAlt="Integración de MovilForm con GpsGate para gestión de flotas"
          imageShadow
        >
          <p>
            GPSGate es una solución de gestión de flotas presente en más de 150 países
            permitiendo a sus clientes gestionar de manera eficiente sus flotas de vehículos.
          </p>
          <p>
            Los clientes de GPSGate podrán implementar el módulo de gestión rutas de
            MovilForm, con este módulo podrán generar y validar el cumplimiento de las rutas
            programadas, pudiendo, además, verificar la llegada del vehículo a cada cliente
            con el uso de la APP MovilForm o con la validación de ingreso al punto (POI)
            georreferenciado en el mapa guardado en GPSGate.
          </p>
        </FeatureSection>

      </div>

      {/* ── 4. MÁS SERVICIOS ────────────────────────────────────────────────── */}
      <ServicesCarousel currentSlug="integraciones" />

      <Footer cardBg="bg-white" />
    </main>
  );
}

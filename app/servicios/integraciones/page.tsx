import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const IMG_ENWIS   = "/servicios/integraciones/integra-tus-sistemas.webp";
const IMG_GPSGATE = "/servicios/integraciones/monitoreo-flotas.webp";

// ─── Service card icons ───────────────────────────────────────────────────────

function FormIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" />
      <path d="M5 7v5a5 5 0 0 0 5 5h4" /><polyline points="17 15 19 17 17 19" />
    </svg>
  );
}

function TaskIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" /><polyline points="9 15 11 17 15 13" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ServiceCard({ icon, title, description, href }: {
  icon: React.ReactNode; title: string; description: string; href: string;
}) {
  return (
    <a href={href} className="bg-white rounded-[20px] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <div className="w-[80px] h-[80px] rounded-full bg-[#feeaed] flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-satoshi mt-6 text-[22px] font-bold text-black leading-[30px]">{title}</h3>
      <p className="font-satoshi mt-3 text-[15px] font-medium text-[#3f4648] leading-[27px]">{description}</p>
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Integraciones() {
  return (
    <main className="w-full bg-[#feeaed] min-h-screen">

      <div className="relative h-[88px]">
        <Navbar />
      </div>

      <div className="px-[110px] pb-16 flex flex-col gap-6 max-w-[1440px] mx-auto">

        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px]">
          <div className="grid grid-cols-[42%_1fr] gap-12 items-center">
            <h1 className="font-satoshi text-[60px] font-black text-[#e52533] leading-[68px]">
              Integraciones
            </h1>
            <div className="font-satoshi text-[17px] text-[#231d1b] leading-[28px] space-y-4">
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
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-satoshi text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Integración de MovilForm con<br />Bussiness Central y ENWIS
              </h2>
              <div className="font-satoshi mt-8 text-[16px] text-[#232321] leading-[26px] space-y-4">
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
              </div>
            </div>
            <div className="rounded-[15px] overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]">
              <img
                src={IMG_ENWIS}
                alt="Integración de MovilForm con Business Central y ENWIS"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── 3. INTEGRACIÓN CON GPSGATE ──────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-satoshi text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Integración de MovilForm con<br />GpsGate
              </h2>
              <div className="font-satoshi mt-8 text-[16px] text-[#232321] leading-[26px] space-y-4">
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
              </div>
            </div>
            <div className="rounded-[15px] overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]">
              <img
                src={IMG_GPSGATE}
                alt="Integración de MovilForm con GpsGate para gestión de flotas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

      </div>

      {/* ── 4. MÁS SERVICIOS ────────────────────────────────────────────────── */}
      <section className="pb-16 max-w-[1440px] mx-auto px-[110px]">
        <h2 className="font-satoshi text-[45px] font-black text-[#e22939] text-center leading-[52px] mb-10">
          Conoce más de nuestros servicios
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <ServiceCard
            icon={<FormIcon />}
            title="Formularios Digitales"
            description="Los formularios digitales son la evolución del papel, diseña los tuyos con fotos, checkbox o desplegables, potencia tus equipos de trabajo."
            href="/servicios/formularios-digitales"
          />
          <ServiceCard
            icon={<RouteIcon />}
            title="Módulo de Rutas"
            description="Planifica tus servicios, programa fácilmente las visitas a tus clientes y recibe información en línea de las actividades ejecutadas."
            href="/servicios/modulo-de-rutas"
          />
          <ServiceCard
            icon={<TaskIcon />}
            title="Módulo de Tareas"
            description="Programa tus visitas individuales sin necesidad de asignarlas a una ruta, podrás incluir diferentes servicios en una misma visita."
            href="/servicios/modulo-de-tareas"
          />
          <ServiceCard
            icon={<ChartIcon />}
            title="Reportes y Dashboards"
            description="Accede a toda la información capturada con MovilForm, ya sea en un Dashboard o un reporte PDF los cuales son totalmente personalizados."
            href="/servicios/reportes-y-dashboards"
          />
          <ServiceCard
            icon={<UserIcon />}
            title="Portal de Clientes"
            description="Entrega a tus clientes un acceso exclusivo para compartir información de las actividades realizadas."
            href="/servicios/portal-de-clientes"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

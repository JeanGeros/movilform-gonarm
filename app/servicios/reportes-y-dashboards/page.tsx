import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const IMG_REPORTES  = "/servicios/reportes-y-dashboards/reportes-informes.webp";
const IMG_INFO      = "/servicios/reportes-y-dashboards/informacion-linea.webp";

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

function IntegrationIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="8" height="8" rx="1" /><rect x="14" y="14" width="8" height="8" rx="1" />
      <path d="M10 6h2a2 2 0 0 1 2 2v2" /><path d="M6 10v2a2 2 0 0 0 2 2h2" />
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
      <h3 className="font-inter mt-6 text-[22px] font-bold text-black leading-[30px]">{title}</h3>
      <p className="font-inter mt-3 text-[15px] font-medium text-[#3f4648] leading-[27px]">{description}</p>
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ReportesYDashboards() {
  return (
    <main className="w-full bg-[#feeaed] min-h-screen">

      <div className="relative h-[88px]">
        <Navbar />
      </div>

      <div className="px-[110px] pb-16 flex flex-col gap-6 max-w-[1440px] mx-auto">

        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px]">
          <div className="grid grid-cols-[42%_1fr] gap-12 items-center">
            <h1 className="font-inter text-[60px] font-black text-[#e52533] leading-[68px]">
              Reportes y<br />Dashboard
            </h1>
            <div className="font-inter text-[17px] text-[#231d1b] leading-[28px] space-y-4">
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
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden">
              <img
                src={IMG_REPORTES}
                alt="Dashboard de reportes en MovilForm"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="font-inter text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Reportes e informes
              </h2>
              <div className="font-inter mt-8 text-[16px] text-[#232321] leading-[26px] space-y-3">
                <p>
                  Todos los informes son generados de forma automática a partir de los datos
                  capturados con la APP MovilForm, estos pueden mostrar los textos e imágenes
                  capturadas por los formularios digitales. Además, la plataforma web cuenta con la
                  opción de descargar la información en diferentes formatos como PDF, Excel o
                  visualizar en la misma web.{" "}
                  <strong className="text-[#192437]">Ver reporte PDF</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. INFORMACIÓN EN LÍNEA (imagen derecha) ────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-inter text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Información en línea
              </h2>
              <div className="font-inter mt-8 text-[16px] text-[#232321] leading-[26px]">
                <p>
                  Visualiza toda la información capturada de forma fácil y en diferentes formatos,
                  accede a tu información histórica y elige el formato para descargar.
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                src={IMG_INFO}
                alt="Visualiza en línea la información de tu empresa y sus reportes"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

      </div>

      {/* ── 4. MÁS SERVICIOS ────────────────────────────────────────────────── */}
      <section className="pb-16 max-w-[1440px] mx-auto px-[110px]">
        <h2 className="font-inter text-[45px] font-black text-[#e22939] text-center leading-[52px] mb-10">
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
            icon={<IntegrationIcon />}
            title="Integraciones"
            description="A través de nuestra API, podrás integrar tu software propio o uno externo y recibirás información de forma automática y online."
            href="/servicios/integraciones"
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

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const IMG_GESTION   = "/servicios/modulo-de-rutas/gestion-rutas.webp";
const IMG_OPTIMIZA  = "/servicios/modulo-de-rutas/optimiza-rutas.webp";

// ─── Service card icons ───────────────────────────────────────────────────────

function FormIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
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

function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="bg-white rounded-[20px] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
    >
      <div className="w-[80px] h-[80px] rounded-full bg-[#feeaed] flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-satoshi mt-6 text-[22px] font-bold text-black leading-[30px]">
        {title}
      </h3>
      <p className="font-satoshi mt-3 text-[15px] font-medium text-[#3f4648] leading-[27px]">
        {description}
      </p>
    </a>
  );
}

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
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-satoshi text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Gestión de Rutas
              </h2>
              <div className="font-satoshi mt-8 text-[16px] text-[#232321] leading-[26px] space-y-4">
                <p>
                  Las rutas son claves para la atención de tus clientes. Con MovilForm podrás
                  crear y asignar rutas indicando el personal que ejecutará la actividad y el
                  vehículo en cual lo realizarán, los puntos de servicio, y otras variables que
                  desees incorporar.
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                src={IMG_GESTION}
                alt="Gestiona tus rutas en cualquier lugar con MovilForm"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── 3. PLANIFICA Y OPTIMIZA ──────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-satoshi text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Planifica y Optimiza<br />tus rutas
              </h2>
              <div className="font-satoshi mt-8 text-[16px] text-[#232321] leading-[26px] space-y-4">
                <p>
                  Ingresa a la plataforma web y planifica y optimiza las rutas que deben
                  realizar tus equipos en terreno, llevando un seguimiento preciso de cada
                  servicio solicitado. Con MovilForm, aseguras una ejecución eficiente y en
                  línea con las necesidades de cada cliente.
                </p>
              </div>
            </div>
            <div className="rounded-[15px] overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]">
              <img
                src={IMG_OPTIMIZA}
                alt="Módulo de Rutas - plataforma web MovilForm"
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

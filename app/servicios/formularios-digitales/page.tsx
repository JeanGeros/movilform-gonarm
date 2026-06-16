import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const IMG_LAPTOP    = "/servicios/formularios-digitales/laptop.webp";
const IMG_TECH      = "/servicios/formularios-digitales/technician.webp";

// ─── Icon SVGs ────────────────────────────────────────────────────────────────

function PlusIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

function AssignIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="23" y1="11" x2="17" y2="11" />
      <line x1="20" y1="8" x2="20" y2="14" />
    </svg>
  );
}

function ReceiveIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

// ─── Service card icons ───────────────────────────────────────────────────────

function RouteIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" />
      <path d="M5 7v5a5 5 0 0 0 5 5h4" />
      <polyline points="17 15 19 17 17 19" />
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
    <div className="flex gap-8 py-10 border-b border-gray-100 last:border-0">
      <div className="flex-shrink-0 w-[110px] h-[110px] rounded-full bg-[#f6c5cd] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-satoshi text-[28px] font-bold text-black leading-[42px]">
          {title}
        </h3>
        <ul className="mt-2 space-y-1">
          {bullets.map((b) => (
            <li key={b} className="font-satoshi text-[15px] font-medium text-black leading-[27px]">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
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

export default function FormulariosDigitales() {
  return (
    <main className="w-full bg-[#feeaed] min-h-screen">

      {/* ── Navbar overlay ──────────────────────────────────────────────────── */}
      <div className="relative h-[88px]">
        <Navbar />
      </div>

      <div className="px-[110px] pb-16 flex flex-col gap-6 max-w-[1440px] mx-auto">

        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px]">
          <div className="grid grid-cols-[42%_1fr] gap-12 items-center">
            <h1 className="font-satoshi text-[60px] font-black text-[#e52533] leading-[68px]">
              Formularios<br />Digitales
            </h1>
            <div className="font-satoshi text-[17px] text-[#231d1b] leading-[28px] space-y-4">
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
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-satoshi text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Mejora en la eficiencia y<br />productividad
              </h2>
              <div className="font-satoshi mt-8 text-[15px] text-[#232321] leading-[26px] space-y-4">
                <p>
                  Con MovilForm, puedes despedirte de los formularios de papel y dar la bienvenida
                  a un sistema digital intuitivo.
                </p>
                <p>
                  Diseña y personaliza formularios, crea y optimiza rutas todo esto adaptado a las
                  necesidades de tu equipo, agilizando el trabajo en terreno y reduciendo el tiempo
                  utilizado para capturar y procesar datos.
                </p>
              </div>
            </div>
            <div className="rounded-[15px] overflow-hidden">
              <img
                src={IMG_LAPTOP}
                alt="Plataforma MovilForm en laptop y móvil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── 3. FUNCTIONALITIES ──────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-satoshi text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Funcionalidades para un<br />mayor control
              </h2>
              <ul className="font-satoshi mt-10 text-[15px] text-[#232321] leading-[26px] space-y-5">
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
            </div>
            <div className="rounded-[15px] overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]">
              <img
                src={IMG_TECH}
                alt="Técnico en terreno usando MovilForm"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── 4. HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <h2 className="font-satoshi text-[38px] font-extrabold text-[#192437] leading-[46px]">
            ¿Como funciona?
          </h2>
          <div className="mt-8 divide-y divide-gray-100">
            <StepItem
              icon={<PlusIcon />}
              title="Crear"
              bullets={[
                "- Edita una plantilla o comienza desde cero en el diseñador de formularios.",
                "- Crea tu formulario con múltiples opciones de personalización.",
                "- Genera rutas y tareas para asignar a tu equipo.",
                "- Puedes realizarlo desde la web o con autoasignación desde la aplicación móvil.",
              ]}
            />
            <StepItem
              icon={<AssignIcon />}
              title="Asignar"
              bullets={[
                "- Selecciona o crea una ruta o tarea.",
                "- Asigna uno o más clientes a visitar.",
                "- Carga los servicios o formularios digitales a completar.",
                "- Asigna la visita a tu personal en terreno.",
              ]}
            />
            <StepItem
              icon={<ReceiveIcon />}
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
      <section className="pb-16 max-w-[1440px] mx-auto px-[110px]">
        <h2 className="font-satoshi text-[45px] font-black text-[#e22939] text-center leading-[52px] mb-10">
          Conoce más de nuestros servicios
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <ServiceCard
            icon={<RouteIcon />}
            title="Módulo de Rutas"
            description="Planifica tus servicios, programa fácilmente las visitas a tus clientes y recibe información en línea de las actividades ejecutadas."
            href="/servicios/modulo-de-rutas"
          />
          <ServiceCard
            icon={<TaskIcon />}
            title="Módulo de Tareas"
            description="Programa tus visitas individuales sin necesidad de asignarlas a una ruta, podrás incluir diferentes servicios en una misma visita y validar los trabajos realizados de forma online."
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

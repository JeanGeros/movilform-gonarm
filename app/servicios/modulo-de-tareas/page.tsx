import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const IMG_VISUALIZA = "/servicios/modulo-de-tareas/visualiza-tareas.webp";
const IMG_DETALLE   = "/servicios/modulo-de-tareas/detalle-tarea.webp";

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

function RouteIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" />
      <path d="M5 7v5a5 5 0 0 0 5 5h4" />
      <polyline points="17 15 19 17 17 19" />
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
  icon, title, description, href,
}: {
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

export default function ModuloDeTareas() {
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
            <h1 className="font-inter text-[60px] font-black text-[#e52533] leading-[68px]">
              Módulo de<br />Tareas
            </h1>
            <div className="font-inter text-[17px] text-[#231d1b] leading-[28px] space-y-4">
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
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Imagen a la izquierda con sombra inversa */}
            <div className="rounded-[15px] overflow-hidden shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]">
              <img
                src={IMG_VISUALIZA}
                alt="Visualiza tus tareas programadas con MovilForm"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-inter text-[37px] font-extrabold text-[#192437] leading-[46px]">
                Visualiza tus tareas programadas y en ejecución
              </h2>
              <div className="font-inter mt-8 text-[16px] text-[#232321] leading-[26px] space-y-4">
                <p>
                  Con la vista de resumen, podrás ver detalles de la programación de la ruta,
                  como el cliente a visitar, las fechas de inicio y fin, el trabajador asignado y el
                  estado de la ruta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. DETALLE DE TAREA (imagen derecha) ────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-inter text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Revisa el detalle de cada tarea
              </h2>
              <div className="font-inter mt-8 text-[16px] text-[#232321] leading-[26px] space-y-4">
                <p>
                  Podrás acceder al detalle de cada tarea y revisar toda la información capturada
                  por sus formularios y el estado de realización de estos, el cual es indicado con
                  los colores verde (completado) y rojo (no completado), y además tendrás la
                  posibilidad de ver cada formulario en formato de reporte web y descargarlo en
                  PDF.
                </p>
              </div>
            </div>
            <div className="rounded-[15px] overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]">
              <img
                src={IMG_DETALLE}
                alt="Detalle de tarea en la plataforma MovilForm"
                className="w-full h-full object-cover"
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

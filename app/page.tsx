import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const IMG_HERO        = "/inicio/hero.jpg";
const IMG_TEAM        = "/inicio/team.jpg";
const IMG_TASKS       = "/inicio/tasks.jpg";
const IMG_CODING      = "/inicio/coding.png";
const IMG_INNOVATION  = "/inicio/innovation.png";
const IMG_QUALITY     = "/inicio/quality.png";
const IMG_CLIENT_10   = "/inicio/client10.png";
const IMG_CLIENT_1    = "/inicio/client1.png";
const IMG_CLIENT_2    = "/inicio/client2.png";
const IMG_CLIENT_3    = "/inicio/client3.png";
const IMG_CLIENT_4    = "/inicio/client4.png";
const IMG_USE_CASE_BG = "/inicio/usecase-bg.jpg";
const IMG_SERVICES    = "/inicio/services.png";
const IMG_WASTE       = "/inicio/waste.png";
const IMG_TELECOM     = "/inicio/telecom.png";
const IMG_PEST        = "/inicio/pest.png";
const IMG_INTEGRATION = "/inicio/integration.jpg";
const IMG_ARROW_LEFT  = "/inicio/arrow-left.png";
const IMG_ARROW_RIGHT = "/inicio/arrow-right.png";

// ─── Icon SVGs ────────────────────────────────────────────────────────────────

function FormIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4d4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4d4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M5 7v5a5 5 0 0 0 5 5h4" />
      <polyline points="17 15 19 17 17 19" />
    </svg>
  );
}

function TaskIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4d4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <polyline points="9 15 11 17 15 13" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4d4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <rect x="2" y="20" width="20" height="1" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4d4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="8" height="8" rx="1" />
      <rect x="14" y="14" width="8" height="8" rx="1" />
      <path d="M10 6h2a2 2 0 0 1 2 2v2" />
      <path d="M14 10V8" />
      <path d="M6 10v2a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4d4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SolutionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#feeaed] rounded-[20px] p-[30px]">
      <div className="w-20 h-20 bg-white rounded-[40px] flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-satoshi mt-7 text-[22px] font-bold text-black leading-[31px]">
        {title}
      </h3>
      <p className="font-satoshi mt-3 text-[16px] font-medium text-[#3f4648] leading-[26px]">
        {description}
      </p>
    </div>
  );
}

function UseCaseCard({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative bg-[#f9dfe2] rounded-[12px] pt-[80px] pb-8 px-8">
      <div className="absolute -top-[55px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] rounded-full bg-[#f9dfe2] flex items-center justify-center overflow-hidden">
        <img src={img} alt={title} className="w-2/3 h-2/3 object-contain" />
      </div>
      <h3 className="font-satoshi text-[22px] font-black text-[#313131] leading-[26px]">
        {title}
      </h3>
      <p className="font-satoshi mt-3 text-[16px] text-[#3f4648] leading-[27px]">
        {description}
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Inicio() {
  return (
    <main className="w-full bg-white">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[700px] overflow-hidden">
        <Navbar />
        <img
          src={IMG_HERO}
          alt=""
          className="absolute top-0 left-0 w-full h-[137%] object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(20,20,20,0.8)]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
          <h1 className="font-satoshi text-[55px] font-bold leading-[65px] tracking-[-1px] text-white max-w-[860px]">
            Integraciones, personalización<br />y mucho más.
          </h1>
          <p className="font-satoshi font-medium mt-7 text-[20px] leading-[22px] text-[#b5b5b5] max-w-[600px]">
            Integra tu software con MovilForm, podrás extraer o enviar
            datos, completa tus formularios digitales y optimiza tus procesos.
          </p>
          <div className="flex gap-4 mt-10">
            <a
              href="#"
              className="font-satoshi inline-flex items-center justify-center h-[50px] px-8 rounded-[30px] bg-[rgba(229,35,51,0.8)] text-white text-[18px] font-bold hover:bg-[#e52333] transition-colors"
            >
              Ver servicios
            </a>
            <a
              href="#"
              className="font-satoshi inline-flex items-center justify-center h-[50px] px-8 rounded-[30px] bg-[rgba(229,35,51,0.8)] text-white text-[18px] font-bold hover:bg-[#e52333] transition-colors"
            >
              Solicitar demo
            </a>
          </div>
        </div>

        <button
          aria-label="Anterior"
          className="absolute left-5 top-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors"
        >
          <img src={IMG_ARROW_LEFT} alt="" className="w-[9px] h-5" />
        </button>
        <button
          aria-label="Siguiente"
          className="absolute right-5 top-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors"
        >
          <img src={IMG_ARROW_RIGHT} alt="" className="w-[9px] h-5" />
        </button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-[5px]">
          <div className="w-[60px] h-[3px] rounded-full bg-white/30" />
          <div className="w-[60px] h-[3px] rounded-full bg-white/70" />
        </div>
      </section>

      {/* ── 2. VALUE PROPOSITION ────────────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-[70px] pt-28 pb-16">
        <h2 className="font-satoshi text-[42px] font-black leading-[49px] text-center max-w-[760px] mx-auto">
          <span className="text-[#192437]">Simplificamos tus </span>
          <span className="text-[#e42433]">procesos,</span>
          <br />
          <span className="text-[#192437]">impulsamos tu </span>
          <span className="text-[#e42433]">crecimiento.</span>
        </h2>
        <p className="font-satoshi mt-10 text-[16.8px] leading-[25px] text-black text-justify max-w-[960px] mx-auto">
          Transformamos la gestión de procesos operativos mediante la
          digitalización de documentos, la optimización de rutas y la
          programación de tareas. Ofrecemos soluciones seguras y personalizadas,
          ayudando a las empresas a ahorrar tiempo y costos operativos para
          alcanzar un crecimiento eficiente.
        </p>
      </section>

      {/* ── 3. IMAGES ───────────────────────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-[140px] pb-20">
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[15px] overflow-hidden aspect-[510/360]">
            <img src={IMG_TEAM} alt="Equipo técnico utilizando MovilForm" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[15px] overflow-hidden h-[360px]">
            <img src={IMG_TASKS} alt="Vista de tareas asignadas a diferentes técnicos" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── 4. FEATURES ─────────────────────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-[70px] pb-24">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-[100px] h-[100px]">
              <img src={IMG_CODING} alt="" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-satoshi mt-6 text-[20px] font-bold text-black leading-[27px]">
              Plataforma Web:
            </h3>
            <p className="font-satoshi mt-2 text-[16px] leading-[22px] text-black">
              Accede a diferentes módulos para gestionar tu operación.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-[100px] h-[100px]">
              <img src={IMG_INNOVATION} alt="" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-satoshi mt-6 text-[20px] font-bold text-black leading-[27px]">
              Innovación reconocida:
            </h3>
            <p className="font-satoshi mt-2 text-[16px] leading-[22px] text-black">
              MovilForm es utilizado por empresas líderes del mercado nacional e internacional.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-[100px] h-[100px]">
              <img src={IMG_QUALITY} alt="" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-satoshi mt-6 text-[20px] font-bold text-black leading-[27px]">
              Compromiso con el éxito:
            </h3>
            <p className="font-satoshi mt-2 text-[16px] leading-[22px] text-black">
              Estamos para apoyarte y alcanzar el éxito de tu operación.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. CLIENTS CAROUSEL ─────────────────────────────────────────────── */}
      <section className="mx-[70px] rounded-[20px] bg-[#e42233] py-10 px-[130px]">
        <h2 className="font-satoshi text-[38px] font-black text-white text-center leading-[40px]">
          Empresas que confían en nosotros
        </h2>
        <div className="mt-6 flex items-center justify-between h-[121px] overflow-hidden">
          <img src={IMG_CLIENT_10} alt="Cliente" className="h-[60px] w-auto object-contain" />
          <img src={IMG_CLIENT_1}  alt="Cliente" className="h-[60px] w-auto object-contain" />
          <img src={IMG_CLIENT_2}  alt="Cliente" className="h-[60px] w-auto object-contain" />
          <img src={IMG_CLIENT_3}  alt="Cliente" className="h-[60px] w-auto object-contain" />
          <img src={IMG_CLIENT_4}  alt="Cliente" className="h-[60px] w-auto object-contain" />
        </div>
        <div className="flex justify-center gap-1 mt-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-[6px] h-[6px] rounded-full bg-white/70" />
          ))}
          <div className="w-[6px] h-[6px] rounded-full bg-red-600" />
        </div>
      </section>

      {/* ── 6. SOLUTIONS ────────────────────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-[70px] py-20">
        <h2 className="font-satoshi text-[37px] font-extrabold text-black text-center leading-[40px]">
          Soluciones que se adaptan a tus necesidades
        </h2>
        <p className="font-satoshi mt-8 text-[17px] text-[#3f4648] text-center leading-[32px]">
          Con MovilForm podrás optimizar, gestionar y controlar de forma fácil y eficiente tu operación.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-6">
          <SolutionCard icon={<FormIcon />}        title="Módulo de Formularios"  description="Los formularios digitales son la evolución del papel, diseña los tuyos con fotos, checkbox o desplegables, potencia tus equipos de trabajo y aumenta su productividad y eficiencia." />
          <SolutionCard icon={<RouteIcon />}        title="Módulo de Rutas"         description="Planifica tus servicios, programa fácilmente las visitas a tus clientes y recibe información en línea de las actividades ejecutadas." />
          <SolutionCard icon={<TaskIcon />}         title="Módulo de Tareas"        description="Programa tus visitas individuales sin necesidad de asignarlas a una ruta, podrás incluir diferentes servicios en una misma visita y validar los trabajos realizados de forma online." />
          <SolutionCard icon={<ChartIcon />}        title="Reportes y Dashboards"   description="Accede a toda la información capturada con MovilForm, ya sea en un Dashboard o un reporte PDF los cuales son totalmente personalizados." />
          <SolutionCard icon={<IntegrationIcon />}  title="Integraciones"           description="A través de nuestra API, podrás integrar tu software propio o uno externo y recibirás información de forma automática y online." />
          <SolutionCard icon={<UserIcon />}         title="Portal de Clientes"      description="Entrega a tus clientes un acceso exclusivo para compartir información de las actividades realizadas." />
        </div>
      </section>

      {/* ── 7. USE CASES ────────────────────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-[70px] pb-20">
        <p className="font-satoshi text-[37px] font-extrabold text-[#e42433] text-center leading-[40px]">
          Casos de Usos
        </p>
        <h2 className="font-satoshi mt-10 text-[38px] font-bold text-black text-center leading-[40px]">
          Descubre cómo MovilForm impulsa la eficiencia en tu negocio
        </h2>

        <div className="mt-10 grid grid-cols-[390px_1fr] gap-6">
          {/* Dark left panel */}
          <div className="relative rounded-[12px] overflow-hidden row-span-2 min-h-[706px]">
            <img src={IMG_USE_CASE_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20 px-8">
              <h3 className="font-satoshi text-white text-[32px] font-bold text-center leading-[32px]">
                Automatiza y<br />digitaliza tus<br />procesos para<br />potenciar tu<br />operación.
              </h3>
              <a
                href="#"
                className="font-satoshi mt-8 flex items-center justify-center h-[40px] px-10 rounded-[14px] bg-[#1d1d1b] text-white text-[16px] hover:bg-[#333] transition-colors"
              >
                Haz clic aquí
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-14">
            <UseCaseCard img={IMG_SERVICES} title="Servicios Técnicos"    description="Organiza todos los requerimientos de tus clientes asignando tareas claras y visitas programadas a tus técnicos en terreno." />
            <UseCaseCard img={IMG_WASTE}    title="Gestión de Residuos"   description="Planifica servicios urbanos, industriales y gestiona residuos peligrosos, todo desde una misma aplicación." />
          </div>

          <div className="grid grid-cols-2 gap-6 mt-14">
            <UseCaseCard img={IMG_TELECOM} title="Telecomunicaciones"   description="Gestiona y asigna las reparaciones de fibra óptica, cambios de hardware, inspecciones, gestiona presupuestos y mucho más, digitaliza y mejora la operación de tu empresa." />
            <UseCaseCard img={IMG_PEST}    title="Controles de Plagas"  description="¿Realizas control de plagas, sanitización y desinfección ambiental? Con MovilForm podrás llevar el control de todas las visitas que realices a tus clientes emitiendo los certificados digitales de forma automática." />
          </div>
        </div>
      </section>

      {/* ── 8. INTEGRATION ──────────────────────────────────────────────────── */}
      <section className="mx-[70px] mb-16 rounded-[20px] bg-[#1d1d1b] overflow-hidden">
        <div className="grid grid-cols-2 min-h-[500px]">
          <div className="p-8">
            <div className="w-full h-full rounded-[15px] overflow-hidden">
              <img src={IMG_INTEGRATION} alt="Integración con MovilForm" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="font-satoshi flex flex-col justify-center px-10 py-16 text-white">
            <h2 className="font-satoshi text-[30px] font-black text-center leading-[32px]">
              Integre su sistema con MovilForm
            </h2>
            <p className="mt-8 text-[19px] leading-[28px]">
              Nuestra plataforma se integra fácilmente con tu ERP o sistema de
              información enviando y recibiendo datos de forma automática y
              totalmente online, eliminando el ingreso manual de información,
              mejorando la productividad y reduciendo costos operativos.
            </p>
            <p className="mt-6 text-[17px] leading-[22px]">
              ¡Con MovilForm sincronice sus datos y automatice procesos!
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center h-[49px] px-12 rounded-full bg-[#e22939] text-white text-[18px] font-black hover:bg-[#c01f2d] transition-colors"
              >
                Más información
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

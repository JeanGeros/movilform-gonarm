import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faRoute, faChartBar, faProjectDiagram, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FeaturesCarousel from "./components/FeaturesCarousel";
import ClientsCarousel from "./components/ClientsCarousel";

const IMG_HERO        = "/inicio/hero.jpg";
const IMG_TEAM        = "/inicio/team.jpg";
const IMG_TASKS       = "/inicio/tasks.jpg";
const IMG_USE_CASE_BG = "/inicio/usecase-bg.jpg";
const IMG_SERVICES    = "/inicio/services.png";
const IMG_WASTE       = "/inicio/waste.png";
const IMG_TELECOM     = "/inicio/telecom.png";
const IMG_PEST        = "/inicio/pest.png";
const IMG_INTEGRATION = "/inicio/integration.jpg";
const IMG_ARROW_LEFT  = "/inicio/arrow-left.png";
const IMG_ARROW_RIGHT = "/inicio/arrow-right.png";

// ─── Icons ────────────────────────────────────────────────────────────────────

function FormIcon()        { return <FontAwesomeIcon icon={faMobileAlt}       className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />; }
function RouteIcon()       { return <FontAwesomeIcon icon={faRoute}           className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />; }
function TaskIcon()        { return <FontAwesomeIcon icon={faFileAlt}         className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />; }
function ChartIcon()       { return <FontAwesomeIcon icon={faChartBar}        className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />; }
function IntegrationIcon() { return <FontAwesomeIcon icon={faProjectDiagram}  className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />; }
function UserIcon()        { return <FontAwesomeIcon icon={faUserCircle}      className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />; }

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
    <div className="group bg-[#feeaed] rounded-[20px] hover:bg-[#ebebeb] p-[30px] flex flex-col">
      <div className="flex items-center justify-center">
        <div className="w-20 h-20 bg-white rounded-[40px] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="font-satoshi mt-7 text-[24px] text-start font-bold text-black group-hover:text-[#e42233] leading-[31px] transition-colors duration-300">
        {title}
      </h3>
      <p className=" font-satoshi mt-3 text-[16px] font-medium text-[#3f4648] group-hover:text-[#192437] text-justify leading-[26px] transition-colors duration-300">
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
        <Image src={img} alt={title} width={80} height={80} className="w-2/3 h-2/3 object-contain" />
      </div>
      <h3 className="font-satoshi text-[24px] font-black text-[#313131] leading-[26px]">
        {title}
      </h3>
      <p className="font-satoshi mt-3 text-[16px] text-[#3f4648] leading-[27px] text-justify">
        {description}
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Inicio() {
  return (
    <main className="w-full bg-white min-h-screen flex flex-col">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
        <Navbar />
        <img
          src={IMG_HERO}
          alt=""
          className="absolute top-0 left-0 w-full h-[137%] object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(20,20,20,0.8)]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-8 pt-16 md:pt-0">
          <h1 className="font-satoshi text-[32px] md:text-[55px] font-bold leading-[40px] md:leading-[65px] tracking-[-1px] text-white max-w-[860px]">
            Integraciones, personalización<br className="hidden md:block" /> y mucho más.
          </h1>
          <p className="font-satoshi font-medium mt-5 md:mt-7 text-[16px] md:text-[20px] leading-[22px] text-[#b5b5b5] max-w-[600px]">
            Integra tu software con MovilForm, podrás extraer o enviar
            datos, completa tus formularios digitales y optimiza tus procesos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-30 mt-8 md:mt-10 w-[80%] sm:w-auto items-center">
            <a
              href="#"
              className="font-satoshi inline-flex items-center justify-center w-full sm:w-auto h-[46px] md:h-[50px] px-8 rounded-[30px] bg-[rgba(229,35,51,0.8)] text-white text-[16px] md:text-[18px] font-bold hover:bg-[#e52333] transition-colors"
            >
              Ver servicios
            </a>
            <a
              href="#"
              className="font-satoshi inline-flex items-center justify-center w-full sm:w-auto h-[46px] md:h-[50px] px-8 rounded-[30px] bg-[rgba(229,35,51,0.8)] text-white text-[16px] md:text-[18px] font-bold hover:bg-[#e52333] transition-colors"
            >
              Solicitar demo
            </a>
          </div>
        </div>

        <button
          aria-label="Anterior"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors"
        >
          <Image src={IMG_ARROW_LEFT} alt="" width={9} height={20} />
        </button>
        <button
          aria-label="Siguiente"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors"
        >
          <Image src={IMG_ARROW_RIGHT} alt="" width={9} height={20} />
        </button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-[5px]">
          <div className="w-[60px] h-[3px] rounded-full bg-white/30" />
          <div className="w-[60px] h-[3px] rounded-full bg-white/70" />
        </div>
      </section>

      {/* ── 2. VALUE PROPOSITION ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-[70px] pt-16 md:pt-28 pb-12 md:pb-16">
        <h2 className="font-satoshi text-[30px] md:text-[42px] font-black leading-[38px] md:leading-[49px] text-center max-w-[760px] mx-auto">
          <span className="text-[#192437]">Simplificamos tus </span>
          <span className="text-[#e42433]">procesos,</span>
          <br />
          <span className="text-[#192437]">impulsamos tu </span>
          <span className="text-[#e42433]">crecimiento.</span>
        </h2>
        <p className="font-satoshi mt-8 md:mt-10 text-[16px] md:text-[17.6px] leading-[24px] md:leading-[25px] text-black text-justify max-w-[960px] mx-auto">
          Transformamos la gestión de procesos operativos mediante la
          digitalización de documentos, la optimización de rutas y la
          programación de tareas. Ofrecemos soluciones seguras y personalizadas,
          ayudando a las empresas a ahorrar tiempo y costos operativos para
          alcanzar un crecimiento eficiente.
        </p>
      </section>

      {/* ── 3. IMAGES ───────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-[140px] pb-16 md:pb-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-26">
          <div className="hidden md:block rounded-[15px] overflow-hidden h-[360px]">
            <Image src={IMG_TEAM} alt="Equipo técnico utilizando MovilForm" width={600} height={360} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[15px] overflow-hidden h-[240px] md:h-[360px]">
            <Image src={IMG_TASKS} alt="Vista de tareas asignadas a diferentes técnicos" width={600} height={360} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── 4. FEATURES ─────────────────────────────────────────────────────── */}
      <FeaturesCarousel />

      {/* ── 5. CLIENTS ──────────────────────────────────────────────────────── */}
      <ClientsCarousel />

      {/* ── 6. SOLUTIONS ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-[70px] py-14 md:py-20">
        <h2 className="font-satoshi text-[28px] md:text-[40px] font-extrabold text-black text-center leading-[34px] md:leading-[40px]">
          Soluciones que se adaptan a tus necesidades
        </h2>
        <p className="font-satoshi mt-4 md:mt-5 text-[16px] md:text-[19.2px] text-[#3f4648] text-center leading-[26px] md:leading-[32px]">
          Con MovilForm podrás optimizar, gestionar y controlar de forma fácil y eficiente tu operación.
        </p>

        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <SolutionCard icon={<FormIcon />}        title="Módulo de Formularios"  description="Los formularios digitales son la evolución del papel, diseña los tuyos con fotos, checkbox o desplegables, potencia tus equipos de trabajo y aumenta su productividad y eficiencia." />
          <SolutionCard icon={<RouteIcon />}        title="Módulo de Rutas"         description="Planifica tus servicios, programa fácilmente las visitas a tus clientes y recibe información en línea de las actividades ejecutadas." />
          <SolutionCard icon={<TaskIcon />}         title="Módulo de Tareas"        description="Programa tus visitas individuales sin necesidad de asignarlas a una ruta, podrás incluir diferentes servicios en una misma visita y validar los trabajos realizados de forma online." />
          <SolutionCard icon={<ChartIcon />}        title="Reportes y Dashboards"   description="Accede a toda la información capturada con MovilForm, ya sea en un Dashboard o un reporte PDF los cuales son totalmente personalizados." />
          <SolutionCard icon={<IntegrationIcon />}  title="Integraciones"           description="A través de nuestra API, podrás integrar tu software propio o uno externo y recibirás información de forma automática y online." />
          <SolutionCard icon={<UserIcon />}         title="Portal de Clientes"      description="Entrega a tus clientes un acceso exclusivo para compartir información de las actividades realizadas." />
        </div>
      </section>

      {/* ── 7. USE CASES ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto mt-10 md:mt-0 px-6 md:px-[70px] pb-14 md:pb-20">
        <p className="font-satoshi text-[40px] md:text-[28px] md:text-[40px] font-extrabold text-[#e42433] text-center leading-[34px] md:leading-[40px]">
          Casos de Usos
        </p>
        <h2 className="font-satoshi mt-6 md:mt-10 text-[24px] md:text-[40px] font-bold text-black text-center leading-[25px] md:leading-[40px]">
          Descubre cómo MovilForm impulsa la eficiencia en tu negocio
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[390px_1fr] gap-6 gap-y-10">
          {/* Dark left panel */}
          <div className="relative hidden md:block rounded-[12px] overflow-hidden lg:row-span-2 min-h-[300px] lg:min-h-[706px]">
            <Image src={IMG_USE_CASE_BG} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center py-12 lg:pb-20 px-8">
              <h3 className="font-satoshi text-white text-[26px] lg:text-[32px] font-bold text-center leading-[32px]">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-25 md:gap-6 mt-18 md:mt-0 lg:mt-14">
            <UseCaseCard img={IMG_SERVICES} title="Servicios Técnicos"    description="Organiza todos los requerimientos de tus clientes asignando tareas claras y visitas programadas a tus técnicos en terreno." />
            <UseCaseCard img={IMG_WASTE}    title="Gestión de Residuos"   description="Planifica servicios urbanos, industriales y gestiona residuos peligrosos, todo desde una misma aplicación." />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-25 md:gap-6 mt-18 lg:mt-14">
            <UseCaseCard img={IMG_TELECOM} title="Telecomunicaciones"   description="Gestiona y asigna las reparaciones de fibra óptica, cambios de hardware, inspecciones, gestiona presupuestos y mucho más, digitaliza y mejora la operación de tu empresa." />
            <UseCaseCard img={IMG_PEST}    title="Controles de Plagas"  description="¿Realizas control de plagas, sanitización y desinfección ambiental? Con MovilForm podrás llevar el control de todas las visitas que realices a tus clientes emitiendo los certificados digitales de forma automática." />
          </div>
        </div>
      </section>

      {/* ── 8. INTEGRATION ──────────────────────────────────────────────────── */}
      <section className="mx-4 md:mx-auto max-w-7xl mb-12 md:mb-16 p-10 md:p-6 md:p-15 rounded-[20px] bg-[#1d1d1b] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 md:w-[90%] mx-auto">
          <div className="p-0 md:p-3">
            <div className="w-full h-[220px] md:h-full rounded-[15px] overflow-hidden">
              <Image src={IMG_INTEGRATION} alt="Integración con MovilForm" width={700} height={380} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="font-satoshi flex flex-col justify-center text-white">
            <h2 className="font-satoshi text-[26px] md:text-[32px] font-black text-center leading-[32px]">
              Integre su sistema con MovilForm
            </h2>
            <p className="mt-6 md:mt-8 text-[16px] md:text-[19px] leading-[26px] md:leading-[28px] text-justify">
              Nuestra plataforma se integra fácilmente con tu ERP o sistema de
              información enviando y recibiendo datos de forma automática y
              totalmente online, eliminando el ingreso manual de información,
              mejorando la productividad y reduciendo costos operativos.
            </p>
            <p className="mt-4 md:mt-6 text-[15px] md:text-[17px] leading-[22px] text-justify">
              ¡Con MovilForm sincronice sus datos y automatice procesos!
            </p>
            <div className="mt-8 md:mt-10 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center h-[46px] md:h-[49px] px-10 md:px-12 rounded-full bg-[#e22939] text-white text-[16px] md:text-[18px] font-black hover:bg-[#c01f2d] transition-colors"
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

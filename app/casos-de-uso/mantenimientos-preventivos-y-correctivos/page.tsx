import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const IMG_HERO        = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/hero.webp";
const IMG_MODULO      = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/modulo-mantenimientos.webp";
const IMG_INVENTARIO  = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/gestion-inventario.webp";
const IMG_ORDENES     = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/ordenes-servicio.webp";

// ─── Caso de uso card icons ───────────────────────────────────────────────────

function ResiduesIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" /><path d="M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

function TelecomIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.8 19.8 0 0 1 1.93 3.4 2 2 0 0 1 3.91 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.92 6.92l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function BugIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2l1.5 1.5" /><path d="M14.5 3.5L16 2" />
      <path d="M9 7.5C9 6.12 10.12 5 11.5 5h1C13.88 5 15 6.12 15 7.5v.5H9v-.5z" />
      <path d="M6 11h2m8 0h2" /><path d="M6 15h2m8 0h2" />
      <path d="M9 19c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-8H9v8z" />
      <path d="M5 9l-2 2 2 2" /><path d="M19 9l2 2-2 2" />
    </svg>
  );
}

function HygieneIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
      <path d="M6.168 8.7A7 7 0 0 0 5.07 12M17.832 8.7A7 7 0 0 1 18.93 12" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function CasoCard({ icon, title, description, href }: {
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

export default function MantenimientosPreventivosYCorrectivos() {
  return (
    <main className="w-full bg-[#feeaed] min-h-screen">

      <div className="relative h-[88px]">
        <Navbar />
      </div>

      <div className="px-[110px] pb-16 flex flex-col gap-6 max-w-[1440px] mx-auto">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="relative rounded-[20px] overflow-hidden h-[400px]">
          <img
            src={IMG_HERO}
            alt="Mantenimientos preventivos y correctivos"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 rounded-[20px]" />
          <div className="relative h-full flex items-center justify-center">
            <h1 className="font-inter text-[38px] font-bold text-white text-center leading-[48px]">
              Mantenimientos preventivos y correctivos
            </h1>
          </div>
        </section>

        {/* ── 2. MÓDULO DE TAREAS (texto izq, imagen der) ──────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-inter text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Mantenimientos<br />preventivos y correctivos
              </h2>
              <div className="font-inter mt-8 text-[16px] text-[#232321] leading-[26px]">
                <p>
                  Realiza la programación de tus mantenimientos preventivos o correctivos con el
                  módulo de tareas, programa visitas mensuales, semestrales o anuales o para uno
                  o más clientes y servicios a realizar.
                </p>
              </div>
            </div>
            <div className="rounded-[10px] overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]">
              <img
                src={IMG_MODULO}
                alt="Módulo de mantenimientos preventivos o correctivos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── 3. GESTIÓN DE INVENTARIO (imagen izq, texto der) ─────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="rounded-[15px] overflow-hidden shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]">
              <img
                src={IMG_INVENTARIO}
                alt="Gestión de inventario de artículos en MovilForm"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-inter text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Gestión de Inventario
              </h2>
              <div className="font-inter mt-8 text-[16px] text-[#232321] leading-[26px]">
                <p>
                  Administra tu inventario en nuestro portal, podrás crear grupos y tipos de
                  artículos, gestionar su ubicación y además podrás ver los servicios realizados
                  a cada artículo registrado en el portal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. ÓRDENES DE SERVICIO (texto izq, imagen der) ───────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[50px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-inter text-[38px] font-extrabold text-[#192437] leading-[46px]">
                Órdenes de Servicio
              </h2>
              <div className="font-inter mt-8 text-[16px] text-[#232321] leading-[26px]">
                <p>
                  Gestiona tus ordenes de servicio y empresas colaboradoras, selecciona la empresa
                  que ejecutará el trabajo y asígnale una orden de servicio, luego de su ejecución,
                  podrás gestionar flujos de aprobación para los reportes y presupuestos cargados a
                  la orden de servicio ejecutada.
                </p>
              </div>
            </div>
            <div className="rounded-[10px] overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]">
              <img
                src={IMG_ORDENES}
                alt="Administración de órdenes de servicio con MovilForm"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

      </div>

      {/* ── 5. CONOCE NUESTROS CASOS DE USO ─────────────────────────────────── */}
      <section className="pb-16 max-w-[1440px] mx-auto px-[110px]">
        <h2 className="font-inter text-[45px] font-black text-[#e22939] text-center leading-[52px] mb-10">
          Conoce nuestros casos de uso
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <CasoCard
            icon={<ResiduesIcon />}
            title="Empresa de Gestión de Residuos"
            description="MovilForm optimiza la recolección de residuos, planificando rutas, turnos y vehículos. Ahorra tiempo y recursos, y genera reportes automáticos."
            href="/casos-de-uso/empresa-de-gestion-de-residuos"
          />
          <CasoCard
            icon={<TelecomIcon />}
            title="Empresa de Telecomunicaciones"
            description="Planifica tus ordenes de servicio o trabajo que realiza su personal en terreno, podrás gestionar a tu personal interno como a las empresas colaboradoras."
            href="/casos-de-uso/empresa-de-telecomunicaciones"
          />
          <CasoCard
            icon={<BugIcon />}
            title="Empresa de Control de Plagas"
            description="Con MovilForm podrás gestionar y planificar todos tus servicios de desratización, control de aves, termitas, TUV, cucarachas y también podrás generar tus certificados digitales."
            href="/casos-de-uso/empresa-de-control-de-plagas"
          />
          <CasoCard
            icon={<HygieneIcon />}
            title="Empresas de Servicio de Higiene"
            description="Gestiona y programa los servicios de higiene para tus clientes, registrando cada visita y generando informes personalizados de forma automática."
            href="/casos-de-uso/empresa-de-servicio-de-higiene"
          />
          <CasoCard
            icon={<WrenchIcon />}
            title="Empresas de Servicio Técnico"
            description="Administra las órdenes de trabajo de tu equipo técnico, asigna tareas, registra las intervenciones realizadas y genera reportes detallados."
            href="/casos-de-uso/empresa-de-servicio-tecnico"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

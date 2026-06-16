import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const IMG_HERO          = "/casos-de-uso/empresa-de-servicio-de-higiene/hero.webp";
const IMG_EFICIENCIA    = "/casos-de-uso/empresa-de-servicio-de-higiene/eficiencia.webp";
const IMG_ACCESIBILIDAD = "/casos-de-uso/empresa-de-servicio-de-higiene/accesibilidad.webp";
const IMG_PRODUCTIVIDAD = "/casos-de-uso/empresa-de-servicio-de-higiene/productividad.webp";

function TaskIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e42433" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" /><polyline points="9 15 11 17 15 13" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e42433" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" />
      <path d="M5 7v5a5 5 0 0 0 5 5h4" /><polyline points="17 15 19 17 17 19" />
    </svg>
  );
}

function OptimizeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e42433" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function TrackIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e42433" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 6l5 5 4-4 4 4 5-5" /><path d="M1 12l5 5 4-4 4 4 5-5" />
    </svg>
  );
}

export default function EmpresaDeServicioDeHigiene() {
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
            alt="Empresa de servicio de higiene"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 rounded-[20px]" />
          <div className="relative h-full flex items-center justify-center">
            <h1 className="font-satoshi text-[38px] font-bold text-white text-center leading-[48px]">
              Empresa de servicio de higiene
            </h1>
          </div>
        </section>

        {/* ── 2. INTRO DOS COLUMNAS ────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px]">
          <div className="grid grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-[9px] flex-shrink-0 rounded-full bg-[#e42433]" />
              <p className="font-satoshi text-[16px] text-[#231d1b] leading-[26px]">
                Las empresas que prestan servicios de Higiene son las encargadas de mejorar la
                calidad de vida de las personas, ayudando a reducir la propagación de enfermedades
                y protegerlas de la contaminación. Si tu empresa presta servicios de higiene
                ambiental o industrial y tus tareas diarias están asociadas a realizar instalación
                y mantenimiento de aromatizadores, dispensadores, insumos y contenedores o realizas
              </p>
            </div>
            <div className="flex gap-6">
              <div className="w-[9px] flex-shrink-0 rounded-full bg-[#e42433]" />
              <div className="font-satoshi text-[16px] text-[#231d1b] leading-[26px] space-y-4">
                <p>
                  Servicio de aromatización, higiene de superficies o de aire, con MovilForm podrás
                  programar y asignar las tareas necesarias para cumplir con los requerimientos de
                  tus clientes.
                </p>
                <p>
                  También podrás tener acceso a reportes y seguimiento online de todas las
                  actividades programadas y realizadas en terreno con MovilForm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. GESTIÓN DE TAREAS Y SERVICIOS ─────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px] text-center">
          <h2 className="font-satoshi text-[32px] font-extrabold text-[#192437] leading-[40px]">
            Gestión de tareas y servicios
          </h2>
          <p className="font-satoshi mt-6 text-[16px] text-[#232321] leading-[26px] max-w-[500px] mx-auto">
            Con nuestro módulo de tareas, podrás planificar, asignar recursos y recibir reportes
            en línea de los trabajos realizados y visualizarlo en una plataforma web intuitiva y
            fácil de utilizar.
          </p>
        </section>

        {/* ── 4. BENEFICIOS ────────────────────────────────────────────────── */}
        <div>
          <h2 className="font-satoshi text-[32px] font-extrabold text-[#192437] text-center leading-[40px] mb-6">
            Beneficios para tu empresa
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] overflow-hidden">
              <div className="h-[240px] overflow-hidden rounded-t-[20px]">
                <img src={IMG_EFICIENCIA} alt="Eficiencia en servicio de higiene" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-satoshi text-[22px] font-bold text-[#192437] leading-[30px]">Eficiencia</h3>
                <p className="font-satoshi mt-4 text-[15px] text-[#3f4648] leading-[26px]">
                  Planifica tus servicios y optimiza los recursos y aumenta el control de
                  las tareas que se ejecutan diariamente.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[20px] overflow-hidden">
              <div className="h-[240px] overflow-hidden rounded-t-[20px]">
                <img src={IMG_ACCESIBILIDAD} alt="Accesibilidad en empresa de higiene" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-satoshi text-[22px] font-bold text-[#192437] leading-[30px]">Accesibilidad</h3>
                <p className="font-satoshi mt-4 text-[15px] text-[#3f4648] leading-[26px]">
                  Desde tu Smartphone o Tablet, captura toda la información que necesites
                  y envía reportes automáticos.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[20px] overflow-hidden">
              <div className="h-[240px] overflow-hidden rounded-t-[20px]">
                <img src={IMG_PRODUCTIVIDAD} alt="Productividad con formularios digitales" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-satoshi text-[22px] font-bold text-[#192437] leading-[30px]">Productividad</h3>
                <p className="font-satoshi mt-4 text-[15px] text-[#3f4648] leading-[26px]">
                  Simplifica tus procesos y facilita el trabajo de tu equipo utilizando
                  formularios digitales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. BANNER CTA ────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px] text-center">
          <p className="font-satoshi text-[26px] font-bold text-[#192437] leading-[36px] max-w-[780px] mx-auto">
            Digitaliza y planifica tus servicios, consiguiendo control y eficiencia para
            tu empresa.
          </p>
        </section>

        {/* ── 6. FUNCIONALIDADES ───────────────────────────────────────────── */}
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              icon: <TaskIcon />,
              title: "Asigna tareas",
              desc: "Asigna tareas individuales sin necesidad de generar rutas y registra toda la actividad realizada en terreno.",
            },
            {
              icon: <RouteIcon />,
              title: "Planifica rutas",
              desc: "Establece los criterios necesarios para planificar tus servicios diarios, semanales o mensuales.",
            },
            {
              icon: <OptimizeIcon />,
              title: "Optimiza rutas",
              desc: "Mejora la eficiencia y reduce costos operativos con la mejor secuencia de atención.",
            },
            {
              icon: <TrackIcon />,
              title: "Controla rutas",
              desc: "Realiza el seguimiento de los servicios de forma remota y totalmente online.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-[20px] p-8 flex flex-col items-center text-center">
              <div className="w-[80px] h-[80px] rounded-full bg-[#feeaed] flex items-center justify-center">
                {icon}
              </div>
              <h3 className="font-satoshi mt-6 text-[20px] font-bold text-black leading-[28px]">{title}</h3>
              <p className="font-satoshi mt-3 text-[15px] font-medium text-[#3f4648] leading-[26px]">{desc}</p>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}

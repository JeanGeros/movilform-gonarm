import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const IMG_HERO          = "/casos-de-uso/empresa-de-control-de-plagas/hero.webp";
const IMG_EFICIENCIA    = "/casos-de-uso/empresa-de-control-de-plagas/eficiencia.webp";
const IMG_ACCESIBILIDAD = "/casos-de-uso/empresa-de-control-de-plagas/accesibilidad.webp";
const IMG_PRODUCTIVIDAD = "/casos-de-uso/empresa-de-control-de-plagas/productividad.webp";

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

export default function EmpresaDeControlDePlagas() {
  return (
    <main className="w-full bg-white min-h-screen flex flex-col">

      <div className="relative h-[88px]">
        <Navbar />
      </div>

      <div className="pb-16 flex flex-col gap-6 max-w-7xl mx-auto">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="relative rounded-[20px] overflow-hidden h-[400px]">
          <img
            src={IMG_HERO}
            alt="Empresas de control de plagas"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 rounded-[20px]" />
          <div className="relative h-full flex items-center justify-center">
            <h1 className="font-satoshi text-[38px] font-bold text-white text-center leading-[48px]">
              Empresas de control de plagas
            </h1>
          </div>
        </section>

        {/* ── 2. INTRO DOS COLUMNAS ────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px]">
          <div className="grid grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-[9px] flex-shrink-0 rounded-full bg-[#e42433]" />
              <p className="font-satoshi text-[16px] text-[#231d1b] leading-[26px]">
                Las empresas de control de plaga residencial y comercial necesitan tener una
                planificación precisa de sus servicios, para realizar esto, MovilForm pone a su
                disposición las herramientas necesarias para soportar y ejecutar los distintos
                servicios que se deban realizar en sus clientes. Servicios de desratización,
                control de aves, termitas, TUV, cucarachas y muchos más, son ejecutados a
                diario con nuestra aplicación,
              </p>
            </div>
            <div className="flex gap-6">
              <div className="w-[9px] flex-shrink-0 rounded-full bg-[#e42433]" />
              <p className="font-satoshi text-[16px] text-[#231d1b] leading-[26px]">
                permitiendo informar inmediatamente a los clientes y generar reportes
                personalizados con los resultados obtenidos en terreno. Gestionamos tu
                información para darte acceso a Dashboard personalizados, certificados digitales
                e informes customizados. Además, tendrás acceso al portal de clientes, donde
                podrás entregar toda la información que tus clientes te soliciten.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. FLEXIBILIDAD Y EFICIENCIA ─────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-[70px] py-[60px] text-center">
          <h2 className="font-satoshi text-[32px] font-extrabold text-[#192437] leading-[40px]">
            Flexibilidad y Eficiencia
          </h2>
          <p className="font-satoshi mt-6 text-[16px] text-[#232321] leading-[26px] max-w-[500px] mx-auto">
            La solución que transforma la gestión y control de plagas, aportando flexibilidad
            para adaptarse a todos los servicios requeridos.
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
                <img src={IMG_EFICIENCIA} alt="Eficiencia en control de plagas" className="w-full h-full object-cover" />
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
                <img src={IMG_ACCESIBILIDAD} alt="Accesibilidad en el control de plagas" className="w-full h-full object-cover" />
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

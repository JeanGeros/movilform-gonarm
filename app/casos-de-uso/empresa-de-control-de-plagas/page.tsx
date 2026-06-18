import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faMapMarkedAlt, faRoute, faTabletAlt } from "@fortawesome/free-solid-svg-icons";

const IMG_HERO          = "/casos-de-uso/empresa-de-control-de-plagas/hero.webp";
const IMG_EFICIENCIA    = "/casos-de-uso/empresa-de-control-de-plagas/eficiencia.webp";
const IMG_ACCESIBILIDAD = "/casos-de-uso/empresa-de-control-de-plagas/accesibilidad.webp";
const IMG_PRODUCTIVIDAD = "/casos-de-uso/empresa-de-control-de-plagas/productividad.webp";

// ─── Page ─────────────────────────────────────────────────────────────────────

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
            <div className="flex gap-4 items-center">
              <div className="w-[9px] flex-shrink-0 self-stretch rounded-full bg-[#feeaed]" />
              <div>
<p className="font-satoshi text-[16px] text-[#231d1b] leading-[26px] text-justify">
                Las empresas de control de plaga residencial y comercial necesitan tener una
                planificación precisa de sus servicios, para realizar esto, MovilForm pone a su
                disposición las herramientas necesarias para soportar y ejecutar los distintos
                servicios que se deban realizar en sus clientes.
              </p>
              <p className="font-satoshi text-[16px] text-[#231d1b] mt-3 leading-[26px] text-justify">
                Servicios de desratización, control de aves, termitas, TUV, cucarachas y muchos más, son ejecutados a
                diario con nuestra aplicación,
              </p>
              </div>
              
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-[9px] flex-shrink-0 self-stretch rounded-full bg-[#feeaed]" />
              <div>
                <p className="font-satoshi text-[16px] text-[#231d1b] leading-[26px] text-justify">
                  Permitiendo informar inmediatamente a los clientes y generar reportes
                  personalizados con los resultados obtenidos en terreno. 
                </p>
                <p className="font-satoshi text-[16px] mt-3 text-[#231d1b] leading-[26px] text-justify">
                  Gestionamos tu información para darte acceso a Dashboard personalizados, certificados digitales
                  e informes customizados. Además, tendrás acceso al portal de clientes, donde
                  podrás entregar toda la información que tus clientes te soliciten.
                </p>
              </div>
             
            </div>
          </div>
        </section>

        {/* ── 3. FLEXIBILIDAD Y EFICIENCIA ─────────────────────────────────── */}
        <section className="bg-[#feeaed] rounded-[20px] px-[70px] py-[60px] my-10 text-center">
          <h2 className="font-satoshi text-[40px] font-extrabold text-[#e22939] leading-[40px]">
            Flexibilidad y Eficiencia
          </h2>
          <p className="font-satoshi mt-6 text-[16px] text-[#232321] leading-[26px] max-w-[500px] mx-auto">
            La solución que transforma la gestión y control de plagas, aportando flexibilidad
            para adaptarse a todos los servicios requeridos.
          </p>
        </section>

        {/* ── 4. BENEFICIOS ────────────────────────────────────────────────── */}
        <div>
          <h2 className="font-satoshi text-[32px] font-extrabold text-[#e22939] text-center leading-[40px] mb-6">
            Beneficios para tu empresa
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                img: IMG_EFICIENCIA,
                alt: "Eficiencia en control de plagas",
                title: "Eficiencia",
                desc: "Planifica tus servicios y optimiza los recursos y aumenta el control de las tareas que se ejecutan diariamente.",
              },
              {
                img: IMG_ACCESIBILIDAD,
                alt: "Accesibilidad en el control de plagas",
                title: "Accesibilidad",
                desc: "Desde tu Smartphone o Tablet, captura toda la información que necesites y envía reportes automáticos.",
              },
              {
                img: IMG_PRODUCTIVIDAD,
                alt: "Productividad con formularios digitales",
                title: "Productividad",
                desc: "Simplifica tus procesos y facilita el trabajo de tu equipo utilizando formularios digitales.",
              },
            ].map(({ img, alt, title, desc }) => (
              <div key={title} className="bg-white rounded-[20px]">
                <div className="h-[240px] overflow-hidden rounded-[20px]">
                  <img src={img} alt={alt} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-satoshi text-[27.2px] font-bold text-[#192437] leading-[30px]">{title}</h3>
                  <p className="font-satoshi mt-4 text-[16px] text-justify text-[#3f4648] leading-[26px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. BANNER CTA ────────────────────────────────────────────────── */}
        <section className="bg-[#feeaed] rounded-[20px] px-[70px] py-[60px] text-center">
          <p className="font-satoshi text-[32px] font-bold text-[#192437] leading-[36px] max-w-[780px] mx-auto">
            Digitaliza y planifica tus servicios, consiguiendo <span className="text-[#e22939]">control y eficiencia</span> para
            tu empresa.
          </p>
        </section>

        {/* ── 6. FUNCIONALIDADES ───────────────────────────────────────────── */}
        <div className="grid grid-cols-4 gap-6 my-15">
          {[
            {
              icon: faTasks,
              title: "Asigna tareas",
              desc: "Asigna tareas individuales sin necesidad de generar rutas y registra toda la actividad realizada en terreno.",
            },
            {
              icon: faMapMarkedAlt,
              title: "Planifica rutas",
              desc: "Establece los criterios necesarios para planificar tus servicios diarios, semanales o mensuales.",
            },
            {
              icon: faRoute,
              title: "Optimiza rutas",
              desc: "Mejora la eficiencia y reduce costos operativos con la mejor secuencia de atención.",
            },
            {
              icon: faTabletAlt,
              title: "Controla rutas",
              desc: "Realiza el seguimiento de los servicios de forma remota y totalmente online.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#feeaed] rounded-[20px] p-8 flex flex-col items-center text-center">
              <FontAwesomeIcon icon={icon} className="text-[#4d4d4d] w-12 h-12" />
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
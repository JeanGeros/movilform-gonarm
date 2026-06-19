import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresa de Servicio de Higiene - Movilform",
  description:
    "Optimiza tus servicios de higiene ambiental e industrial con MovilForm. Programa tareas, realiza seguimiento en terreno y genera reportes automáticos para tus clientes.",
  alternates: { canonical: "/casos-de-uso/empresa-de-servicio-de-higiene" },
};

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BenefitsCarousel from "../BenefitsCarousel";
import FeaturesCardCarousel from "../FeaturesCardCarousel";
import { faTasks, faMapMarkedAlt, faRoute, faTabletAlt } from "@fortawesome/free-solid-svg-icons";

const IMG_HERO          = "/casos-de-uso/empresa-de-servicio-de-higiene/hero.webp";
const IMG_EFICIENCIA    = "/casos-de-uso/empresa-de-servicio-de-higiene/eficiencia.webp";
const IMG_ACCESIBILIDAD = "/casos-de-uso/empresa-de-servicio-de-higiene/accesibilidad.webp";
const IMG_PRODUCTIVIDAD = "/casos-de-uso/empresa-de-servicio-de-higiene/productividad.webp";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EmpresaDeServicioDeHigiene() {
  return (
    <main className="w-full bg-white min-h-screen flex flex-col">

      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 pb-16 flex flex-col gap-6 max-w-7xl mx-auto">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="relative rounded-[20px] overflow-hidden h-[250px] md:h-[400px]">
          <Image
            src={IMG_HERO}
            alt="Empresa de servicio de higiene"
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70 rounded-[20px]" />
          <div className="relative h-full flex items-center justify-center px-6">
            <h1 className="font-satoshi text-[26px] md:text-[38px] font-bold text-white text-center leading-[34px] md:leading-[48px]">
              Empresa de servicio de higiene
            </h1>
          </div>
        </section>

        {/* ── 2. INTRO DOS COLUMNAS ────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-4 items-center">
              <div className="w-[9px] hidden md:block flex-shrink-0 self-stretch rounded-full bg-[#feeaed]" />
              <div className="font-satoshi text-[16px] text-justify text-[#231d1b] leading-[24px] md:leading-[26px] space-y-4">
                <p>
                  Las empresas que prestan servicios de Higiene son las encargadas de mejorar la
                  calidad de vida de las personas, ayudando a reducir la propagación de enfermedades
                  y protegerlas de la contaminación.
                </p>
                <p>
                  Si tu empresa presta servicios de higiene ambiental o industrial y tus tareas diarias están asociadas a realizar instalación
                  y mantenimiento de aromatizadores, dispensadores, insumos y contenedores o realizas
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-[9px] hidden md:block flex-shrink-0 self-stretch rounded-full bg-[#feeaed]" />
              <div className="font-satoshi text-[16px] text-justify text-[#231d1b] leading-[24px] md:leading-[26px] space-y-4">
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
        <section className="bg-[#feeaed] rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px] my-4 md:my-10 text-center">
          <h2 className="font-satoshi text-[28px] md:text-[40px] font-extrabold text-[#e22939] leading-[34px] md:leading-[40px]">
            Gestión de tareas y servicios
          </h2>
          <p className="font-satoshi mt-4 md:mt-6 text-[15px] md:text-[16px] text-[#232321] leading-[24px] md:leading-[26px] max-w-[500px] mx-auto">
            Con nuestro módulo de tareas, podrás planificar, asignar recursos y recibir reportes
            en línea de los trabajos realizados y visualizarlo en una plataforma web intuitiva y
            fácil de utilizar.
          </p>
        </section>

        {/* ── 4. BENEFICIOS ────────────────────────────────────────────────── */}
        <div>
          <h2 className="font-satoshi text-[24px] md:text-[32px] font-extrabold text-[#e22939] text-center leading-[30px] md:leading-[40px] mb-6">
            Beneficios para tu empresa
          </h2>
          <BenefitsCarousel
            benefits={[
              { img: IMG_EFICIENCIA, alt: "Eficiencia en servicio de higiene", title: "Eficiencia", desc: "Planifica tus servicios y optimiza los recursos y aumenta el control de las tareas que se ejecutan diariamente." },
              { img: IMG_ACCESIBILIDAD, alt: "Accesibilidad en empresa de higiene", title: "Accesibilidad", desc: "Desde tu Smartphone o Tablet, captura toda la información que necesites y envía reportes automáticos." },
              { img: IMG_PRODUCTIVIDAD, alt: "Productividad con formularios digitales", title: "Productividad", desc: "Simplifica tus procesos y facilita el trabajo de tu equipo utilizando formularios digitales." },
            ]}
          />
        </div>

        {/* ── 5. BANNER CTA ────────────────────────────────────────────────── */}
        <section className="bg-[#feeaed] rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px] text-center">
          <p className="font-satoshi text-[22px] md:text-[32px] font-bold text-[#192437] leading-[30px] md:leading-[36px] max-w-[780px] mx-auto">
            Digitaliza y planifica tus servicios, consiguiendo <span className="text-[#e22939]">control y eficiencia</span> para
            tu empresa.
          </p>
        </section>

        {/* ── 6. FUNCIONALIDADES ───────────────────────────────────────────── */}
        <FeaturesCardCarousel
          features={[
            { icon: faTasks, title: "Asigna tareas", desc: "Asigna tareas individuales sin necesidad de generar rutas y registra toda la actividad realizada en terreno." },
            { icon: faMapMarkedAlt, title: "Planifica rutas", desc: "Establece los criterios necesarios para planificar tus servicios diarios, semanales o mensuales." },
            { icon: faRoute, title: "Optimiza rutas", desc: "Mejora la eficiencia y reduce costos operativos con la mejor secuencia de atención." },
            { icon: faTabletAlt, title: "Controla rutas", desc: "Realiza el seguimiento de los servicios de forma remota y totalmente online." },
          ]}
        />

      </div>

      <Footer />
    </main>
  );
}
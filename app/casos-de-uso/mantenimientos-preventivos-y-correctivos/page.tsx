import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mantenimientos Preventivos y Correctivos - Movilform",
  description:
    "Programa y gestiona mantenimientos preventivos y correctivos con MovilForm. Administra tareas, inventario y órdenes de servicio en un solo lugar, mejorando la eficiencia operativa y el control de tus activos.",
  alternates: { canonical: "/casos-de-uso/mantenimientos-preventivos-y-correctivos" },
};

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import UseCasesCarousel from "./UseCasesCarousel";

const IMG_HERO        = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/hero.webp";
const IMG_MODULO      = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/modulo-mantenimientos.webp";
const IMG_INVENTARIO  = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/gestion-inventario.webp";
const IMG_ORDENES     = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/ordenes-servicio.webp";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MantenimientosPreventivosYCorrectivos() {
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
            alt="Mantenimientos preventivos y correctivos"
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70 rounded-[20px]" />
          <div className="relative h-full flex items-center justify-center px-6">
            <h1 className="font-satoshi text-[26px] md:text-[38px] font-bold text-white text-center leading-[34px] md:leading-[48px]">
              Mantenimientos preventivos y correctivos
            </h1>
          </div>
        </section>

        {/* ── 2. MÓDULO DE TAREAS (texto izq, imagen der) ──────────────────── */}
        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-satoshi text-[28px] md:text-[38px] font-extrabold text-[#192437] leading-[34px] md:leading-[46px]">
                Mantenimientos<br />preventivos y correctivos
              </h2>
              <div className="font-satoshi mt-6 md:mt-8 text-[15px] md:text-[16px] text-[#232321] leading-[24px] md:leading-[26px] text-justify">
                <p>
                  Realiza la programación de tus mantenimientos preventivos o correctivos con el
                  módulo de tareas, programa visitas mensuales, semestrales o anuales o para uno
                  o más clientes y servicios a realizar.
                </p>
              </div>
            </div>
            <div className="rounded-[10px] overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]">
              <Image
                src={IMG_MODULO}
                alt="Módulo de mantenimientos preventivos o correctivos"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── 3. GESTIÓN DE INVENTARIO (imagen izq, texto der) ─────────────── */}
        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 rounded-[15px] overflow-hidden shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]">
              <Image
                src={IMG_INVENTARIO}
                alt="Gestión de inventario de artículos en MovilForm"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-satoshi text-[28px] md:text-[38px] font-extrabold text-[#192437] leading-[34px] md:leading-[46px]">
                Gestión de Inventario
              </h2>
              <div className="font-satoshi mt-6 md:mt-8 text-[15px] md:text-[16px] text-[#232321] leading-[24px] md:leading-[26px] text-justify">
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
        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-satoshi text-[28px] md:text-[38px] font-extrabold text-[#192437] leading-[34px] md:leading-[46px]">
                Órdenes de Servicio
              </h2>
              <div className="font-satoshi mt-6 md:mt-8 text-[15px] md:text-[16px] text-[#232321] leading-[24px] md:leading-[26px] text-justify">
                <p>
                  Gestiona tus ordenes de servicio y empresas colaboradoras, selecciona la empresa
                  que ejecutará el trabajo y asígnale una orden de servicio, luego de su ejecución,
                  podrás gestionar flujos de aprobación para los reportes y presupuestos cargados a
                  la orden de servicio ejecutada.
                </p>
              </div>
            </div>
            <div className="rounded-[10px] overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]">
              <Image
                src={IMG_ORDENES}
                alt="Administración de órdenes de servicio con MovilForm"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

      </div>

      {/* ── 5. CONOCE NUESTROS CASOS DE USO ─────────────────────────────────── */}
      <section className="pb-16 max-w-7xl mx-auto px-4 md:px-0">
        <h2 className="font-satoshi text-[30px] md:text-[45px] font-black text-[#e22939] text-center leading-[36px] md:leading-[52px] mb-8 md:mb-10">
          Conoce nuestros casos de uso
        </h2>
        <UseCasesCarousel />
      </section>

      <Footer />
    </main>
  );
}
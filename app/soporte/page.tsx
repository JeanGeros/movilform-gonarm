"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SupportCard from "@/app/components/SupportCard";

const FAQS = [
  {
    q: "¿En que plataformas puedo utilizar la APP?",
    a: "MovilForm está disponible en iOS (iPhone/iPad) y Android. También puedes acceder a la plataforma web desde cualquier navegador moderno.",
  },
  {
    q: "¿Qué funciones contiene el módulo de Rutas?",
    a: "El módulo de Rutas permite planificar y optimizar las visitas a clientes, asignar técnicos, registrar actividades en terreno y recibir reportes en línea de las tareas ejecutadas.",
  },
  {
    q: "¿Puedo modificar las rutas?",
    a: "Sí, puedes modificar las rutas en cualquier momento desde el portal web, ajustando los servicios, técnicos y horarios según tus necesidades operativas.",
  },
  {
    q: "¿Qué es MovilForm?",
    a: "MovilForm es una plataforma de gestión de servicios en terreno que permite digitalizar procesos operativos, planificar rutas y tareas, y generar reportes e informes automáticos.",
  },
  {
    q: "¿Para qué empresas es viable utilizar el software de MovilForm?",
    a: "MovilForm es ideal para empresas de servicios en terreno: control de plagas, gestión de residuos, telecomunicaciones, higiene, mantenimiento y servicio técnico, entre otras.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Soporte() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="w-full bg-white min-h-screen">

      <div className="relative h-[88px]">
        <Navbar />
      </div>

      <div className="px-[110px] pb-16 flex flex-col gap-6 max-w-[1440px] mx-auto">

        {/* ── 1. ENCABEZADO ────────────────────────────────────────────────── */}
        <section className="py-20 text-center">
          <h1 className="font-satoshi text-[48px] font-black text-[#dd2838] leading-[56px]">
            Soporte
          </h1>
          <p className="font-satoshi mt-6 text-[18px] text-[#3f4648] leading-[21px] max-w-[600px] mx-auto">
            Si necesitas ayuda de nuestro soporte puedes contactarnos a través de nuestros
            canales de atención, los cuales están disponibles de{" "}
            <strong className="text-[#192437]">lunes a viernes de 09:00hrs a 18:00hrs.</strong>
          </p>
        </section>

        {/* ── 2. CANALES DE SOPORTE ────────────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-6">
          <SupportCard
            icon="/soporte/icon-ticket.png"
            alt="Ticket de soporte"
            title="Ticket de soporte"
            description="Envié su consulta o problema y nos contactaremos rápidamente con usted para entregar una solución."
            href="mailto:contacto@movilform.com"
            label="Enviar un ticket"
          />
          <SupportCard
            icon="/soporte/icon-chat.png"
            alt="Chat de soporte"
            title="Chat de soporte"
            description="Si necesita resolver dudas contáctenos a través de WhatsApp"
            href="https://wa.me/56232241522"
            label="Comenzar chat"
            external
          />
          <SupportCard
            icon="/soporte/icon-telefono.png"
            alt="Teléfono"
            title="Teléfono"
            description="También puede llamarnos para resolver sus dudas y consultas."
            href="tel:+56232241522"
            label="Hacer llamada"
          />
        </div>

        {/* ── 3. PREGUNTAS FRECUENTES ──────────────────────────────────────── */}
        <section className="bg-[#feeaed] rounded-[30px] px-[70px] py-[40px]">
          <h2 className="font-satoshi text-[32px] font-extrabold text-[#dd2838] text-center leading-[40px] mb-8">
            Preguntas frecuentes
          </h2>
          <div className="max-w-[600px] mx-auto flex flex-col divide-y divide-gray-100">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-satoshi text-[16px] font-semibold text-[#192437] leading-[24px]">
                    {faq.q}
                  </span>
                  <ChevronIcon open={openFaq === i} />
                </button>
                {openFaq === i && (
                  <p className="font-satoshi pb-5 text-[15px] text-[#3f4648] leading-[26px]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}

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
    a: `En el modulo de rutas puede planificar rutas para tus empleados, puede optimizar estas rutas de tus colaboradores considerando distintos factores como: La disponibilidad de tus clientes, la jornada laboral de tus colaboradores, el consumo del combustible, etc…\n\nAdicional a esto desde la pagina web se puede realizar un seguimiento el tiempo real de los colaboradores en ruta y la cantidad de puntos de servicios que tienen pendiente.`,
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

function TriangleIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10" height="12" viewBox="0 0 10 12" fill="#434343"
      className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
    >
      <polygon points="0,0 10,6 0,12" />
    </svg>
  );
}

export default function Soporte() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="w-full bg-white min-h-screen">

      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 pb-16 flex flex-col gap-6 max-w-7xl mx-auto">

        {/* ── 1. ENCABEZADO ────────────────────────────────────────────────── */}
        <section className="py-10 md:py-20 text-center">
          <h1 className="font-satoshi text-[32px] md:text-[48px] font-black text-[#dd2838] leading-[40px] md:leading-[56px]">
            Soporte
          </h1>
          <p className="font-satoshi mt-4 md:mt-6 text-[15px] md:text-[18px] text-[#3f4648] leading-[22px] md:leading-[21px] max-w-[600px] mx-auto">
            Si necesitas ayuda de nuestro soporte puedes contactarnos a través de nuestros
            canales de atención, los cuales están disponibles de{" "}
            <strong className="text-[#192437]">lunes a viernes de 09:00hrs a 18:00hrs.</strong>
          </p>
        </section>

        {/* ── 2. CANALES DE SOPORTE ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <section className="bg-[#feeaed] rounded-[20px] md:rounded-[30px] px-4 py-8 md:px-[70px] md:py-[40px]">
          <h2 className="font-satoshi text-[24px] md:text-[32px] font-extrabold text-[#dd2838] text-center leading-[30px] md:leading-[40px] mb-6 md:mb-8">
            Preguntas frecuentes
          </h2>
          <div className="max-w-[700px] mx-auto flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center gap-3 bg-white rounded-full px-4 py-3 md:px-6 md:py-4 text-left cursor-pointer"
                  >
                    <TriangleIcon open={isOpen} />
                    <span className={`font-satoshi text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] transition-colors duration-300 ${isOpen ? "text-[#434343]" : "text-[#192437]"}`}>
                      {faq.q}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="bg-white rounded-[20px] px-4 py-3 md:px-6 md:py-4">
                        <p className="font-satoshi text-[14px] md:text-[16px] text-[#3f4648] leading-[22px] md:leading-[26px] whitespace-pre-line">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}

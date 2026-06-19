import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Movilform",
  description:
    "Para mayor información de nuestros productos, no dude en consultarnos. Tenemos un equipo especializado dispuesto a atenderlo y a entregar el mejor servicio.",
  alternates: { canonical: "/contacto" },
};

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Contacto() {
  return (
    <main className="w-full bg-white min-h-screen flex flex-col">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 pb-16 flex flex-col gap-10 md:gap-20 w-full max-w-7xl mx-auto mt-10 md:mt-30">
        {/* ── Título ──────────────────────────────────────────────────────── */}
        <div className="text-center">
          <h1 className="font-satoshi text-[36px] md:text-[30px] md:text-[48px] font-extrabold text-[#e22939] leading-[38px] md:leading-[56px]">
            ¿ Necesitas más información?
          </h1>
          <p className="font-satoshi mt-4 text-[15px] md:text-[19.2px] text-[#232321] leading-[22px] md:leading-[28px] max-w-[90%] md:max-w-[60%] mx-auto">
            No dudes en contactarnos, estamos preparados para entregarte una
            completa solución con MovilForm.
          </p>
        </div>

        {/* ── Formulario ──────────────────────────────────────────────────── */}
        <section className="bg-[#feeaed] rounded-[20px] md:rounded-[30px] px-6 py-10 md:px-20 md:py-16">
          <h2 className="font-satoshi text-[32px] md:text-[24px] text-center md:text-start md:text-[32px] font-bold text-[#e22939] leading-[30px] md:leading-[40px] mb-6 md:mb-8">
            Contáctanos
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-x-8 gap-y-5 md:gap-y-2">
            <div className="grid gap-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                {/* INPUT NOMBRE */}
                <div>
                  <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">
                    Nombre*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-[40px] rounded-[15px] bg-[#f7f7f9] px-4 font-satoshi text-[16px] md:text-[18px] outline-none focus:border-[#e22939] transition-colors"
                  />
                </div>
                {/* INPUT APELLIDO */}
                <div>
                  <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">
                    Apellido*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-[40px] rounded-[15px] bg-[#f7f7f9] px-4 font-satoshi text-[16px] md:text-[18px] outline-none focus:border-[#e22939] transition-colors"
                  />
                </div>
                {/* INPUT CORREO */}
                <div>
                  <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">
                    Correo*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full h-[40px] rounded-[15px] bg-[#f7f7f9] px-4 font-satoshi text-[16px] md:text-[18px] outline-none focus:border-[#e22939] transition-colors"
                  />
                </div>
                {/* INPUT TELEFONO */}
                <div>
                  <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full h-[40px] rounded-[15px] bg-[#f7f7f9] px-4 font-satoshi text-[16px] md:text-[18px] outline-none focus:border-[#e22939] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">
                  Asunto*
                </label>
                <input
                  type="text"
                  required
                  className="w-full h-[40px] rounded-[15px] bg-[#f7f7f9] px-4 font-satoshi text-[16px] md:text-[18px] outline-none focus:border-[#e22939] transition-colors"
                />
              </div>
            </div>

            {/* Columna derecha - Mensaje */}
            <div className="flex flex-col md:ml-10 md:col-span-1 md:row-span-2">
              <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">
                Mensaje
              </label>
              <textarea
                rows={6}
                className="w-full flex-1 rounded-[15px] bg-[#f7f7f9] p-4 font-satoshi text-[15px] outline-none focus:border-[#e22939] transition-colors resize-y min-h-[150px]"
              />
            </div>

            {/* Botón */}
            <div className="md:col-span-3 mt-2">
              <button
                type="submit"
                className="font-satoshi w-full md:w-auto h-[46px] px-10 rounded-[20px] bg-[#e22939] text-white text-[17px] font-bold hover:bg-[#c01f2d] transition-colors cursor-pointer"
              >
                Enviar
              </button>
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </main>
  );
}

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SupportCard from "@/app/components/SupportCard";

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
  const t = useTranslations("soporte");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const FAQS = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
    { q: t("faq5Q"), a: t("faq5A") },
  ];

  return (
    <main className="w-full bg-white min-h-screen">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 pb-16 flex flex-col gap-6 max-w-7xl mx-auto">

        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="py-10 md:py-20 text-center">
          <h1 className="font-satoshi text-[32px] md:text-[48px] font-black text-[#dd2838] leading-[40px] md:leading-[56px]">
            {t("title")}
          </h1>
          <p className="font-satoshi mt-4 md:mt-6 text-[15px] md:text-[18px] text-[#3f4648] leading-[22px] md:leading-[21px] max-w-[600px] mx-auto">
            {t("desc")}{" "}
            <strong className="text-[#192437]">{t("hours")}</strong>
          </p>
        </section>

        {/* ── 2. CANALES ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SupportCard
            icon="/soporte/icon-ticket.png"
            alt={t("ticketTitle")}
            title={t("ticketTitle")}
            description={t("ticketDesc")}
            href="mailto:contacto@movilform.com"
            label={t("ticketLabel")}
          />
          <SupportCard
            icon="/soporte/icon-chat.png"
            alt={t("chatTitle")}
            title={t("chatTitle")}
            description={t("chatDesc")}
            href="https://wa.me/56232241522"
            label={t("chatLabel")}
            external
          />
          <SupportCard
            icon="/soporte/icon-telefono.png"
            alt={t("phoneTitle")}
            title={t("phoneTitle")}
            description={t("phoneDesc")}
            href="tel:+56232241522"
            label={t("phoneLabel")}
          />
        </div>

        {/* ── 3. FAQS ─────────────────────────────────────────────────────── */}
        <section className="bg-[#feeaed] rounded-[20px] md:rounded-[30px] px-4 py-8 md:px-[70px] md:py-[40px]">
          <h2 className="font-satoshi text-[24px] md:text-[32px] font-extrabold text-[#dd2838] text-center leading-[30px] md:leading-[40px] mb-6 md:mb-8">
            {t("faqTitle")}
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

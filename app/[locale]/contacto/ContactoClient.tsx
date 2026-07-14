"use client";

import Script from "next/script";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id: string) => void;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

type FormData = { nombre: string; apellido: string; correo: string; telefono: string; asunto: string; mensaje: string };

const inputCls =
  "w-full h-[40px] rounded-[15px] bg-[#f7f7f9] px-4 font-satoshi text-[16px] md:text-[18px] outline-none focus:border-[#e22939] transition-colors";

export default function ContactoClient() {
  const t = useTranslations("contacto");
  const [form, setForm] = useState<FormData>({ nombre: "", apellido: "", correo: "", telefono: "", asunto: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [scriptReady, setScriptReady] = useState(false);

  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const tokenRef = useRef("");

  useEffect(() => {
    if (!scriptReady || !turnstileRef.current || !window.turnstile) return;
    const id = window.turnstile.render(turnstileRef.current, {
      sitekey: SITE_KEY,
      callback: (tk: string) => { tokenRef.current = tk; },
      "expired-callback": () => { tokenRef.current = ""; },
      "error-callback": () => { tokenRef.current = ""; },
    });
    widgetId.current = id;
    return () => {
      window.turnstile?.remove(id);
      widgetId.current = null;
      tokenRef.current = "";
    };
  }, [scriptReady]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!tokenRef.current) {
      setServerError(t("antispam"));
      return;
    }
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token: tokenRef.current }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error");
      setStatus("success");
      setForm({ nombre: "", apellido: "", correo: "", telefono: "", asunto: "", mensaje: "" });
      window.turnstile?.reset(widgetId.current ?? undefined);
      tokenRef.current = "";
    } catch (err: unknown) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Error al enviar.");
      window.turnstile?.reset(widgetId.current ?? undefined);
      tokenRef.current = "";
    }
  }

  return (
    <main className="w-full bg-white min-h-screen flex flex-col">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      <div className="relative z-50 h-[88px]">
        <Navbar bgColor="bg-[#feeaed]" />
      </div>

      <div className="px-4 md:px-0 pb-16 flex flex-col gap-10 md:gap-20 w-full max-w-7xl mx-auto mt-10 md:mt-30">
        {/* ── Título ────────────────────────────────────────────────────── */}
        <div className="text-center">
          <h1 className="font-satoshi text-[36px] md:text-[30px] md:text-[48px] font-extrabold text-[#e22939] leading-[38px] md:leading-[56px]">
            {t("title")}
          </h1>
          <p className="font-satoshi mt-4 text-[15px] md:text-[19.2px] text-[#232321] leading-[22px] md:leading-[28px] max-w-[90%] md:max-w-[60%] mx-auto">
            {t("desc")}
          </p>
        </div>

        {/* ── Formulario ────────────────────────────────────────────────── */}
        <section className="bg-[#feeaed] rounded-[20px] md:rounded-[30px] px-6 py-10 md:px-20 md:py-16">
          <h2 className="font-satoshi text-[32px] md:text-[24px] text-center md:text-start md:text-[32px] font-bold text-[#e22939] leading-[30px] md:leading-[40px] mb-6 md:mb-8">
            {t("formTitle")}
          </h2>

          <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-x-8 gap-y-5 md:gap-y-2">
            <div className="grid gap-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                <div>
                  <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">{t("nombre")}</label>
                  <input type="text" name="nombre" required value={form.nombre} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">{t("apellido")}</label>
                  <input type="text" name="apellido" required value={form.apellido} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">{t("correo")}</label>
                  <input type="email" name="correo" required value={form.correo} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">{t("telefono")}</label>
                  <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} className={inputCls} />
                </div>
              </div>
              <div>
                <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">{t("asunto")}</label>
                <input type="text" name="asunto" required value={form.asunto} onChange={handleChange} className={inputCls} />
              </div>
            </div>

            <div className="flex flex-col md:ml-10 md:col-span-1 md:row-span-2">
              <label className="font-satoshi text-[15px] md:text-[17.6px] font-medium text-[#192437] block mb-2">{t("mensaje")}</label>
              <textarea
                name="mensaje"
                rows={6}
                value={form.mensaje}
                onChange={handleChange}
                className="w-full flex-1 rounded-[15px] bg-[#f7f7f9] p-4 font-satoshi text-[15px] outline-none focus:border-[#e22939] transition-colors resize-y min-h-[150px]"
              />
            </div>

            <div className="md:col-span-3 mt-2 flex flex-col gap-3">
              <div ref={turnstileRef} />
              {serverError && <p className="font-satoshi text-[#e22939] text-[14px]">{serverError}</p>}
              {status === "success" && (
                <p className="font-satoshi text-[#232321] text-[15px] font-medium">{t("success")}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="font-satoshi w-full md:w-auto h-[46px] px-10 rounded-[20px] bg-[#e22939] text-white text-[17px] font-bold hover:bg-[#c01f2d] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? t("enviando") : t("enviar")}
              </button>
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </main>
  );
}

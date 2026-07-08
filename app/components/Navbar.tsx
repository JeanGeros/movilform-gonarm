"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

function ChevronDown({ open }: { open?: boolean }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 12 12" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="2 4 6 8 10 4" />
    </svg>
  );
}

export default function Navbar({ bgColor = "bg-white" }: { bgColor?: string } = {}) {
  const t = useTranslations("nav");
  const router = useRouter();
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [casosOpen, setCasosOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const casosRef = useRef<HTMLDivElement>(null);

  const SERVICIOS = [
    { label: t("fdLabel"),            href: "/servicios/formularios-digitales" },
    { label: t("rutasLabel"),         href: "/servicios/modulo-de-rutas" },
    { label: t("tareasLabel"),        href: "/servicios/modulo-de-tareas" },
    { label: t("reportesLabel"),      href: "/servicios/reportes-y-dashboards" },
    { label: t("integracionesLabel"), href: "/servicios/integraciones" },
    { label: t("portalLabel"),        href: "/servicios/portal-de-clientes" },
  ];

  const CASOS_DE_USO = [
    { label: t("mantenimientosLabel"), href: "/casos-de-uso/mantenimientos-preventivos-y-correctivos" },
    { label: t("residuosLabel"),       href: "/casos-de-uso/empresa-de-gestion-de-residuos" },
    { label: t("telecomLabel"),        href: "/casos-de-uso/empresa-de-telecomunicaciones" },
    { label: t("plagasLabel"),         href: "/casos-de-uso/empresa-de-control-de-plagas" },
    { label: t("higieneLabel"),        href: "/casos-de-uso/empresa-de-servicio-de-higiene" },
    { label: t("tecnicoLabel"),        href: "/casos-de-uso/empresa-de-servicio-tecnico" },
  ];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (mobileOpen) return;
      if (serviciosRef.current && !serviciosRef.current.contains(e.target as Node)) {
        setServiciosOpen(false);
      }
      if (casosRef.current && !casosRef.current.contains(e.target as Node)) {
        setCasosOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] md:w-[calc(100%-80px)] max-w-7xl">
      <div className={`${bgColor} rounded-[20px] px-5 md:px-8 h-[60px] md:h-[72px] flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.12)]`}>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative h-[36px] md:h-[44px] w-[130px] md:w-[160px]">
            <Image src="/movilform-logo.svg" alt="MovilForm" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="font-gilmer hidden lg:flex items-center gap-8">
          <Link href="/" className="text-[16px] font-bold text-black hover:text-[#e42433] transition-colors">
            {t("inicio")}
          </Link>

          {/* Servicios dropdown */}
          <div ref={serviciosRef} className="relative">
            <button
              onClick={() => setServiciosOpen((v) => !v)}
              className="flex items-center gap-1 text-[16px] font-bold text-black hover:text-[#e42433] transition-colors cursor-pointer"
            >
              {t("servicios")} <ChevronDown open={serviciosOpen} />
            </button>
            {serviciosOpen && (
              <div className="absolute top-[calc(100%+16px)] left-0 bg-white rounded-[16px] overflow-hidden min-w-[260px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                {SERVICIOS.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setServiciosOpen(false)}
                    className={`block px-6 py-4 text-[16px] font-bold text-black hover:text-[#e42433] hover:bg-gray-50 transition-colors ${
                      i < SERVICIOS.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Casos de Uso dropdown */}
          <div ref={casosRef} className="relative">
            <button
              onClick={() => setCasosOpen((v) => !v)}
              className="flex items-center gap-1 text-[16px] font-bold text-black hover:text-[#e42433] transition-colors cursor-pointer"
            >
              {t("casosDeUso")} <ChevronDown open={casosOpen} />
            </button>
            {casosOpen && (
              <div className="absolute top-[calc(100%+16px)] left-0 bg-white rounded-[16px] overflow-hidden min-w-[300px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                {CASOS_DE_USO.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setCasosOpen(false)}
                    className={`block px-6 py-4 text-[16px] font-bold text-black hover:text-[#e42433] hover:bg-gray-50 transition-colors ${
                      i < CASOS_DE_USO.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/soporte" className="text-[16px] font-bold text-black hover:text-[#e42433] transition-colors">
            {t("soporte")}
          </Link>
          <a
            href="https://cmtelecomunicaciones.atlassian.net/wiki/spaces/MD/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] font-bold text-black hover:text-[#e42433] transition-colors"
          >
            {t("recursos")}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contacto"
          className="font-gilmer flex-shrink-0 hidden lg:inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-[#e42433] text-white text-[16px] font-semibold hover:bg-[#c01f2d] transition-colors"
        >
          {t("contacto")}
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
          aria-label={t("menu")}
        >
          <span className={`block h-[2.5px] w-full bg-black rounded transition-transform duration-300 ${mobileOpen ? "translate-y-[7.5px] rotate-45" : ""}`} />
          <span className={`block h-[2.5px] w-full bg-black rounded transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2.5px] w-full bg-black rounded transition-transform duration-300 ${mobileOpen ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 bg-white rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-6 max-h-[calc(100vh-100px)] overflow-y-auto">
          <Link href="/" className="block py-3 text-[16px] font-bold text-black hover:text-[#e42433]" onClick={() => setMobileOpen(false)}>
            {t("inicio")}
          </Link>

          <div className="border-t border-gray-100">
            <button
              onClick={() => setServiciosOpen((v) => !v)}
              className="flex items-center justify-between w-full py-3 text-[16px] font-bold text-black hover:text-[#e42433] cursor-pointer"
            >
              {t("servicios")} <ChevronDown open={serviciosOpen} />
            </button>
            {serviciosOpen && (
              <div className="pl-4 pb-2">
                {SERVICIOS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => { router.push(item.href); setMobileOpen(false); }}
                    className="block w-full text-left py-2 text-[15px] text-black hover:text-[#e42433] cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-gray-100">
            <button
              onClick={() => setCasosOpen((v) => !v)}
              className="flex items-center justify-between w-full py-3 text-[16px] font-bold text-black hover:text-[#e42433] cursor-pointer"
            >
              {t("casosDeUso")} <ChevronDown open={casosOpen} />
            </button>
            {casosOpen && (
              <div className="pl-4 pb-2">
                {CASOS_DE_USO.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => { router.push(item.href); setMobileOpen(false); }}
                    className="block w-full text-left py-2 text-[15px] text-black hover:text-[#e42433] cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link href="/soporte" className="block py-3 text-[16px] font-bold text-black hover:text-[#e42433] border-t border-gray-100" onClick={() => setMobileOpen(false)}>
            {t("soporte")}
          </Link>
          <a
            href="https://cmtelecomunicaciones.atlassian.net/wiki/spaces/MD/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-[16px] font-bold text-black hover:text-[#e42433] border-t border-gray-100"
            onClick={() => setMobileOpen(false)}
          >
            {t("recursos")}
          </a>

          <div className="mt-4 border-t border-gray-100 pt-4 flex items-center justify-between">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center py-3 px-8 rounded-full bg-[#e42433] text-white text-[16px] font-semibold hover:bg-[#c01f2d] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t("contacto")}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}

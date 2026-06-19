"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SERVICIOS = [
  { label: "Formularios Digitales",  href: "/servicios/formularios-digitales" },
  { label: "Módulo de Rutas",        href: "/servicios/modulo-de-rutas" },
  { label: "Módulo de Tareas",       href: "/servicios/modulo-de-tareas" },
  { label: "Reportes y Dashboards",  href: "/servicios/reportes-y-dashboards" },
  { label: "Integraciones",          href: "/servicios/integraciones" },
  { label: "Portal de Clientes",     href: "/servicios/portal-de-clientes" },
];

const CASOS_DE_USO = [
  { label: "Mantenimientos Preventivos y Correctivos", href: "/casos-de-uso/mantenimientos-preventivos-y-correctivos" },
  { label: "Empresas de Gestión de Residuos",          href: "/casos-de-uso/empresa-de-gestion-de-residuos" },
  { label: "Empresas de Telecomunicaciones",           href: "/casos-de-uso/empresa-de-telecomunicaciones" },
  { label: "Empresas de Control de Plagas",            href: "/casos-de-uso/empresa-de-control-de-plagas" },
  { label: "Empresas de Servicio de Higiene",          href: "/casos-de-uso/empresa-de-servicio-de-higiene" },
  { label: "Empresas de Servicio Técnico",             href: "/casos-de-uso/empresa-de-servicio-tecnico" },
];

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
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [casosOpen, setCasosOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const casosRef = useRef<HTMLDivElement>(null);

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
        <a href="/" className="flex-shrink-0">
          <div className="relative h-[36px] md:h-[44px] w-[130px] md:w-[160px]">
              <Image src="/cropped-movilform-logo-sticky-1-1.png" alt="MovilForm" fill className="object-contain" />
            </div>
        </a>

        {/* Desktop nav links */}
        <div className="font-gilmer hidden lg:flex items-center gap-8">
          <a href="/" className="text-[16px] font-bold text-black hover:text-[#e42433] transition-colors">
            Inicio
          </a>

          {/* Servicios dropdown */}
          <div ref={serviciosRef} className="relative">
            <button
              onClick={() => setServiciosOpen((v) => !v)}
              className="flex items-center gap-1 text-[16px] font-bold text-black hover:text-[#e42433] transition-colors cursor-pointer"
            >
              Servicios <ChevronDown open={serviciosOpen} />
            </button>

            {serviciosOpen && (
              <div className="absolute top-[calc(100%+16px)] left-0 bg-white rounded-[16px] overflow-hidden min-w-[260px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                {SERVICIOS.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setServiciosOpen(false)}
                    className={`block px-6 py-4 text-[16px] font-bold text-black hover:text-[#e42433] hover:bg-gray-50 transition-colors ${
                      i < SERVICIOS.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    {item.label}
                  </a>
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
              Casos de Uso <ChevronDown open={casosOpen} />
            </button>

            {casosOpen && (
              <div className="absolute top-[calc(100%+16px)] left-0 bg-white rounded-[16px] overflow-hidden min-w-[300px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                {CASOS_DE_USO.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setCasosOpen(false)}
                    className={`block px-6 py-4 text-[16px] font-bold text-black hover:text-[#e42433] hover:bg-gray-50 transition-colors ${
                      i < CASOS_DE_USO.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/soporte" className="text-[16px] font-bold text-black hover:text-[#e42433] transition-colors">
            Soporte
          </a>

          <a href="https://cmtelecomunicaciones.atlassian.net/wiki/spaces/MD/overview" className="text-[16px] font-bold text-black hover:text-[#e42433] transition-colors">
            Recursos
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="/contacto"
          className="font-gilmer flex-shrink-0 hidden lg:inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-[#e42433] text-white text-[16px] font-semibold hover:bg-[#c01f2d] transition-colors"
        >
          Contacto
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
          aria-label="Menú"
        >
          <span className={`block h-[2.5px] w-full bg-black rounded transition-transform duration-300 ${mobileOpen ? "translate-y-[7.5px] rotate-45" : ""}`} />
          <span className={`block h-[2.5px] w-full bg-black rounded transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2.5px] w-full bg-black rounded transition-transform duration-300 ${mobileOpen ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 bg-white rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-6 max-h-[calc(100vh-100px)] overflow-y-auto">
          <a href="/" className="block py-3 text-[16px] font-bold text-black hover:text-[#e42433]" onClick={() => setMobileOpen(false)}>
            Inicio
          </a>

          <div className="border-t border-gray-100">
            <button
              onClick={() => setServiciosOpen((v) => !v)}
              className="flex items-center justify-between w-full py-3 text-[16px] font-bold text-black hover:text-[#e42433] cursor-pointer"
            >
              Servicios <ChevronDown open={serviciosOpen} />
            </button>
            {serviciosOpen && (
              <div className="pl-4 pb-2">
                {SERVICIOS.map((item) => (
                  <button
                    key={item.label}
                    onClick={(e) => { e.stopPropagation(); window.location.href = item.href; }}
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
              Casos de Uso <ChevronDown open={casosOpen} />
            </button>
            {casosOpen && (
              <div className="pl-4 pb-2">
                {CASOS_DE_USO.map((item) => (
                  <button
                    key={item.label}
                    onClick={(e) => { e.stopPropagation(); window.location.href = item.href; }}
                    className="block w-full text-left py-2 text-[15px] text-black hover:text-[#e42433] cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="/soporte" className="block py-3 text-[16px] font-bold text-black hover:text-[#e42433] border-t border-gray-100" onClick={() => setMobileOpen(false)}>
            Soporte
          </a>
          <a href="https://cmtelecomunicaciones.atlassian.net/wiki/spaces/MD/overview" className="block py-3 text-[16px] font-bold text-black hover:text-[#e42433] border-t border-gray-100" onClick={() => setMobileOpen(false)}>
            Recursos
          </a>

          <div className="mt-4 border-t border-gray-100 pt-4">
            <a
              href="/contacto"
              className="block text-center py-3 rounded-full bg-[#e42433] text-white text-[16px] font-semibold hover:bg-[#c01f2d] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

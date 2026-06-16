"use client";

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

function LogoIcon() {
  return (
    <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="26" height="28" rx="3" fill="#e42433" opacity="0.35" />
      <rect x="8" y="1" width="26" height="28" rx="3" fill="#e42433" />
      <line x1="14" y1="9"  x2="28" y2="9"  stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="14" y1="15" x2="28" y2="15" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="14" y1="21" x2="22" y2="21" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

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

export default function Navbar() {
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [casosOpen, setCasosOpen] = useState(false);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const casosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (serviciosRef.current && !serviciosRef.current.contains(e.target as Node)) {
        setServiciosOpen(false);
      }
      if (casosRef.current && !casosRef.current.contains(e.target as Node)) {
        setCasosOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-[calc(100%-80px)] max-w-[1340px]">
      <div className="bg-white rounded-[20px] px-8 h-[72px] flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.12)]">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <LogoIcon />
          <span className="font-gilmer text-[22px] leading-none">
            <span className="font-black text-black">movil</span>
            <span className="font-black text-[#e42433]">form</span>
          </span>
        </a>

        {/* Nav links */}
        <div className="font-gilmer flex items-center gap-8">
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

          <a href="#" className="text-[16px] font-bold text-black hover:text-[#e42433] transition-colors">
            Recursos
          </a>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="font-gilmer flex-shrink-0 inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-[#e42433] text-white text-[16px] font-semibold hover:bg-[#c01f2d] transition-colors"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}

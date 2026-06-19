import Image from "next/image";
import Link from "next/link";

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
  { label: "Empresa de Gestión de Residuos",           href: "/casos-de-uso/empresa-de-gestion-de-residuos" },
  { label: "Empresa de Telecomunicaciones",            href: "/casos-de-uso/empresa-de-telecomunicaciones" },
  { label: "Empresa de Control de Plagas",             href: "/casos-de-uso/empresa-de-control-de-plagas" },
  { label: "Empresa de Servicio de Higiene",           href: "/casos-de-uso/empresa-de-servicio-de-higiene" },
  { label: "Empresa de Servicio Técnico",              href: "/casos-de-uso/empresa-de-servicio-tecnico" },
];

export default function Footer({ cardBg = "bg-[#feeaed]" }: { cardBg?: string }) {
  return (
    <footer className="mt-auto">
      {/* Card */}
      <div className={`max-w-7xl mx-auto ${cardBg} rounded-[20px] px-6 md:px-[40px] pt-10 md:pt-14 pb-5`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[250px_1fr_1fr_1fr] gap-8">

          {/* Logo */}
          <div className="flex items-center justify-center sm:justify-start pt-1">
            <Link href="/">
              <div className="relative h-[100px] md:h-[150px] w-[200px] md:w-[300px]">
                <Image src="/cropped-movilform-logo-sticky-1-1.png" alt="MovilForm" fill className="object-contain" />
              </div>
            </Link>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-satoshi text-[20px] md:text-[24px] font-bold text-[#192437] mb-4">
              Servicios
            </h4>
            <ul className="space-y-1">
              {SERVICIOS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-satoshi text-[15px] md:text-[16px] text-black hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Casos de uso */}
          <div>
            <h4 className="font-satoshi text-[20px] md:text-[24px] font-bold text-[#192437] mb-4">
              Casos de uso
            </h4>
            <ul className="space-y-1">
              {CASOS_DE_USO.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-satoshi text-[15px] md:text-[16px] text-black hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-satoshi text-[20px] md:text-[24px] font-bold text-[#192437] mb-4">
              Información de contacto
            </h4>
            <p className="font-satoshi text-[15px] md:text-[16px] text-[#192437]">Teléfono:</p>
            <p className="font-satoshi text-[15px] md:text-[16px] text-black mt-1">+56 232241522</p>
            <p className="font-satoshi text-[15px] md:text-[16px] text-[#192437] mt-4">Correo Electrónico:</p>
            <a
              href="mailto:contacto@movilform.com"
              className="font-satoshi text-[15px] md:text-[16px] text-black mt-1 block hover:underline"
            >
              contacto@movilform.com
            </a>
          </div>

        </div>
        {/* Divider */}
        <div className="mx-0 md:mx-[70px] mt-6 border-t border-[black]" />

        {/* Bottom bar */}
        <div className="mx-0 md:mx-[70px] mt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-satoshi text-[14px] md:text-[16px] text-black text-center sm:text-left">
            MovilForm • Todos los derechos reservados © 2026
          </p>
          <p className="font-satoshi text-[14px] md:text-[16px] text-black">
            Desarrollado por GONARM
          </p>
        </div>
      </div>
    </footer>
  );
}

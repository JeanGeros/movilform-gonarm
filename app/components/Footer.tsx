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
  "Empresa de Gestión de Residuos",
  "Empresa de Telecomunicaciones",
  "Empresa de Control de Plagas",
  "Empresa de Servicio Técnico",
  "Empresa de Servicio de higiene",
];

export default function Footer() {
  return (
    <footer className="">
      {/* Card */}
      <div className="max-w-[1440px] mx-auto bg-[#feeaed] rounded-[20px] px-[40px] pt-14 pb-5">
        <div className="grid grid-cols-[250px_1fr_1fr_1fr] gap-8">

          {/* Logo */}
          <div className="flex items-center pt-1">
            <Link href="/">
              <Image src="/cropped-movilform-logo-sticky-1-1.png" alt="MovilForm" width={300} height={140} className="h-[150px] w-[400px] object-contain" />
            </Link>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-satoshi text-[24px] font-bold text-[#192437] mb-4">
              Servicios
            </h4>
            <ul className="space-y-1">
              {SERVICIOS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-satoshi text-[16px] text-black hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Casos de uso */}
          <div>
            <h4 className="font-satoshi text-[24px] font-bold text-[#192437] mb-4">
              Casos de uso
            </h4>
            <ul className="space-y-1">
              {CASOS_DE_USO.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-satoshi text-[16px] text-black hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-satoshi text-[24px] font-bold text-[#192437] mb-4">
              Información de contacto
            </h4>
            <p className="font-satoshi text-[16px] text-[#192437]">Teléfono:</p>
            <p className="font-satoshi text-[16px] text-black mt-1">+56 232241522</p>
            <p className="font-satoshi text-[16px] text-[#192437] mt-4">Correo Electrónico:</p>
            <a
              href="mailto:contacto@movilform.com"
              className="font-satoshi text-[16px] text-black mt-1 block hover:underline"
            >
              contacto@movilform.com
            </a>
          </div>

        </div>
          {/* Divider */}
      <div className="mx-[70px] mt-6 border-t border-[black]" />

      {/* Bottom bar */}
      <div className="mx-[70px] mt-4 flex items-center justify-between">
        <p className="font-satoshi text-[16px] text-black">
          MovilForm • Todos los derechos reservados © 2026
        </p>
        <p className="font-satoshi text-[16px] text-black">
          Desarrollado por GONARM
        </p>
      </div>
      </div>
    </footer>
  );
}

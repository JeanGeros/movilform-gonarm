"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer({
  cardBg = "bg-[#feeaed]",
}: {
  cardBg?: string;
}) {
  const tf = useTranslations("footer");
  const tn = useTranslations("nav");

  const SERVICIOS = [
    { label: tn("fdLabel"),            href: "/servicios/formularios-digitales" },
    { label: tn("rutasLabel"),         href: "/servicios/modulo-de-rutas" },
    { label: tn("tareasLabel"),        href: "/servicios/modulo-de-tareas" },
    { label: tn("reportesLabel"),      href: "/servicios/reportes-y-dashboards" },
    { label: tn("integracionesLabel"), href: "/servicios/integraciones" },
    { label: tn("portalLabel"),        href: "/servicios/portal-de-clientes" },
  ];

  const CASOS_DE_USO = [
    { label: tn("mantenimientosLabel"), href: "/casos-de-uso/mantenimientos-preventivos-y-correctivos" },
    { label: tn("residuosLabel"),       href: "/casos-de-uso/empresa-de-gestion-de-residuos" },
    { label: tn("telecomLabel"),        href: "/casos-de-uso/empresa-de-telecomunicaciones" },
    { label: tn("plagasLabel"),         href: "/casos-de-uso/empresa-de-control-de-plagas" },
    { label: tn("higieneLabel"),        href: "/casos-de-uso/empresa-de-servicio-de-higiene" },
    { label: tn("tecnicoLabel"),        href: "/casos-de-uso/empresa-de-servicio-tecnico" },
  ];

  return (
    <footer className="mt-auto">
      {/* Card */}
      <div className={`max-w-7xl mx-auto ${cardBg} rounded-[20px] px-6 md:px-[40px] pt-10 md:pt-14 pb-5`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[250px_1fr_1fr_1fr] gap-8">
          {/* Logo */}
          <div className="flex items-center justify-center pt-1">
            <Link href="/">
              <div className="relative h-[100px] md:h-[150px] w-[200px]">
                <Image
                  src="/movilform-logo.svg"
                  alt="MovilForm"
                  fill
                  quality={100}
                  sizes="250px"
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-satoshi text-[20px] md:text-[24px] font-bold text-[#192437] mb-4">
              {tf("servicios")}
            </h4>
            <ul className="space-y-1">
              {SERVICIOS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-satoshi text-[15px] md:text-[16px] text-black hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Casos de uso */}
          <div>
            <h4 className="font-satoshi text-[20px] md:text-[24px] font-bold text-[#192437] mb-4">
              {tf("casosDeUso")}
            </h4>
            <ul className="space-y-1">
              {CASOS_DE_USO.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-satoshi text-[15px] md:text-[16px] text-black hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-satoshi text-[20px] md:text-[24px] font-bold text-[#192437] mb-4">
              {tf("contactInfo")}
            </h4>
            <p className="font-satoshi text-[15px] md:text-[16px] text-[#192437]">
              {tf("telefono")}
            </p>
            <p className="font-satoshi text-[15px] md:text-[16px] text-black mt-1">
              +56 232241522
            </p>
            <p className="font-satoshi text-[15px] md:text-[16px] text-[#192437] mt-4">
              {tf("correo")}
            </p>
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
            {tf("rights")}
          </p>
          <p className="font-satoshi text-[14px] md:text-[16px] text-black">
            {tf("developed")}
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faRoute,
  faChartBar,
  faProjectDiagram,
  faUserCircle,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const ALL_SERVICES = [
  {
    slug: "formularios-digitales",
    icon: faMobileAlt,
    title: "Formularios Digitales",
    description:
      "Los formularios digitales son la evolución del papel, diseña los tuyos con fotos, checkbox o desplegables, potencia tus equipos de trabajo.",
    href: "/servicios/formularios-digitales",
  },
  {
    slug: "modulo-de-rutas",
    icon: faRoute,
    title: "Módulo de Rutas",
    description:
      "Planifica tus servicios, programa fácilmente las visitas a tus clientes y recibe información en línea de las actividades ejecutadas.",
    href: "/servicios/modulo-de-rutas",
  },
  {
    slug: "modulo-de-tareas",
    icon: faFileAlt,
    title: "Módulo de Tareas",
    description:
      "Programa tus visitas individuales sin necesidad de asignarlas a una ruta, podrás incluir diferentes servicios en una misma visita y validar los trabajos realizados de forma online.",
    href: "/servicios/modulo-de-tareas",
  },
  {
    slug: "reportes-y-dashboards",
    icon: faChartBar,
    title: "Reportes y Dashboards",
    description:
      "Accede a toda la información capturada con MovilForm, ya sea en un Dashboard o un reporte PDF los cuales son totalmente personalizados.",
    href: "/servicios/reportes-y-dashboards",
  },
  {
    slug: "integraciones",
    icon: faProjectDiagram,
    title: "Integraciones",
    description:
      "A través de nuestra API, podrás integrar tu software propio o uno externo y recibirás información de forma automática y online.",
    href: "/servicios/integraciones",
  },
  {
    slug: "portal-de-clientes",
    icon: faUserCircle,
    title: "Portal de Clientes",
    description:
      "Entrega a tus clientes un acceso exclusivo para compartir información de las actividades realizadas.",
    href: "/servicios/portal-de-clientes",
  },
];

const VISIBLE = 3;
const GAP = 30;

function wrap(n: number, len: number) {
  return ((n % len) + len) % len;
}

export default function ServicesCarousel({ currentSlug }: { currentSlug: string }) {
  const services = ALL_SERVICES.filter((s) => s.slug !== currentSlug);
  const len = services.length;

  const [startIndex, setStartIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const rendered = Array.from({ length: VISIBLE + 2 }, (_, i) => {
    const idx = wrap(startIndex - 1 + i, len);
    return { ...services[idx], key: `${idx}-${i}` };
  });

  function slide(dir: "left" | "right") {
    if (isAnimating) return;
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const distance = card.offsetWidth + GAP;

    setIsAnimating(true);
    setOffset(dir === "right" ? -distance : distance);

    setTimeout(() => {
      setIsAnimating(false);
      setOffset(0);
      setStartIndex((prev) => wrap(dir === "right" ? prev + 1 : prev - 1, len));
    }, 400);
  }

  return (
    <section className="pb-16 max-w-7xl mx-auto">
      <h2 className="font-satoshi text-[48px] font-black text-[#e22939] text-center leading-[52px] mb-10">
        Conoce más de nuestros servicios
      </h2>

      <div className="relative">
        <button
          onClick={() => slide("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 text-[#192437]" />
        </button>

        <div className="overflow-hidden mx-10">
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(-1 * (calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE} + ${GAP}px)) + ${offset}px))`,
              transition: isAnimating ? "transform 400ms ease" : "none",
            }}
          >
            {rendered.map((s) => (
              <a
                key={s.key}
                href={s.href}
                data-card
                className="bg-white rounded-[20px] px-6 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                style={{
                  flex: `0 0 calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
                }}
              >
                <FontAwesomeIcon icon={s.icon} className="text-[#e42233]" style={{ fontSize: "3rem" }} />
                <h3 className="font-satoshi mt-6 text-[24px] font-bold text-black leading-[30px]">
                  {s.title}
                </h3>
                <p className="font-satoshi mt-5 text-[15px] font-medium text-[#00000] text-justify tracking-[0px] leading-[24px]">
                  {s.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={() => slide("right")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 text-[#192437]" />
        </button>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTrashAlt,
  faBroadcastTower,
  faBug,
  faSoap,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

const USE_CASES = [
  {
    icon: faSoap,
    title: "Empresa de Servicios de Higiene",
    description:
      "Programa y asigna las tareas de instalación y mantenimiento de aromatizadores, dispensadores, insumos o planifica los servicios de aromatización, higiene de superficies o de aire.",
    href: "/casos-de-uso/empresa-de-servicio-de-higiene",
  },
  {
    icon: faDesktop,
    title: "Empresa de Servicio Técnico",
    description:
      "Crea la programación de mantenciones mensuales o trimestrales o asigna visitas de emergencia par atender a tus clientes de forma eficiente, esto y mucho más con MovilForm.",
    href: "/casos-de-uso/empresa-de-servicio-tecnico",
  },
  {
    icon: faTrashAlt,
    title: "Empresa de Gestión de Residuos",
    description:
      "MovilForm optimiza la recolección de residuos, planificando rutas, turnos y vehículos. Ahorra tiempo y recursos, y genera reportes automáticos.",
    href: "/casos-de-uso/empresa-de-gestion-de-residuos",
  },
  {
    icon: faBroadcastTower,
    title: "Empresa de Telecomunicaciones",
    description:
      "Planifica tus ordenes de servicio o trabajo que realiza su personal en terreno, podrás gestionar a tu personal interno como a las empresas colaboradoras.",
    href: "/casos-de-uso/empresa-de-telecomunicaciones",
  },
  {
    icon: faBug,
    title: "Empresa de Control de Plagas",
    description:
      "Con MovilForm podrás gestionar y planificar todos tus servicios de desratización, control de aves, termitas, TUV, cucarachas y también podrás generar tus certificados digitales.",
    href: "/casos-de-uso/empresa-de-control-de-plagas",
  },
];

const VISIBLE = 3;
const GAP = 24;

function wrap(n: number, len: number) {
  return ((n % len) + len) % len;
}

export default function UseCasesCarousel() {
  const len = USE_CASES.length;

  const [startIndex, setStartIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const [mobileCurrent, setMobileCurrent] = useState(0);
  const [mobileDirection, setMobileDirection] = useState<"left" | "right">(
    "right",
  );
  const [mobileAnimating, setMobileAnimating] = useState(false);
  const touchStartX = useRef(0);

  const rendered = Array.from({ length: VISIBLE + 2 }, (_, i) => {
    const idx = wrap(startIndex - 1 + i, len);
    return { ...USE_CASES[idx], key: `${idx}-${i}` };
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

  function mobileSlideTo(index: number, dir: "left" | "right") {
    if (mobileAnimating) return;
    setMobileDirection(dir);
    setMobileAnimating(true);
    setTimeout(() => {
      setMobileCurrent(index);
      setMobileAnimating(false);
    }, 300);
  }

  function mobilePrev() {
    mobileSlideTo(mobileCurrent === 0 ? len - 1 : mobileCurrent - 1, "left");
  }

  function mobileNext() {
    mobileSlideTo(mobileCurrent === len - 1 ? 0 : mobileCurrent + 1, "right");
  }

  const mobileSlideClass = mobileAnimating
    ? mobileDirection === "right"
      ? "animate-uc-out-left"
      : "animate-uc-out-right"
    : mobileDirection === "right"
      ? "animate-uc-in-right"
      : "animate-uc-in-left";

  const cardContent = (c: (typeof USE_CASES)[number]) => (
    <>
      <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-white flex items-center justify-center">
        <FontAwesomeIcon
          icon={c.icon}
          className="text-[#e42233]"
          style={{ fontSize: "2.5rem" }}
        />
      </div>
      <h3 className="font-satoshi mt-4 md:mt-6 text-[18px] md:text-[22px] font-bold text-black leading-[24px] md:leading-[28px]">
        {c.title}
      </h3>
      <p className="font-satoshi mt-2 md:mt-3 text-[14px] md:text-[16px] font-medium text-[#3f4648] text-justify leading-[22px] md:leading-[24px]">
        {c.description}
      </p>
    </>
  );

  return (
    <>
      <style>{`
        @keyframes ucOutLeft { from { transform: translateX(0); opacity: 1; } to { transform: translateX(-30%); opacity: 0; } }
        @keyframes ucOutRight { from { transform: translateX(0); opacity: 1; } to { transform: translateX(30%); opacity: 0; } }
        @keyframes ucInLeft { from { transform: translateX(-30%); } to { transform: translateX(0); } }
        @keyframes ucInRight { from { transform: translateX(30%); } to { transform: translateX(0); } }
        .animate-uc-out-left { animation: ucOutLeft 300ms ease forwards; }
        .animate-uc-out-right { animation: ucOutRight 300ms ease forwards; }
        .animate-uc-in-left { animation: ucInLeft 300ms ease forwards; }
        .animate-uc-in-right { animation: ucInRight 300ms ease forwards; }
      `}</style>

      {/* ── Mobile: single card ─────────────────────────────────────────── */}
      <div
        className="md:hidden relative overflow-hidden"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) {
            if (diff > 0) mobileNext();
            else mobilePrev();
          }
        }}
      >
        <button
          onClick={mobilePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center"
          aria-label="Anterior"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-[#e42233] text-lg"
          />
        </button>

        <div
          className={`px-10 ${mobileSlideClass}`}
          key={mobileAnimating ? "exit" : mobileCurrent}
        >
          <a
            href={USE_CASES[mobileCurrent].href}
            className="bg-[#feeaed] rounded-[20px] p-6 flex flex-col items-center text-center"
          >
            {cardContent(USE_CASES[mobileCurrent])}
          </a>
        </div>

        <button
          onClick={mobileNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center"
          aria-label="Siguiente"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-[#e42233] text-lg"
          />
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {USE_CASES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i === mobileCurrent) return;
                mobileSlideTo(i, i > mobileCurrent ? "right" : "left");
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === mobileCurrent ? "bg-[#e22939]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Desktop: 3-card carousel ────────────────────────────────────── */}
      <div className="hidden md:block relative">
        <button
          onClick={() => slide("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="w-5 h-5 text-[#192437]"
          />
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
            {rendered.map((c) => (
              <a
                key={c.key}
                href={c.href}
                data-card
                className="bg-[#feeaed] rounded-[20px] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                style={{
                  flex: `0 0 calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
                }}
              >
                {cardContent(c)}
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={() => slide("right")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="w-5 h-5 text-[#192437]"
          />
        </button>
      </div>
    </>
  );
}

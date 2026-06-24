"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SLIDES = [
  {
    bg: "/inicio/banner/imgi_38_digitalizacion-de-documentos-1-1.webp",
    title: "Optimiza la gestión de tu equipo con MovilForm.",
    description:
      "Digitaliza formularios y ordenes de trabajo, asigna tareas y rutas a tu personal en terreno. Con MovilForm mejora tu operación y mantén el control de tus procesos.",
  },
  {
    bg: "/inicio/hero.jpg",
    title: (
      <>
        Integraciones, personalización
        <br className="hidden md:block" /> y mucho más.
      </>
    ),
    description:
      "Integra tu software con MovilForm, podrás extraer o enviar datos, completa tus formularios digitales y optimiza tus procesos.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1)),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      <Image
        src={slide.bg}
        alt=""
        fill
        sizes="100vw"
        quality={100}
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(20,20,20,0.8)]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-8 pt-16 md:pt-0">
        <h1 className="font-montserrat text-[32px] md:text-[55px] font-bold leading-[40px] md:leading-[60px] tracking-[-1px] text-white w-[80%]">
          {slide.title}
        </h1>
        <p className="font-montserrat font-medium text-justify mt-5 md:mt-5 text-[16px] md:text-[20px] leading-[22px] text-[#b5b5b5] max-w-[600px]">
          {slide.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-30 mt-8 md:mt-10 w-[80%] sm:w-auto items-center">
          <a
            href="/servicios/modulo-de-tareas"
            className="font-montserrat inline-flex items-center justify-center w-full sm:w-auto h-[46px] md:h-[40px] px-10 rounded-[30px] hover:text-[rgba(229,35,51,0.8)] hover:bg-white bg-[rgba(229,35,51,0.8)] text-white text-[16px] md:text-[17px] font-bold transition-colors"
          >
            Ver servicios
          </a>
          <a
            href="https://wa.me/+56961558312"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat inline-flex items-center justify-center w-full sm:w-auto h-[46px] md:h-[40px] px-10 rounded-[30px] hover:text-[rgba(229,35,51,0.8)] hover:bg-white bg-[rgba(229,35,51,0.8)] text-white text-[16px] md:text-[17px] font-bold transition-colors"
          >
            Solicitar demo
          </a>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute z-20 left-3 md:left-5 top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-white text-lg" />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute z-20 right-3 md:right-5 top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-white text-lg" />
      </button>

      <div className="absolute z-20 bottom-5 left-1/2 -translate-x-1/2 flex gap-[5px]">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-[60px] h-[3px] rounded-full transition-colors ${
              i === current ? "bg-white/70" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

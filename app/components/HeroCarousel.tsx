"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const BG_SLIDES = [
  "/inicio/banner/imgi_38_digitalizacion-de-documentos-1-1.webp",
  "/inicio/hero.jpg",
];

export default function HeroCarousel() {
  const t = useTranslations("hero");

  const SLIDES = [
    { bg: BG_SLIDES[0], title: t("slide1Title"), description: t("slide1Desc") },
    { bg: BG_SLIDES[1], title: t("slide2Title"), description: t("slide2Desc") },
  ];

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  const changeTo = useCallback((index: number) => {
    setAnimating(false);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(true);
    }, 50);
  }, []);

  const next = useCallback(
    () => changeTo((current + 1) % SLIDES.length),
    [current, changeTo, SLIDES.length],
  );
  const prev = useCallback(
    () => changeTo(current === 0 ? SLIDES.length - 1 : current - 1),
    [current, changeTo, SLIDES.length],
  );

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full h-[550px] md:h-[700px] overflow-hidden">
      {BG_SLIDES.map((bg, i) => (
        <Image
          key={bg}
          src={bg}
          alt=""
          fill
          sizes="100vw"
          quality={100}
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-[rgba(20,20,20,0.8)]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-end md:justify-center text-center px-6 md:px-8 py-10 md:py-0">
        <h1
          className={`font-montserrat text-[32px] md:text-[55px] font-bold leading-[40px] md:leading-[60px] tracking-[-1px] text-white w-90 md:w-[80%] transition-all duration-700 ${
            animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {slide.title}
        </h1>
        <p
          className={`font-montserrat font-medium text-justify mt-5 md:mt-5 text-[16px] md:text-[20px] leading-[22px] text-[#b5b5b5] max-w-[600px] transition-all duration-700 delay-150 ${
            animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {slide.description}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-30 mt-8 md:mt-10 w-[80%] sm:w-auto items-center transition-all duration-700 delay-300 ${
            animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/servicios/modulo-de-tareas"
            className="font-montserrat inline-flex items-center justify-center w-full sm:w-auto h-[45px] px-10 rounded-[30px] hover:text-[rgba(229,35,51,0.8)] hover:bg-white bg-[rgba(229,35,51,0.8)] text-white text-[16px] md:text-[17px] font-bold transition-colors"
          >
            {t("verServicios")}
          </Link>
          <a
            href="https://wa.me/+56985297643"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat inline-flex items-center justify-center w-full sm:w-auto h-[45px] px-10 rounded-[30px] hover:text-[rgba(229,35,51,0.8)] hover:bg-white bg-[rgba(229,35,51,0.8)] text-white text-[16px] md:text-[17px] font-bold transition-colors"
          >
            {t("solicitarDemo")}
          </a>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label={t("anterior")}
        className="absolute z-20 left-3 md:left-5 top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-white text-lg" />
      </button>
      <button
        onClick={next}
        aria-label={t("siguiente")}
        className="absolute z-20 right-3 md:right-5 top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-white text-lg" />
      </button>

      <div className="absolute z-20 bottom-5 left-1/2 -translate-x-1/2 flex gap-[5px]">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => changeTo(i)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === current
                ? "w-[80px] bg-white/90"
                : "w-[40px] bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const FEATURE_IMGS = [
  "/inicio/coding.png",
  "/inicio/innovation.png",
  "/inicio/quality.png",
];

export default function FeaturesCarousel() {
  const t = useTranslations("features");
  const [current, setCurrent] = useState(0);

  const FEATURES = [
    { img: FEATURE_IMGS[0], title: t("plataforma"),  description: t("plataformaDesc") },
    { img: FEATURE_IMGS[1], title: t("innovacion"),  description: t("innovacionDesc") },
    { img: FEATURE_IMGS[2], title: t("compromiso"),  description: t("compromisoDesc") },
  ];

  function prev() {
    setCurrent((c) => (c === 0 ? FEATURES.length - 1 : c - 1));
  }

  function next() {
    setCurrent((c) => (c === FEATURES.length - 1 ? 0 : c + 1));
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-[70px] pb-16 md:pb-24">
      {/* Desktop: grid */}
      <div className="hidden sm:grid grid-cols-3 gap-8">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center">
            <div className="w-[100px] h-[100px]">
              <Image src={f.img} alt="" width={100} height={100} className="w-full h-full object-contain" />
            </div>
            <h3 className="font-satoshi mt-6 text-[20px] font-bold text-black leading-[27px]">
              {f.title}
            </h3>
            <p className="font-satoshi mt-2 text-[16px] leading-[22px] text-black">
              {f.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: carrusel */}
      <div className="sm:hidden relative flex flex-col items-center">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center"
          aria-label={t("anterior") ?? "Anterior"}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-[#e42233]" style={{ fontSize: "1.25rem" }} />
        </button>

        <div className="flex flex-col items-center text-center px-12">
          <div className="w-[100px] h-[100px]">
            <Image src={FEATURES[current].img} alt="" width={100} height={100} className="w-full h-full object-contain" />
          </div>
          <h3 className="font-satoshi mt-6 text-[20px] font-bold text-black leading-[27px]">
            {FEATURES[current].title}
          </h3>
          <p className="font-satoshi mt-2 text-[16px] leading-[22px] text-black">
            {FEATURES[current].description}
          </p>
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center"
          aria-label={t("siguiente") ?? "Siguiente"}
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-[#e42233]" style={{ fontSize: "1.25rem" }} />
        </button>

        <p className="mt-6 font-satoshi text-[14px] text-[#3f4648]">
          {current + 1} / {FEATURES.length}
        </p>
      </div>
    </section>
  );
}

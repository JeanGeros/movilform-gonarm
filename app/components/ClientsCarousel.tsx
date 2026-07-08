"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CLIENTS = [
  { src: "/clientes/imgi_11_Rentokil-1-1.webp",      alt: "Rentokil" },
  { src: "/clientes/imgi_12_Ingeclean-1.webp",        alt: "Ingeclean" },
  { src: "/clientes/imgi_13_KDM_Industrial-1.webp",   alt: "KDM Industrial" },
  { src: "/clientes/imgi_14_Veolia-2.webp",           alt: "Veolia" },
  { src: "/clientes/imgi_15_Rema-1.webp",             alt: "Rema" },
  { src: "/clientes/imgi_16_vielco.webp",             alt: "Vielco" },
  { src: "/clientes/imgi_17_Elemont-1.webp",          alt: "Elemont" },
  { src: "/clientes/imgi_18_Flutech-1.webp",          alt: "Flutech" },
  { src: "/clientes/imgi_19_Maquipan-1.webp",         alt: "Maquipan" },
  { src: "/clientes/imgi_20_Precision-chile.webp",    alt: "Precisión Chile" },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function check() { setIsMobile(window.innerWidth < 768); }
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function ClientsCarousel() {
  const t = useTranslations("common");
  const isMobile = useIsMobile();
  const itemWidth = isMobile ? 120 : 180;
  const gap = isMobile ? 24 : 40;
  const step = itemWidth + gap;
  const totalWidth = step * CLIENTS.length;

  const [offset, setOffset] = useState(0);
  const animRef = useRef<number>(0);
  const lastTimeRef = useRef(0);

  const activeIndex = Math.floor((offset % totalWidth) / step) % CLIENTS.length;

  useEffect(() => {
    function animate(time: number) {
      if (lastTimeRef.current) {
        const delta = time - lastTimeRef.current;
        setOffset((prev) => prev + delta * 0.1);
      }
      lastTimeRef.current = time;
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section className="max-w-7xl mx-0 md:mx-auto rounded-none md:rounded-[20px] bg-[#e42233] py-8 md:py-10 overflow-hidden">
      <h2 className="font-satoshi text-[24px] md:text-[40px] font-black text-white text-center leading-[30px] md:leading-[40px] mb-6 md:mb-8 px-4">
        {t("clientsHeading")}
      </h2>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${offset % totalWidth}px)`,
            willChange: "transform",
          }}
        >
          {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-12 md:h-20"
              style={{ width: `${itemWidth}px` }}
            >
              <div className="relative w-full h-full">
                <Image src={client.src} alt={client.alt} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
        {CLIENTS.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-300 ${
              i === activeIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

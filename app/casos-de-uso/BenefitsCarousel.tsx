"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Benefit {
  img: string;
  alt: string;
  title: string;
  desc: string;
}

export default function BenefitsCarousel({ benefits }: { benefits: Benefit[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const startX = useRef(0);

  function slideTo(index: number, dir: "left" | "right") {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }

  function prev() {
    const index = current === 0 ? benefits.length - 1 : current - 1;
    slideTo(index, "left");
  }

  function next() {
    const index = current === benefits.length - 1 ? 0 : current + 1;
    slideTo(index, "right");
  }

  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next(); else prev();
    }
  }

  const slideClass = animating
    ? direction === "right"
      ? "animate-slide-out-left"
      : "animate-slide-out-right"
    : direction === "right"
      ? "animate-slide-in-right"
      : "animate-slide-in-left";

  return (
    <>
      <style>{`
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-30%); opacity: 0; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(30%); opacity: 0; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-30%); }
          to { transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { transform: translateX(30%); }
          to { transform: translateX(0); }
        }
        .animate-slide-out-left { animation: slideOutLeft 300ms ease forwards; }
        .animate-slide-out-right { animation: slideOutRight 300ms ease forwards; }
        .animate-slide-in-left { animation: slideInLeft 300ms ease forwards; }
        .animate-slide-in-right { animation: slideInRight 300ms ease forwards; }
      `}</style>

      {/* Mobile: un solo item visible con flechas y swipe */}
      <div
        className="md:hidden relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={prev}
          className="absolute left-0 top-[100px] -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center"
          aria-label="Anterior"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-[#e42233] text-lg" />
        </button>

        <div className={`px-10 ${slideClass}`} key={animating ? "exit" : current}>
          <div className="bg-white rounded-[20px]">
            <div className="h-[200px] rounded-[20px] overflow-hidden">
              <Image
                src={benefits[current].img}
                alt={benefits[current].alt}
                width={600}
                height={400}
                className="w-full object-cover"
                style={{ height: "100%" }}
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-satoshi text-[22px] font-bold text-[#192437] leading-[30px]">
                {benefits[current].title}
              </h3>
              <p className="font-satoshi mt-4 text-[15px] text-justify text-[#3f4648] leading-[24px]">
                {benefits[current].desc}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-[100px] -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center"
          aria-label="Siguiente"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-[#e42233] text-lg" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {benefits.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i === current) return;
                slideTo(i, i > current ? "right" : "left");
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-[#e22939]" : "bg-[#feeaed]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="bg-white rounded-[20px]">
            <div className="h-[240px] rounded-[20px] overflow-hidden">
              <Image src={b.img} alt={b.alt} width={600} height={400} className="w-full object-cover" style={{ height: "100%" }} />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-satoshi text-[27.2px] font-bold text-[#192437] leading-[30px]">{b.title}</h3>
              <p className="font-satoshi mt-4 text-[16px] text-justify text-[#3f4648] leading-[26px]">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
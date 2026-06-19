"use client";

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Feature {
  icon: IconDefinition;
  title: string;
  desc: string;
}

export default function FeaturesCardCarousel({
  features,
}: {
  features: Feature[];
}) {
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
    slideTo(current === 0 ? features.length - 1 : current - 1, "left");
  }

  function next() {
    slideTo(current === features.length - 1 ? 0 : current + 1, "right");
  }

  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
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

      {/* Mobile carousel */}
      <div
        className="md:hidden relative overflow-hidden my-6"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center"
          aria-label="Anterior"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-[#e42233] text-lg"
          />
        </button>

        <div
          className={`px-10 ${slideClass}`}
          key={animating ? "exit" : current}
        >
          <div className="bg-[#feeaed] rounded-[20px] p-8 flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={features[current].icon}
              className="text-[#4d4d4d]"
              style={{ fontSize: "2.5rem" }}
            />
            <h3 className="font-satoshi mt-4 text-[18px] font-bold text-black leading-[24px]">
              {features[current].title}
            </h3>
            <p className="font-satoshi mt-2 text-[14px] font-medium text-[#3f4648] leading-[22px]">
              {features[current].desc}
            </p>
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center"
          aria-label="Siguiente"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-[#e42233] text-lg"
          />
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {features.map((_, i) => (
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
      <div className="hidden md:grid grid-cols-4 gap-6 my-15">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-[#feeaed] rounded-[20px] p-8 flex flex-col items-center text-center"
          >
            <FontAwesomeIcon
              icon={f.icon}
              className="text-[#4d4d4d]"
              style={{ fontSize: "3rem" }}
            />
            <h3 className="font-satoshi mt-6 text-[20px] font-bold text-black leading-[28px]">
              {f.title}
            </h3>
            <p className="font-satoshi mt-3 text-[15px] font-medium text-[#3f4648] leading-[26px]">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ImageCarousel({
  images,
  contain = false,
}: {
  images: string[];
  contain?: boolean;
}) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)),
    [images.length],
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="flex items-center gap-0">
      <button
        onClick={prev}
        aria-label="Anterior"
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-[#e42233] text-2xl"
        />
      </button>

      <div className="relative rounded-[15px] overflow-hidden aspect-[4/3] flex-1">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
            className={`${contain ? "object-contain" : "object-cover"} transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute z-10 bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={next}
        aria-label="Siguiente"
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-[#e42233] text-2xl"
        />
      </button>
    </div>
  );
}

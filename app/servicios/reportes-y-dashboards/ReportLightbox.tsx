"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const IMG_REPORT_PDF =
  "/servicios/reportes-y-dashboards/pint_informe-pdf-1-de-3.webp";

export default function ReportLightbox() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <strong
        className="text-[#192437] cursor-pointer underline hover:text-[#e52533] transition-colors"
        onClick={() => setOpen(true)}
      >
        Ver reporte PDF
      </strong>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white text-4xl leading-none cursor-pointer hover:text-gray-300 transition-colors"
            aria-label="Cerrar"
          >
            &times;
          </button>

          <div
            className="relative max-w-3xl w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMG_REPORT_PDF}
              alt="Informe PDF de servicio técnico generado por MovilForm"
              width={850}
              height={1100}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

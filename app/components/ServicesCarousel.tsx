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
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const SERVICE_ICONS = [
  faMobileAlt,
  faRoute,
  faFileAlt,
  faChartBar,
  faProjectDiagram,
  faUserCircle,
];

const SERVICE_HREFS = [
  "/servicios/formularios-digitales",
  "/servicios/modulo-de-rutas",
  "/servicios/modulo-de-tareas",
  "/servicios/reportes-y-dashboards",
  "/servicios/integraciones",
  "/servicios/portal-de-clientes",
];

const SERVICE_SLUGS = [
  "formularios-digitales",
  "modulo-de-rutas",
  "modulo-de-tareas",
  "reportes-y-dashboards",
  "integraciones",
  "portal-de-clientes",
];

const VISIBLE = 3;
const GAP = 30;

function wrap(n: number, len: number) {
  return ((n % len) + len) % len;
}

export default function ServicesCarousel({ currentSlug }: { currentSlug: string }) {
  const t = useTranslations("services-carousel");

  const ALL_SERVICES = [
    { slug: SERVICE_SLUGS[0], icon: SERVICE_ICONS[0], title: t("formularios"),    description: t("formulariosDesc"),    href: SERVICE_HREFS[0] },
    { slug: SERVICE_SLUGS[1], icon: SERVICE_ICONS[1], title: t("rutas"),          description: t("rutasDesc"),          href: SERVICE_HREFS[1] },
    { slug: SERVICE_SLUGS[2], icon: SERVICE_ICONS[2], title: t("tareas"),         description: t("tareasDesc"),         href: SERVICE_HREFS[2] },
    { slug: SERVICE_SLUGS[3], icon: SERVICE_ICONS[3], title: t("reportes"),       description: t("reportesDesc"),       href: SERVICE_HREFS[3] },
    { slug: SERVICE_SLUGS[4], icon: SERVICE_ICONS[4], title: t("integraciones"),  description: t("integracionesDesc"),  href: SERVICE_HREFS[4] },
    { slug: SERVICE_SLUGS[5], icon: SERVICE_ICONS[5], title: t("portal"),         description: t("portalDesc"),         href: SERVICE_HREFS[5] },
  ];

  const services = ALL_SERVICES.filter((s) => s.slug !== currentSlug);
  const len = services.length;

  const [startIndex, setStartIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const [mobileCurrent, setMobileCurrent] = useState(0);
  const [mobileDirection, setMobileDirection] = useState<"left" | "right">("right");
  const [mobileAnimating, setMobileAnimating] = useState(false);
  const touchStartX = useRef(0);

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
    ? mobileDirection === "right" ? "animate-srv-slide-out-left" : "animate-srv-slide-out-right"
    : mobileDirection === "right" ? "animate-srv-slide-in-right" : "animate-srv-slide-in-left";

  return (
    <>
      <style>{`
        @keyframes srvSlideOutLeft { from { transform: translateX(0); opacity: 1; } to { transform: translateX(-30%); opacity: 0; } }
        @keyframes srvSlideOutRight { from { transform: translateX(0); opacity: 1; } to { transform: translateX(30%); opacity: 0; } }
        @keyframes srvSlideInLeft { from { transform: translateX(-30%); } to { transform: translateX(0); } }
        @keyframes srvSlideInRight { from { transform: translateX(30%); } to { transform: translateX(0); } }
        .animate-srv-slide-out-left { animation: srvSlideOutLeft 300ms ease forwards; }
        .animate-srv-slide-out-right { animation: srvSlideOutRight 300ms ease forwards; }
        .animate-srv-slide-in-left { animation: srvSlideInLeft 300ms ease forwards; }
        .animate-srv-slide-in-right { animation: srvSlideInRight 300ms ease forwards; }
      `}</style>

      <section className="pb-16 max-w-7xl mx-auto px-4 md:px-0">
        <h2 className="font-satoshi text-[30px] md:text-[48px] font-black text-[#e22939] text-center leading-[36px] md:leading-[52px] mb-8 md:mb-10">
          {t("heading")}
        </h2>

        {/* ── Mobile: single card carousel ─────────────────────────────── */}
        <div
          className="md:hidden relative overflow-hidden"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) { if (diff > 0) mobileNext(); else mobilePrev(); }
          }}
        >
          <button onClick={mobilePrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center" aria-label={t("anterior")}>
            <FontAwesomeIcon icon={faChevronLeft} className="text-[#e42233] text-lg" />
          </button>

          <div className={`px-10 ${mobileSlideClass}`} key={mobileAnimating ? "exit" : mobileCurrent}>
            <Link href={services[mobileCurrent].href} className="bg-white rounded-[20px] px-6 py-8 flex flex-col items-center text-center">
              <FontAwesomeIcon icon={services[mobileCurrent].icon} className="text-[#e42233]" style={{ fontSize: "2.5rem" }} />
              <h3 className="font-satoshi mt-4 text-[20px] font-bold text-black leading-[26px]">
                {services[mobileCurrent].title}
              </h3>
              <p className="font-satoshi mt-3 text-[14px] font-medium text-black text-justify leading-[22px]">
                {services[mobileCurrent].description}
              </p>
            </Link>
          </div>

          <button onClick={mobileNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center" aria-label={t("siguiente")}>
            <FontAwesomeIcon icon={faChevronRight} className="text-[#e42233] text-lg" />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (i === mobileCurrent) return; mobileSlideTo(i, i > mobileCurrent ? "right" : "left"); }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === mobileCurrent ? "bg-[#e22939]" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop: 3-card sliding carousel ─────────────────────────── */}
        <div className="hidden md:block relative">
          <button onClick={() => slide("left")} className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
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
                <Link
                  key={s.key}
                  href={s.href}
                  data-card
                  className="bg-white rounded-[20px] group px-6 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                  style={{ flex: `0 0 calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})` }}
                >
                  <FontAwesomeIcon icon={s.icon} className="text-[#e42233] group-hover:text-[#4d4d4d]" style={{ fontSize: "3rem" }} />
                  <h3 className="font-satoshi mt-6 text-[24px] font-bold text-black leading-[30px] group-hover:text-[#e42233] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="font-satoshi mt-5 text-[15px] font-medium text-[#00000] text-justify tracking-[0px] leading-[24px] group-hover:text-[#4d4d4d] transition-colors duration-300">
                    {s.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <button onClick={() => slide("right")} className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 text-[#192437]" />
          </button>
        </div>
      </section>
    </>
  );
}

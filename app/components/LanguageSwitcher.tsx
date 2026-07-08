"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState, useRef, useEffect } from "react";

const LOCALES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function switchLocale(code: string) {
    router.replace(pathname, { locale: code });
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="font-gilmer flex items-center gap-1 text-[14px] font-bold text-black hover:text-[#e42433] transition-colors cursor-pointer px-2 py-1 rounded-[8px] border border-gray-200 hover:border-[#e42433]"
      >
        {locale.toUpperCase()}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <polyline points="2 3 5 7 8 3" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-[calc(100%+6px)] right-0 bg-white rounded-[12px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] min-w-[60px]">
          {LOCALES.filter((l) => l.code !== locale).map((l) => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className="block w-full px-4 py-3 text-[14px] font-bold text-black hover:text-[#e42433] hover:bg-gray-50 transition-colors text-center cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

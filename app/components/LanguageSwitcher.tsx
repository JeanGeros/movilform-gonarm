"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState, useRef, useEffect } from "react";

function FlagES() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0 }}>
      <rect width="22" height="16" fill="#c60b1e" />
      <rect y="4" width="22" height="8" fill="#ffc400" />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg width="22" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0 }}>
      <rect width="60" height="40" fill="#012169" />
      {/* white diagonals */}
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      {/* red diagonals clipped to quadrants */}
      <path d="M0,0 L60,40" stroke="#C8102E" strokeWidth="4.8" strokeDasharray="28.8 28.8" strokeDashoffset="0" />
      <path d="M60,0 L0,40" stroke="#C8102E" strokeWidth="4.8" strokeDasharray="28.8 28.8" strokeDashoffset="0" />
      {/* white cross */}
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
      {/* red cross */}
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7.2" />
    </svg>
  );
}

function FlagPT() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0 }}>
      {/* green background */}
      <rect width="22" height="16" fill="#009C3B" />
      {/* yellow diamond */}
      <polygon points="11,1.5 20.5,8 11,14.5 1.5,8" fill="#FFDF00" />
      {/* blue circle */}
      <circle cx="11" cy="8" r="3.6" fill="#002776" />
      {/* white stripe */}
      <path d="M7.5,8.6 Q11,7 14.5,8.6" stroke="#fff" strokeWidth="1.1" fill="none" />
    </svg>
  );
}

const LOCALES = [
  { code: "es", label: "Español",   Flag: FlagES },
  { code: "en", label: "English",   Flag: FlagEN },
  { code: "pt", label: "Português", Flag: FlagPT },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

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
        className="flex items-center gap-2 text-[14px] font-bold text-black hover:text-[#e42433] transition-colors cursor-pointer px-2 py-1 rounded-[8px] bg-white border border-gray-200 hover:border-[#e42433] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
      >
        <current.Flag />
        <span className="font-satoshi">{current.code.toUpperCase()}</span>
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="2 3 5 7 8 3" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-[calc(100%+6px)] right-0 bg-white rounded-[14px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.14)] min-w-[170px] py-1">
          {LOCALES.map(({ code, label, Flag }) => (
            <button
              key={code}
              onClick={() => switchLocale(code)}
              className={`flex items-center gap-3 w-full px-4 py-[10px] text-[14px] font-satoshi font-bold transition-colors cursor-pointer
                ${code === locale
                  ? "text-[#e42433] bg-[#fef0f1]"
                  : "text-black hover:text-[#e42433] hover:bg-gray-50"
                }`}
            >
              <Flag />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

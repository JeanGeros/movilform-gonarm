import type { MetadataRoute } from "next";

const BASE = "https://www.movilform.com";
const LOCALES = ["es", "en", "pt"] as const;

const PAGES = [
  { path: "/",                                                              priority: 1.0, freq: "weekly"  },
  { path: "/contacto",                                                      priority: 0.7, freq: "monthly" },
  { path: "/soporte",                                                       priority: 0.7, freq: "monthly" },
  { path: "/servicios/formularios-digitales",                               priority: 0.8, freq: "monthly" },
  { path: "/servicios/modulo-de-rutas",                                     priority: 0.8, freq: "monthly" },
  { path: "/servicios/modulo-de-tareas",                                    priority: 0.8, freq: "monthly" },
  { path: "/servicios/reportes-y-dashboards",                               priority: 0.8, freq: "monthly" },
  { path: "/servicios/integraciones",                                       priority: 0.8, freq: "monthly" },
  { path: "/servicios/portal-de-clientes",                                  priority: 0.8, freq: "monthly" },
  { path: "/casos-de-uso/mantenimientos-preventivos-y-correctivos",         priority: 0.7, freq: "monthly" },
  { path: "/casos-de-uso/empresa-de-gestion-de-residuos",                  priority: 0.7, freq: "monthly" },
  { path: "/casos-de-uso/empresa-de-telecomunicaciones",                    priority: 0.7, freq: "monthly" },
  { path: "/casos-de-uso/empresa-de-control-de-plagas",                    priority: 0.7, freq: "monthly" },
  { path: "/casos-de-uso/empresa-de-servicio-de-higiene",                  priority: 0.7, freq: "monthly" },
  { path: "/casos-de-uso/empresa-de-servicio-tecnico",                     priority: 0.7, freq: "monthly" },
] as const;

function localePath(locale: string, path: string): string {
  if (locale === "es") return `${BASE}${path}`;
  return `${BASE}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return PAGES.map(({ path, priority, freq }) => {
    const languages: Record<string, string> = {};
    for (const locale of LOCALES) {
      languages[locale] = localePath(locale, path);
    }
    languages["x-default"] = `${BASE}${path}`;

    return {
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority,
      alternates: { languages },
    };
  });
}

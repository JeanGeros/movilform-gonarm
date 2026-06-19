import type { MetadataRoute } from "next";

const BASE = "https://www.movilform.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "/",
    "/contacto",
    "/soporte",
    "/servicios/formularios-digitales",
    "/servicios/modulo-de-rutas",
    "/servicios/modulo-de-tareas",
    "/servicios/reportes-y-dashboards",
    "/servicios/integraciones",
    "/servicios/portal-de-clientes",
    "/casos-de-uso/mantenimientos-preventivos-y-correctivos",
    "/casos-de-uso/empresa-de-gestion-de-residuos",
    "/casos-de-uso/empresa-de-telecomunicaciones",
    "/casos-de-uso/empresa-de-control-de-plagas",
    "/casos-de-uso/empresa-de-servicio-de-higiene",
    "/casos-de-uso/empresa-de-servicio-tecnico",
  ];

  return staticPages.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/servicios") ? 0.8 : 0.7,
  }));
}

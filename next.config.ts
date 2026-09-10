import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // ponytail: rewrites/redirects estáticos en el CDN en vez del middleware de
  // next-intl → 0 invocaciones de compute (Active CPU) por pageview.
  // Añadir una línea por cada sección nueva de primer nivel.
  async rewrites() {
    return [
      { source: "/", destination: "/es" },
      { source: "/contacto", destination: "/es/contacto" },
      { source: "/soporte", destination: "/es/soporte" },
      { source: "/servicios/:path*", destination: "/es/servicios/:path*" },
      { source: "/casos-de-uso/:path*", destination: "/es/casos-de-uso/:path*" },
    ];
  },
  // Mantiene una sola URL canónica: /es/... → /... (lo que hacía el middleware).
  async redirects() {
    return [
      { source: "/es", destination: "/", permanent: false },
      { source: "/es/:path*", destination: "/:path*", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

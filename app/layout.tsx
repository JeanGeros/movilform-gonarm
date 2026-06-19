import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-var",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const siteUrl = "https://www.movilform.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MovilForm - Optimización de Tareas y Rutas",
  description:
    "MovilForm es la solución digital para gestionar operaciones en terreno. Planifica rutas, asigna tareas, captura datos con formularios digitales y optimiza procesos en tiempo real desde cualquier dispositivo.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Movilform",
    title: "MovilForm - Optimización de Tareas y Rutas",
    description:
      "MovilForm es la solución digital para gestionar operaciones en terreno. Planifica rutas, asigna tareas, captura datos con formularios digitales y optimiza procesos en tiempo real desde cualquier dispositivo.",
    images: [
      {
        url: "/movilform-OG.webp",
        width: 800,
        height: 800,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/movilform-favicon.webp", sizes: "32x32" },
      { url: "/movilform-favicon.webp", sizes: "192x192" },
    ],
    apple: "/movilform-favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${inter.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": `${siteUrl}/`,
                  url: `${siteUrl}/`,
                  name: "MovilForm - Optimización de Tareas y Rutas",
                  isPartOf: { "@id": `${siteUrl}/#website` },
                  primaryImageOfPage: { "@id": `${siteUrl}/#primaryimage` },
                  image: { "@id": `${siteUrl}/#primaryimage` },
                  thumbnailUrl: `${siteUrl}/movilform-OG.webp`,
                  description:
                    "MovilForm es la solución digital para gestionar operaciones en terreno. Planifica rutas, asigna tareas, captura datos con formularios digitales y optimiza procesos en tiempo real desde cualquier dispositivo.",
                  breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
                  inLanguage: "es",
                  potentialAction: [
                    { "@type": "ReadAction", target: [`${siteUrl}/`] },
                  ],
                },
                {
                  "@type": "ImageObject",
                  inLanguage: "es",
                  "@id": `${siteUrl}/#primaryimage`,
                  url: `${siteUrl}/movilform-OG.webp`,
                  contentUrl: `${siteUrl}/movilform-OG.webp`,
                  width: 800,
                  height: 800,
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${siteUrl}/#breadcrumb`,
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Portada" },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: `${siteUrl}/`,
                  name: "Movilform",
                  description:
                    "Movilform digitaliza y optimiza tareas en terreno: planificación de rutas, formularios, inventario y reportes automáticos.",
                  inLanguage: "es",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import "./globals.css";

// ponytail: not-found raíz (rutas sin locale). Autónomo: sin Navbar/Footer ni
// useTranslations, porque el layout raíz no monta el NextIntlClientProvider.
// El 404 con idioma vive en app/[locale]/not-found.tsx.
export default function NotFound() {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
        />
      </head>
      <body className="w-full bg-white min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center antialiased">
        <h1 className="font-satoshi text-[120px] md:text-[180px] font-black text-[#e42433] leading-none">
          404
        </h1>
        <h2 className="font-satoshi mt-4 text-[24px] md:text-[36px] font-bold text-[#192437] leading-[32px] md:leading-[44px]">
          Página no encontrada
        </h2>
        <p className="font-satoshi mt-4 text-[16px] md:text-[18px] text-[#3f4648] leading-[26px] max-w-[480px]">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <a
          href="/"
          className="font-satoshi mt-8 inline-flex items-center justify-center h-[50px] px-10 rounded-full bg-[#e42433] text-white text-[17px] font-bold hover:bg-[#c01f2d] transition-colors"
        >
          Volver al inicio
        </a>
      </body>
    </html>
  );
}

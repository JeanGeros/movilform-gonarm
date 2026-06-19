import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main className="w-full bg-white min-h-screen flex flex-col">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
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
      </div>

      <Footer />
    </main>
  );
}

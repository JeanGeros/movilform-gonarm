import { getTranslations } from "next-intl/server";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Link } from "@/i18n/navigation";

export default async function NotFoundLocale() {
  const t = await getTranslations("not-found");

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
          {t("heading")}
        </h2>
        <p className="font-satoshi mt-4 text-[16px] md:text-[18px] text-[#3f4648] leading-[26px] max-w-[480px]">
          {t("desc")}
        </p>
        <Link
          href="/"
          className="font-satoshi mt-8 inline-flex items-center justify-center h-[50px] px-10 rounded-full bg-[#e42433] text-white text-[17px] font-bold hover:bg-[#c01f2d] transition-colors"
        >
          {t("cta")}
        </Link>
      </div>

      <Footer />
    </main>
  );
}

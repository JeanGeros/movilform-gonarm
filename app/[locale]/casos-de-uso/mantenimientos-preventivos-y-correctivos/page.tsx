import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import UseCasesCarousel from "@/app/casos-de-uso/mantenimientos-preventivos-y-correctivos/UseCasesCarousel";

const IMG_HERO       = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/hero.webp";
const IMG_MODULO     = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/modulo-mantenimientos.webp";
const IMG_INVENTARIO = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/gestion-inventario.webp";
const IMG_ORDENES    = "/casos-de-uso/mantenimientos-preventivos-y-correctivos/ordenes-servicio.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "mantenimientos" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: buildAlternates(locale, "/casos-de-uso/mantenimientos-preventivos-y-correctivos"),
  };
}

export default async function MantenimientosPreventivosYCorrectivos({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("mantenimientos");

  return (
    <main className="w-full bg-white min-h-screen flex flex-col">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 pb-16 flex flex-col gap-6 max-w-7xl mx-auto">

        <section className="relative rounded-[20px] overflow-hidden h-[250px] md:h-[400px]">
          <Image src={IMG_HERO} alt={t("h1")} fill priority sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          <div className="absolute inset-0 bg-black/70 rounded-[20px]" />
          <div className="relative h-full flex items-center justify-center px-6">
            <h1 className="font-satoshi text-[26px] md:text-[38px] font-bold text-white text-center leading-[34px] md:leading-[48px]">
              {t("h1")}
            </h1>
          </div>
        </section>

        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-satoshi text-[28px] md:text-[38px] font-extrabold text-[#192437] leading-[34px] md:leading-[46px]">
                {t("moduloTitle1")}<br />{t("moduloTitle2")}
              </h2>
              <div className="font-satoshi mt-6 md:mt-8 text-[15px] md:text-[16px] text-[#232321] leading-[24px] md:leading-[26px] text-justify">
                <p>{t("moduloDesc")}</p>
              </div>
            </div>
            <div className="rounded-[10px] overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]">
              <Image src={IMG_MODULO} alt="Módulo de mantenimientos preventivos o correctivos" width={600} height={400} className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 rounded-[15px] overflow-hidden shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]">
              <Image src={IMG_INVENTARIO} alt="Gestión de inventario de artículos en MovilForm" width={600} height={400} className="w-full h-auto object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-satoshi text-[28px] md:text-[38px] font-extrabold text-[#192437] leading-[34px] md:leading-[46px]">
                {t("inventarioTitle")}
              </h2>
              <div className="font-satoshi mt-6 md:mt-8 text-[15px] md:text-[16px] text-[#232321] leading-[24px] md:leading-[26px] text-justify">
                <p>{t("inventarioDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-satoshi text-[28px] md:text-[38px] font-extrabold text-[#192437] leading-[34px] md:leading-[46px]">
                {t("ordenesTitle")}
              </h2>
              <div className="font-satoshi mt-6 md:mt-8 text-[15px] md:text-[16px] text-[#232321] leading-[24px] md:leading-[26px] text-justify">
                <p>{t("ordenesDesc")}</p>
              </div>
            </div>
            <div className="rounded-[10px] overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]">
              <Image src={IMG_ORDENES} alt="Administración de órdenes de servicio con MovilForm" width={600} height={400} className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

      </div>

      <section className="pb-16 max-w-7xl mx-auto px-4 md:px-0">
        <h2 className="font-satoshi text-[30px] md:text-[45px] font-black text-[#e22939] text-center leading-[36px] md:leading-[52px] mb-8 md:mb-10">
          {t("conoceTitle")}
        </h2>
        <UseCasesCarousel />
      </section>

      <Footer />
    </main>
  );
}

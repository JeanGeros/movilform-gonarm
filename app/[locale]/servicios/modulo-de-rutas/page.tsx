import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeatureSection from "@/app/components/FeatureSection";
import ServicesCarousel from "@/app/components/ServicesCarousel";

const IMG_GESTION  = "/servicios/modulo-de-rutas/gestion-rutas.webp";
const IMG_OPTIMIZA = "/servicios/modulo-de-rutas/optimiza-rutas.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "modulo-de-rutas" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: buildAlternates(locale, "/servicios/modulo-de-rutas"),
  };
}

export default async function ModuloDeRutas({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("modulo-de-rutas");

  return (
    <main className="w-full bg-[#feeaed] min-h-screen flex flex-col">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 mt-10 pb-16 flex flex-col gap-10 max-w-7xl mx-auto">

        <section className="mt-4 md:mt-10 bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-[35%_1fr] gap-8 md:gap-12 items-center">
            <h1 className="font-satoshi text-[36px] md:text-[60px] font-black text-[#e52533] leading-[42px] md:leading-[68px]">
              {t("h1Part1")}<br />{t("h1Part2")}
            </h1>
            <div className="font-satoshi text-[15px] md:text-[17.6px] text-justify text-[#231d1b] leading-[24px] md:leading-[28px] space-y-4">
              <p>{t("intro1")}</p>
              <p>{t("intro2")}</p>
              <p>{t("intro3")}</p>
              <p>{t("intro4")}</p>
            </div>
          </div>
        </section>

        <FeatureSection
          title={t("gestionTitle")}
          imageSrc={IMG_GESTION}
          imageAlt="Gestiona tus rutas en cualquier lugar con MovilForm"
        >
          <p>{t("gestionDesc")}</p>
        </FeatureSection>

        <FeatureSection
          title={<>{t("planificaTitle1")}<br />{t("planificaTitle2")}</>}
          imageSrc={IMG_OPTIMIZA}
          imageAlt="Módulo de Rutas - plataforma web MovilForm"
          imageShadow
        >
          <p>{t("planificaDesc")}</p>
        </FeatureSection>

      </div>

      <ServicesCarousel currentSlug="modulo-de-rutas" />
      <Footer cardBg="bg-white" />
    </main>
  );
}

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeatureSection from "@/app/components/FeatureSection";
import ServicesCarousel from "@/app/components/ServicesCarousel";

const IMG_VISUALIZA = "/servicios/modulo-de-tareas/visualiza-tareas.webp";
const IMG_DETALLE   = "/servicios/modulo-de-tareas/detalle-tarea.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "modulo-de-tareas" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: buildAlternates(locale, "/servicios/modulo-de-tareas"),
  };
}

export default async function ModuloDeTareas({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("modulo-de-tareas");

  return (
    <main className="w-full bg-[#feeaed] min-h-screen flex flex-col">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 mt-10 pb-16 flex flex-col gap-10 max-w-7xl mx-auto">

        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-8 md:gap-12 items-center">
            <h1 className="font-satoshi text-[36px] md:text-[60px] font-black text-[#e52533] leading-[42px] md:leading-[68px]">
              {t("h1Part1")}<br />{t("h1Part2")}
            </h1>
            <div className="font-satoshi text-[15px] md:text-[17px] text-[#231d1b] leading-[24px] md:leading-[28px] space-y-4">
              <p>{t("intro1")}</p>
              <p>{t("intro2")}</p>
              <p>{t("intro3")}</p>
              <p>{t("intro4")}</p>
            </div>
          </div>
        </section>

        <FeatureSection
          title={t("visualizaTitle")}
          imageSrc={IMG_VISUALIZA}
          imageAlt="Visualiza tus tareas programadas con MovilForm"
          imagePosition="left"
          imageShadow
        >
          <p>{t("visualizaDesc")}</p>
        </FeatureSection>

        <FeatureSection
          title={t("detalleTitle")}
          imageSrc={IMG_DETALLE}
          imageAlt="Detalle de tarea en la plataforma MovilForm"
          imageShadow
        >
          <p>{t("detalleDesc")}</p>
        </FeatureSection>

      </div>

      <ServicesCarousel currentSlug="modulo-de-tareas" />
      <Footer cardBg="bg-white" />
    </main>
  );
}

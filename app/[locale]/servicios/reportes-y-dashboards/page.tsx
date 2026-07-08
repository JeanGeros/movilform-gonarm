import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeatureSection from "@/app/components/FeatureSection";
import ServicesCarousel from "@/app/components/ServicesCarousel";
import ReportLightbox from "@/app/servicios/reportes-y-dashboards/ReportLightbox";

const IMG_REPORTES = "/servicios/reportes-y-dashboards/reportes-informes.webp";
const IMG_INFO     = "/servicios/reportes-y-dashboards/informacion-linea.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reportes-y-dashboards" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: buildAlternates(locale, "/servicios/reportes-y-dashboards"),
  };
}

export default async function ReportesYDashboards({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("reportes-y-dashboards");

  return (
    <main className="w-full bg-[#feeaed] min-h-screen">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 mt-10 pb-16 flex flex-col gap-10 max-w-7xl mx-auto">

        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-[42%_1fr] gap-8 md:gap-12 items-center">
            <h1 className="font-satoshi text-[36px] md:text-[60px] font-black text-[#e52533] leading-[42px] md:leading-[68px]">
              {t("h1Part1")}<br />{t("h1Part2")}
            </h1>
            <div className="font-satoshi text-[15px] md:text-[17px] text-[#231d1b] leading-[24px] md:leading-[28px] space-y-4">
              <p>{t("intro1")}</p>
              <p>{t("intro2")}</p>
              <p>{t("intro3")}</p>
            </div>
          </div>
        </section>

        <FeatureSection
          title={t("reportesTitle")}
          imageSrc={IMG_REPORTES}
          imageAlt="Dashboard de reportes en MovilForm"
          imagePosition="left"
          imageContain
        >
          <p>
            {t("reportesDesc")}{" "}
            <ReportLightbox />
          </p>
        </FeatureSection>

        <FeatureSection
          title={t("infoTitle")}
          imageSrc={IMG_INFO}
          imageAlt="Visualiza en línea la información de tu empresa y sus reportes"
          imageContain
        >
          <p>{t("infoDesc")}</p>
        </FeatureSection>

      </div>

      <ServicesCarousel currentSlug="reportes-y-dashboards" />
      <Footer cardBg="bg-white" />
    </main>
  );
}

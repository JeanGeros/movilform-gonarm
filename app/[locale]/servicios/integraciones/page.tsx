import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeatureSection from "@/app/components/FeatureSection";
import ServicesCarousel from "@/app/components/ServicesCarousel";

const IMG_ENWIS   = "/servicios/integraciones/integra-tus-sistemas.webp";
const IMG_GPSGATE = "/servicios/integraciones/monitoreo-flotas.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "integraciones" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: buildAlternates(locale, "/servicios/integraciones"),
  };
}

export default async function Integraciones({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("integraciones");

  return (
    <main className="w-full bg-[#feeaed] min-h-screen flex flex-col">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 mt-10 pb-16 flex flex-col gap-10 max-w-7xl mx-auto">

        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-[42%_1fr] gap-8 md:gap-12 items-center">
            <h1 className="font-satoshi text-[36px] md:text-[60px] font-black text-[#e52533] leading-[42px] md:leading-[68px]">
              {t("h1")}
            </h1>
            <div className="font-satoshi text-[15px] md:text-[17px] text-justify text-[#231d1b] leading-[24px] md:leading-[25px] space-y-4">
              <p>{t("intro1")}</p>
              <p>{t("intro2")}</p>
            </div>
          </div>
        </section>

        <FeatureSection
          title={<>{t("enwisTitle1")}<br />{t("enwisTitle2")}</>}
          imageSrc={IMG_ENWIS}
          imageAlt="Integración de MovilForm con Business Central y ENWIS"
          imageShadow
        >
          <p>{t("enwisDesc1")}</p>
          <p>{t("enwisDesc2")}</p>
          <p>{t("enwisDesc3")}</p>
        </FeatureSection>

        <FeatureSection
          title={t("gpsTitle")}
          imageSrc={IMG_GPSGATE}
          imageAlt="Integración de MovilForm con GpsGate para gestión de flotas"
          imageShadow
        >
          <p>{t("gpsDesc1")}</p>
          <p>{t("gpsDesc2")}</p>
        </FeatureSection>

      </div>

      <ServicesCarousel currentSlug="integraciones" />
      <Footer cardBg="bg-white" />
    </main>
  );
}

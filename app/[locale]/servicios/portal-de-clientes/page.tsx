import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ImageCarousel from "@/app/components/ImageCarousel";
import SlideIn from "@/app/components/SlideIn";
import ServicesCarousel from "@/app/components/ServicesCarousel";

const PORTAL_IMAGES = [
  "/servicios/portal-de-clientes/portal-clientes-1.webp",
  "/servicios/portal-de-clientes/portal-clientes-2.webp",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portal-de-clientes" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: buildAlternates(locale, "/servicios/portal-de-clientes"),
  };
}

export default async function PortalDeClientes({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("portal-de-clientes");

  return (
    <main className="w-full bg-[#feeaed] min-h-screen flex flex-col">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 mt-10 pb-16 flex flex-col gap-10 max-w-7xl mx-auto">

        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-[42%_1fr] gap-8 md:gap-12 items-center">
            <h1 className="font-satoshi text-[36px] md:text-[62px] font-black text-[#e52533] leading-[42px] md:leading-[70px]">
              {t("h1Part1")}<br />{t("h1Part2")}
            </h1>
            <div className="font-satoshi text-[15px] md:text-[17px] text-[#231d1b] leading-[24px] md:leading-[28px] space-y-4">
              <p>{t("intro1")}</p>
              <p>{t("intro2")}</p>
            </div>
          </div>
        </section>

        <SlideIn>
          <section className="bg-white rounded-[20px] px-6 py-8 md:px-[50px] md:py-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-[11fr_9fr] gap-8 md:gap-12 items-center">
              <div>
                <h2 className="font-satoshi text-[28px] text-center md:text-start md:text-[40px] font-extrabold text-[#192437] leading-[34px] md:leading-[46px]">
                  {t("portalesTitle1")}<br />{t("portalesTitle2")}
                </h2>
                <p className="font-satoshi text-justify mt-5 md:mt-8 text-[15px] md:text-[17.6px] text-[#232321] leading-[24px] md:leading-[26px]">
                  {t("portalesDesc")}
                </p>
              </div>
              <ImageCarousel images={PORTAL_IMAGES} contain />
            </div>
          </section>
        </SlideIn>

      </div>

      <ServicesCarousel currentSlug="portal-de-clientes" />
      <Footer cardBg="bg-white" />
    </main>
  );
}

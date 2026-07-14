import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BenefitsCarousel from "@/app/casos-de-uso/BenefitsCarousel";
import FeaturesCardCarousel from "@/app/casos-de-uso/FeaturesCardCarousel";
import { faTasks, faMapMarkedAlt, faRoute, faTabletAlt } from "@fortawesome/free-solid-svg-icons";

const IMG_HERO          = "/casos-de-uso/empresa-de-servicio-de-higiene/hero.webp";
const IMG_EFICIENCIA    = "/casos-de-uso/empresa-de-servicio-de-higiene/eficiencia.webp";
const IMG_ACCESIBILIDAD = "/casos-de-uso/empresa-de-servicio-de-higiene/accesibilidad.webp";
const IMG_PRODUCTIVIDAD = "/casos-de-uso/empresa-de-servicio-de-higiene/productividad.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicio-de-higiene" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: buildAlternates(locale, "/casos-de-uso/empresa-de-servicio-de-higiene"),
  };
}

export default async function EmpresaDeServicioDeHigiene({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("servicio-de-higiene");
  const tc = await getTranslations("common");

  return (
    <main className="w-full bg-white min-h-screen flex flex-col">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 pb-16 flex flex-col gap-6 max-w-7xl mx-auto">

        <section className="relative rounded-[20px] overflow-hidden h-[250px] md:h-[400px]">
          <Image
            src={IMG_HERO}
            alt={t("h1")}
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover scale-100"
            style={{ objectPosition: "center calc(80%)" }}
          />
          <div className="absolute inset-0 bg-black/70 rounded-[20px]" />
          <div className="relative h-full flex items-center justify-center px-6">
            <h1 className="font-satoshi text-[26px] md:text-[38px] font-bold text-white text-center leading-[34px] md:leading-[48px]">
              {t("h1")}
            </h1>
          </div>
        </section>

        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-4 items-center">
              <div className="w-[9px] hidden md:block flex-shrink-0 self-stretch rounded-full bg-[#feeaed]" />
              <div className="font-satoshi text-[16px] text-justify text-[#231d1b] leading-[24px] md:leading-[26px] space-y-4">
                <p>{t("introLeft1")}</p>
                <p>{t("introLeft2")}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-[9px] hidden md:block flex-shrink-0 self-stretch rounded-full bg-[#feeaed]" />
              <div className="font-satoshi text-[16px] text-justify text-[#231d1b] leading-[24px] md:leading-[26px] space-y-4">
                <p>{t("introRight1")}</p>
                <p>{t("introRight2")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#feeaed] rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px] my-4 md:my-10 text-center">
          <h2 className="font-satoshi text-[28px] md:text-[40px] font-extrabold text-[#e22939] leading-[34px] md:leading-[40px]">
            {t("centerTitle")}
          </h2>
          <p className="font-satoshi mt-4 md:mt-6 text-[15px] md:text-[16px] text-[#232321] leading-[24px] md:leading-[26px] max-w-[500px] mx-auto">
            {t("centerDesc")}
          </p>
        </section>

        <div>
          <h2 className="font-satoshi text-[24px] md:text-[32px] font-extrabold text-[#e22939] text-center leading-[30px] md:leading-[40px] mb-6">
            {tc("benefitsHeading")}
          </h2>
          <BenefitsCarousel
            benefits={[
              { img: IMG_EFICIENCIA, alt: tc("eficienciaTitle"), title: tc("eficienciaTitle"), desc: tc("eficienciaDesc") },
              { img: IMG_ACCESIBILIDAD, alt: tc("accesibilidadTitle"), title: tc("accesibilidadTitle"), desc: tc("accesibilidadDesc") },
              { img: IMG_PRODUCTIVIDAD, alt: tc("productividadTitle"), title: tc("productividadTitle"), desc: tc("productividadDesc") },
            ]}
          />
        </div>

        <section className="bg-[#feeaed] rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px] text-center">
          <p className="font-satoshi text-[22px] md:text-[32px] font-bold text-[#192437] leading-[30px] md:leading-[36px] max-w-[780px] mx-auto">
            {tc("ctaBanner").split("{highlight}")[0]}
            <span className="text-[#e22939]">{tc("ctaHighlight")}</span>
            {tc("ctaBanner").split("{highlight}")[1]}
          </p>
        </section>

        <FeaturesCardCarousel
          features={[
            { icon: faTasks, title: tc("asignaTareasTitle"), desc: tc("asignaTareasDesc") },
            { icon: faMapMarkedAlt, title: tc("planificaRutasTitle"), desc: tc("planificaRutasDesc") },
            { icon: faRoute, title: tc("optimizaRutasTitle"), desc: tc("optimizaRutasDesc") },
            { icon: faTabletAlt, title: tc("controlaRutasTitle"), desc: tc("controlaRutasDesc") },
          ]}
        />

      </div>

      <Footer />
    </main>
  );
}

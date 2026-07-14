import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeatureSection from "@/app/components/FeatureSection";
import ServicesCarousel from "@/app/components/ServicesCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faFileSignature, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const IMG_LAPTOP = "/servicios/formularios-digitales/laptop.webp";
const IMG_TECH   = "/servicios/formularios-digitales/technician.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "formularios-digitales" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: buildAlternates(locale, "/servicios/formularios-digitales"),
  };
}

function StepItem({ icon, title, bullets }: { icon: React.ReactNode; title: string; bullets: string[] }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-6 border-0">
      <div className="flex-shrink-0 w-[70px] h-[70px] md:w-[110px] md:h-[110px] mt-2 rounded-full bg-[#f6c5cd] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-satoshi text-[24px] md:text-[32px] font-bold text-black leading-[32px] md:leading-[42px]">{title}</h3>
        <ul className="mt-2 space-y-1">
          {bullets.map((b) => (
            <li key={b} className="font-satoshi text-[14px] md:text-[16px] font-medium text-black leading-[22px] md:leading-[27px]">{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default async function FormulariosDigitales({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("formularios-digitales");

  return (
    <main className="w-full bg-[#feeaed] min-h-screen flex flex-col">
      <div className="relative z-50 h-[88px]">
        <Navbar />
      </div>

      <div className="px-4 md:px-0 mt-10 pb-16 flex flex-col gap-10 max-w-7xl mx-auto">

        {/* ── 1. HEADER ───────────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-6 py-10 md:px-[70px] md:py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-[42%_1fr] gap-8 md:gap-12 items-center">
            <h1 className="font-satoshi text-[36px] md:text-[64px] font-black text-[#e52533] leading-[42px] md:leading-[68px]">
              {t("h1Part1")}<br />{t("h1Part2")}
            </h1>
            <div className="font-satoshi text-[15px] md:text-[17px] text-[#231d1b] leading-[24px] md:leading-[28px] space-y-4">
              <p>{t("intro1")}</p>
              <p>{t("intro2")}</p>
              <p>{t("intro3")}</p>
            </div>
          </div>
        </section>

        {/* ── 2. EFFICIENCY ───────────────────────────────────────────────── */}
        <FeatureSection
          title={<>{t("effTitle1")}<br />{t("effTitle2")}</>}
          imageSrc={IMG_LAPTOP}
          imageAlt="Plataforma MovilForm en laptop y móvil"
        >
          <p>{t("effDesc1")}</p>
          <p>{t("effDesc2")}</p>
        </FeatureSection>

        {/* ── 3. FUNCTIONALITIES ──────────────────────────────────────────── */}
        <FeatureSection
          title={<>{t("funcTitle1")}<br />{t("funcTitle2")}</>}
          imageSrc={IMG_TECH}
          imageAlt="Técnico en terreno usando MovilForm"
          imageShadow
        >
          <ul className="space-y-5">
            <li>{t("func1")}</li>
            <li>{t("func2")}</li>
            <li>{t("func3")}</li>
            <li>{t("func4")}</li>
          </ul>
        </FeatureSection>

        {/* ── 4. HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="bg-white rounded-[20px] px-6 py-8 md:px-[70px] md:py-[50px]">
          <h2 className="font-satoshi text-[28px] md:text-[38px] font-extrabold text-[#192437] leading-[34px] md:leading-[46px]">
            {t("howTitle")}
          </h2>
          <div className="mt-8 divide-y divide-gray-100">
            <StepItem
              icon={<FontAwesomeIcon icon={faPlusCircle} className="text-[2rem] md:text-[4rem] text-white" />}
              title={t("step1Title")}
              bullets={[t("step1b1"), t("step1b2"), t("step1b3"), t("step1b4")]}
            />
            <StepItem
              icon={<FontAwesomeIcon icon={faFileSignature} className="text-[2rem] md:text-[4rem] text-white" />}
              title={t("step2Title")}
              bullets={[t("step2b1"), t("step2b2"), t("step2b3"), t("step2b4")]}
            />
            <StepItem
              icon={<FontAwesomeIcon icon={faFileAlt} className="text-[2rem] md:text-[4rem] text-white" />}
              title={t("step3Title")}
              bullets={[t("step3b1"), t("step3b2"), t("step3b3"), t("step3b4"), t("step3b5")]}
            />
          </div>
        </section>
      </div>

      <ServicesCarousel currentSlug="formularios-digitales" />
      <Footer cardBg="bg-white" />
    </main>
  );
}

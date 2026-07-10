import type { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faRoute,
  faChartBar,
  faProjectDiagram,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturesCarousel from "../components/FeaturesCarousel";
import ClientsCarousel from "../components/ClientsCarousel";
import SlideIn from "../components/SlideIn";
import HeroCarousel from "../components/HeroCarousel";
import { Link } from "@/i18n/navigation";

const IMG_TEAM        = "/inicio/team.jpg";
const IMG_TASKS       = "/inicio/tasks.jpg";
const IMG_USE_CASE_BG = "/inicio/usecase-bg.jpg";
const IMG_SERVICES    = "/inicio/services.png";
const IMG_WASTE       = "/inicio/waste.png";
const IMG_TELECOM     = "/inicio/telecom.png";
const IMG_PEST        = "/inicio/pest.png";
const IMG_INTEGRATION = "/inicio/integration.jpg";

function SolutionCard({ href, icon, title, description }: { href: React.ComponentProps<typeof Link>["href"]; icon: React.ReactNode; title: string; description: string }) {
  return (
    <Link href={href} className="group bg-[#feeaed] rounded-[20px] hover:bg-[#ebebeb] p-[30px] flex flex-col">
      <div className="flex items-center justify-center">
        <div className="w-20 h-20 bg-white rounded-[40px] flex items-center justify-center">{icon}</div>
      </div>
      <h3 className="font-satoshi mt-7 text-[24px] text-start font-bold text-black group-hover:text-[#e42233] leading-[31px] transition-colors duration-300">
        {title}
      </h3>
      <p className="font-satoshi mt-3 text-[16px] font-medium text-[#3f4648] group-hover:text-[#192437] text-justify leading-[26px] transition-colors duration-300">
        {description}
      </p>
    </Link>
  );
}

function UseCaseCard({ href, img, title, description }: { href: React.ComponentProps<typeof Link>["href"]; img: string; title: string; description: string }) {
  return (
    <Link href={href} className="group relative block bg-[#f9dfe2] rounded-[12px] pt-[80px] pb-8 px-8">
      <div className="absolute -top-[55px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] rounded-full bg-[#f9dfe2] flex items-center justify-center overflow-hidden">
        <Image src={img} alt={title} width={80} height={80} className="w-2/3 h-2/3 object-contain" />
      </div>
      <h3 className="font-satoshi text-[24px] font-black text-[#313131] group-hover:text-[#e42233] leading-[26px] transition-colors duration-300">
        {title}
      </h3>
      <p className="font-satoshi mt-3 text-[16px] text-[#3f4648] leading-[27px] text-justify transition-colors duration-300">
        {description}
      </p>
    </Link>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: buildAlternates(locale, "/"),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <main className="w-full bg-white min-h-screen flex flex-col">
      <Navbar />
      <HeroCarousel />

      {/* ── 2. VALUE PROPOSITION ─────────────────────────────────────────── */}
      <SlideIn>
        <section className="max-w-7xl mx-auto px-6 md:px-[70px] pt-16 md:pt-28 pb-12 md:pb-16">
          <h2 className="font-satoshi text-[30px] md:text-[42px] font-black leading-[38px] md:leading-[49px] text-center max-w-[760px] mx-auto">
            <span className="text-[#192437]">{t("valuePre")}</span>
            <span className="text-[#e42433]">{t("valueHighlight1")}</span>
            <br />
            <span className="text-[#192437]">{t("valueMid")}</span>
            <span className="text-[#e42433]">{t("valueHighlight2")}</span>
          </h2>
          <p className="font-satoshi mt-8 md:mt-10 text-[16px] md:text-[17.6px] leading-[24px] md:leading-[25px] text-black text-justify max-w-[960px] mx-auto">
            {t("valueDesc")}
          </p>
        </section>
      </SlideIn>

      {/* ── 3. IMAGES ─────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-[140px] pb-16 md:pb-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-26">
          <SlideIn direction="left" className="hidden md:block rounded-[15px] overflow-hidden h-[350px]">
            <Image src={IMG_TEAM} alt="Equipo técnico utilizando MovilForm" width={600} height={360} className="w-full h-full object-cover" style={{ width: "100%", height: "100%" }} />
          </SlideIn>
          <SlideIn direction="right" delay={200} className="rounded-[15px] overflow-hidden h-[240px] md:h-[350px]">
            <Image src={IMG_TASKS} alt="Vista de tareas asignadas a diferentes técnicos" width={600} height={360} className="w-full h-full object-cover" />
          </SlideIn>
        </div>
      </section>

      {/* ── 4. FEATURES ───────────────────────────────────────────────────── */}
      <FeaturesCarousel />

      {/* ── 5. CLIENTS ────────────────────────────────────────────────────── */}
      <ClientsCarousel />

      {/* ── 6. SOLUTIONS ──────────────────────────────────────────────────── */}
      <SlideIn>
        <section className="max-w-7xl mx-auto py-14 md:py-20">
          <h2 className="font-satoshi text-[28px] md:text-[40px] font-extrabold text-black text-center leading-[34px] md:leading-[40px]">
            {t("solutionsTitle")}
          </h2>
          <p className="font-satoshi mt-4 md:mt-5 text-[16px] md:text-[19.2px] text-[#3f4648] text-center leading-[26px] md:leading-[32px]">
            {t("solutionsDesc")}
          </p>
          <div className="mt-8 md:mt-10 grid px-5 md:px-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            <SolutionCard href="/servicios/formularios-digitales" icon={<FontAwesomeIcon icon={faMobileAlt} className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />} title={t("formsTitle")} description={t("formsDesc")} />
            <SolutionCard href="/servicios/modulo-de-rutas" icon={<FontAwesomeIcon icon={faRoute} className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />} title={t("routesTitle")} description={t("routesDesc")} />
            <SolutionCard href="/servicios/modulo-de-tareas" icon={<FontAwesomeIcon icon={faFileAlt} className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />} title={t("tasksTitle")} description={t("tasksDesc")} />
            <SolutionCard href="/servicios/reportes-y-dashboards" icon={<FontAwesomeIcon icon={faChartBar} className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />} title={t("reportsTitle")} description={t("reportsDesc")} />
            <SolutionCard href="/servicios/integraciones" icon={<FontAwesomeIcon icon={faProjectDiagram} className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />} title={t("integrationsTitle")} description={t("integrationsDesc")} />
            <SolutionCard href="/servicios/portal-de-clientes" icon={<FontAwesomeIcon icon={faUserCircle} className="text-[#4d4d4d] group-hover:text-[#e42233] transition-colors duration-300" style={{ fontSize: "2.5rem" }} />} title={t("portalTitle")} description={t("portalDesc")} />
          </div>
        </section>
      </SlideIn>

      {/* ── 7. USE CASES ──────────────────────────────────────────────────── */}
      <SlideIn>
        <section className="max-w-7xl mx-auto mt-10 md:mt-0 pb-14 md:pb-20">
          <p className="font-satoshi text-[40px] md:text-[28px] md:text-[40px] font-extrabold text-[#e42433] text-center leading-[34px] md:leading-[40px]">
            {t("useCasesLabel")}
          </p>
          <h2 className="font-satoshi mt-6 md:mt-10 text-[24px] md:text-[40px] font-bold text-black text-center leading-[25px] md:leading-[40px]">
            {t("useCasesTitle")}
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[390px_1fr] gap-6 gap-y-10">
            {/* Dark left panel */}
            <div className="relative hidden md:block rounded-[12px] overflow-hidden lg:row-span-2 min-h-[300px] lg:min-h-[706px]">
              <Image src={IMG_USE_CASE_BG} alt="" fill sizes="390px" className="object-cover" />
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center py-12 lg:pb-20 px-8">
                <h3 className="font-satoshi text-white text-[26px] lg:text-[32px] font-bold text-center leading-[32px]">
                  {t("useCasesAuto").split("\n").map((line, i) => (
                    <span key={i}>{line}{i < 4 && <br />}</span>
                  ))}
                </h3>
                <Link href="/contacto" className="font-satoshi mt-8 flex items-center justify-center h-[40px] px-10 rounded-[14px] bg-[#1d1d1b] text-white text-[16px] hover:bg-[#333] transition-colors">
                  {t("useCasesClick")}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 px-5 md:px-0 sm:grid-cols-2 gap-25 md:gap-6 mt-18 md:mt-0 lg:mt-14">
              <UseCaseCard href="/casos-de-uso/empresa-de-servicio-tecnico" img={IMG_SERVICES} title={t("tecnicosTitle")} description={t("tecnicosDesc")} />
              <UseCaseCard href="/casos-de-uso/empresa-de-gestion-de-residuos" img={IMG_WASTE} title={t("residuosTitle")} description={t("residuosDesc")} />
            </div>
            <div className="grid grid-cols-1 px-5 md:px-0 sm:grid-cols-2 gap-25 md:gap-6 mt-18 lg:mt-14">
              <UseCaseCard href="/casos-de-uso/empresa-de-telecomunicaciones" img={IMG_TELECOM} title={t("telecomTitle")} description={t("telecomDesc")} />
              <UseCaseCard href="/casos-de-uso/empresa-de-control-de-plagas" img={IMG_PEST} title={t("plagasTitle")} description={t("plagasDesc")} />
            </div>
          </div>
        </section>
      </SlideIn>

      {/* ── 8. INTEGRATION ────────────────────────────────────────────────── */}
      <SlideIn>
        <section className="mx-4 md:mx-auto max-w-7xl mb-12 md:mb-16 p-10 md:p-6 md:p-15 rounded-[20px] bg-[#1d1d1b] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 md:w-[90%] mx-auto">
            <div className="p-0 md:p-3">
              <div className="w-full h-[220px] md:h-full rounded-[15px] overflow-hidden">
                <Image src={IMG_INTEGRATION} alt="Integración con MovilForm" width={700} height={380} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="font-satoshi flex flex-col justify-center text-white">
              <h2 className="font-satoshi text-[26px] md:text-[32px] font-black text-center leading-[32px]">
                {t("integrationTitle")}
              </h2>
              <p className="mt-6 md:mt-8 text-[16px] md:text-[19px] leading-[26px] md:leading-[28px] text-justify">
                {t("integrationDesc1")}
              </p>
              <p className="mt-4 md:mt-6 text-[15px] md:text-[17px] leading-[22px] text-justify">
                {t("integrationDesc2")}
              </p>
              <div className="mt-8 md:mt-10 flex justify-center">
                <Link href="/contacto" className="inline-flex items-center justify-center h-[46px] md:h-[49px] px-10 md:px-12 rounded-full bg-[#e22939] text-white text-[16px] md:text-[18px] font-black hover:bg-[#c01f2d] transition-colors">
                  {t("integrationCta")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SlideIn>

      <Footer />
    </main>
  );
}

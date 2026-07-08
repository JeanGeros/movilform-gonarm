import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "soporte" });
  return {
    title: `${t("title")} - Movilform`,
    description: t("metaDesc"),
    alternates: buildAlternates(locale, "/soporte"),
  };
}

export default async function SoporteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <>{children}</>;
}

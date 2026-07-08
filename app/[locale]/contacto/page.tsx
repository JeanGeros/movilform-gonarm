import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo";
import ContactoClient from "./ContactoClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contacto" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: buildAlternates(locale, "/contacto"),
  };
}

export default async function Contacto({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactoClient />;
}

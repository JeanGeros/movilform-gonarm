import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono, Montserrat, Inter, Nunito_Sans } from "next/font/google";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/i18n/seo";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-montserrat-var", subsets: ["latin"], weight: ["400","500","600","700","900"] });
const inter = Inter({ variable: "--font-inter-var", subsets: ["latin"], weight: ["400","500","700","800","900"] });
const nunitoSans = Nunito_Sans({ variable: "--font-nunito-var", subsets: ["latin"], weight: ["400","600","700"] });

const siteUrl = "https://www.movilform.com";

const OG_LOCALE: Record<string, string> = {
  es: "es_ES",
  en: "en_US",
  pt: "pt_BR",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(siteUrl),
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale] ?? "es_ES",
      siteName: "Movilform",
      images: [{ url: "/movilform-OG.webp", width: 800, height: 800, type: "image/webp" }],
    },
    twitter: { card: "summary_large_image" },
    icons: {
      icon: [{ url: "/movilform-favicon.webp", sizes: "32x32" }, { url: "/movilform-favicon.webp", sizes: "192x192" }],
      apple: "/movilform-favicon.webp",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const [messages, th] = await Promise.all([
    getMessages(),
    getTranslations({ locale, namespace: "home" }),
  ]);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${inter.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: `${siteUrl}/`,
                  name: "Movilform",
                  description: th("metaDesc"),
                  inLanguage: locale,
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

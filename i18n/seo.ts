import { routing } from './routing';

const BASE = 'https://www.movilform.com';

export function urlFor(locale: string, path: string): string {
  return locale === routing.defaultLocale
    ? `${BASE}${path}`
    : `${BASE}/${locale}${path}`;
}

export function buildAlternates(locale: string, path: string) {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = urlFor(l, path);
  }
  return {
    canonical: urlFor(locale, path),
    languages: { ...languages, 'x-default': `${BASE}${path}` },
  };
}

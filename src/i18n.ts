import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'zh', 'ja'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const importData =
    locale == 'ja' || locale == 'zh'
      ? import(`../messages/${locale}.json`)
      : import(`../messages/en.json`);

  return {
    messages: (await importData).default,
  };
});

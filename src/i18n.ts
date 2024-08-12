import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const importData =
    locale == 'ja' || locale == 'zh'
      ? import(`../messages/${locale}.json`)
      : import(`../messages/en.json`);

  return {
    messages: (await importData).default,
  };
});

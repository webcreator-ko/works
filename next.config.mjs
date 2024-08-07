import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evgvu9mkg9k.exactdn.com',
      },
    ],
  },
  // i18n: {
  //   locales: ['en', 'ja', 'zh'],
  //   defaultLocale: 'en',
  // },
};

export default withNextIntl(nextConfig);

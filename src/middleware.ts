import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ja', 'zh'],

  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(en|ja|zh)/:path*'],
};

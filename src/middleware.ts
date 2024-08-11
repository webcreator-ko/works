import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['en', 'ja', 'zh'],
  defaultLocale: 'en',
});

export function middleware(request: NextRequest) {
  const geo = request.geo;
  console.log('geo', geo);
  let locale = 'en';

  if (geo?.country === 'JP') {
    locale = 'ja';
  } else if (geo?.country === 'CN') {
    locale = 'zh';
  }

  const pathname = request.nextUrl.pathname;

  // "/" へのアクセス時にロケールに基づいてリダイレクト
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // それ以外は intlMiddleware を適用
  return intlMiddleware(request) || NextResponse.next();
}

export const config = {
  matcher: ['/', '/(en|ja|zh)/:path*'],
};

import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['en', 'ja', 'zh'],
  defaultLocale: 'en',
});

export function middleware(request: NextRequest) {
  const geo = request.geo;
  let expectedLocale = 'en';

  if (geo?.country === 'JP') {
    expectedLocale = 'ja';
  } else if (geo?.country === 'CN') {
    expectedLocale = 'zh';
  }

  const { pathname } = request.nextUrl;
  // const currentLocale = pathname.split('/')[1];

  // 現在のロケールと期待されるロケールが一致しない場合にリダイレクト
  // if (currentLocale !== expectedLocale) {
  //   return NextResponse.redirect(new URL(`/${expectedLocale}`, request.url));
  // }

  // "/" へのアクセス時にロケールに基づいてリダイレクト
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${expectedLocale}`, request.url));
  }

  return intlMiddleware(request) || NextResponse.next();
}

export const config = {
  matcher: ['/', '/(en|ja|zh)/:path*'],
};

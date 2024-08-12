import '@/app/global.scss';
import '@/app/tailwind.css';
import { Pacifico } from 'next/font/google';
import Head from 'next/head';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/pages/Header';
import Navigation from '@/components/pages/Navigation';
import { Providers } from './providers';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | WEBCREATOR KO',
    default: 'WEBCREATOR KO',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  // openGraph: {
  //   url: '/',
  //   images: '/images/ogp.png',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  // },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

const pacifico = Pacifico({
  weight: '400',
  variable: '--font-pacifico',
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = await getTranslations('Config');

  return (
    <html lang={t('lang')} className={`${pacifico.variable}`}>
      <Head>
        <meta http-equiv="Content-Language" content="ja, zh, en" />
      </Head>
      <body>
        <Header />
        <Navigation />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

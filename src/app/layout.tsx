import '@/app/global.scss';
import '@/app/tailwind.css';
import { Pacifico } from 'next/font/google';
import Header from '@/components/pages/Header';
import Navigation from '@/components/pages/Navigation';
import { Providers } from './providers';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | WEBCREATOR KO',
    default: 'WEBCREATOR KO',
  },
  description:
    'WEBCREATOR KO  is a site where he shares his blog and portfolio(future), and is currently open to work opportunities through inquiries!',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  openGraph: {
    url: '/',
    images: '/images/ogp.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
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

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang} className={`${pacifico.variable}`}>
      <body>
        <Header />
        <Navigation />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

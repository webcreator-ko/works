import '@/app/global.scss';
import '@/app/tailwind.css';
import { Pacifico } from 'next/font/google';
import Header from '@/components/pages/header';
import Navigation from '@/components/pages/navigation';
import { Providers } from './providers';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | WEBCREATOR KO',
    default: 'WEBCREATOR KO',
  },
  description:
    'KOTARO from WEBCREATOR is a site where he posts his blog and portfolio, and is currently seeking work opportunities through inquiries!',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${pacifico.variable}`}>
      <body>
        <Header />
        <Navigation />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

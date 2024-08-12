import '@/app/global.scss';
import '@/app/tailwind.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

import { ReactNode } from 'react';
import { Pacifico } from 'next/font/google';
import Head from 'next/head';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import Header from '@/components/pages/Header';
import Navigation from '@/components/pages/Navigation';
import { Providers } from '../providers';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}) {
  let description =
    "At WEBCREATOR KO, I share my blog and (soon) portfolio. I'm currently seeking Web development work using React. Feel free to get in touch!";

  if (params.lang === 'ja') {
    description =
      'WEBCREATOR KOでは、ブログやポートフォリオ（今後公開予定）を掲載しており、Reactを使用したWeb開発の仕事を募集しています。お問い合わせをお待ちしています。';
  } else if (params.lang === 'zh') {
    description =
      '在WEBCREATOR KO网站上，我分享了博客，并将很快展示我的作品集。目前，我正在寻找使用React进行的Web开发工作。欢迎通过联系来洽谈合作！';
  }

  return {
    description,
  };
}

type Props = {
  children: ReactNode;
  params: { lang: string };
};

const langs = ['en', 'ja', 'zh'];

// next-intl 不具合対策用
// https://github.com/amannn/next-intl/issues/521
export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

const pacifico = Pacifico({
  weight: '400',
  variable: '--font-pacifico',
  subsets: ['latin'],
});

export default async function Layout({ children, params: { lang } }: Props) {
  unstable_setRequestLocale(lang);

  const messages = await getMessages();

  return (
    <html lang={lang} className={`${pacifico.variable}`}>
      <Head>
        <meta http-equiv="Content-Language" content="ja, zh, en" />
      </Head>
      <body>
        <Header />
        <Navigation />
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

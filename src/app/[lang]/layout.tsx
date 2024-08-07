import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  children: ReactNode;
  params: { lang: string };
};

const langs = ['en', 'ja', 'zh'];

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export default async function Layout({ children, params: { lang } }: Props) {
  unstable_setRequestLocale(lang);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

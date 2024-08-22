import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import Langs from '@/components/pages/Langs';

type Props = {
  children: ReactNode;
};

export async function generateMetadata() {
  const t = await getTranslations('Contact');

  return {
    title: t('title'),
  };
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Langs />
      {children}
    </>
  );
}

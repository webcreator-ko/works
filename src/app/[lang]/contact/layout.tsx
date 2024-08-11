import { ReactNode } from 'react';
import { Metadata } from 'next';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'お問い合わせ',
};

export default function Layout({ children }: Props) {
  return children;
}

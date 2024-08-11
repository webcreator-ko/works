import { decode } from 'html-entities';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import blogStyles from '@/app/[lang]/(blog)/blog.module.scss';
import Articles from '@/components/pages/blog/Articles';
import ClientArticles from '@/components/pages/blog/ClientArticles';

import SideBar from '@/components/pages/blog/SideBar';

export async function generateMetadata({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { p } = searchParams;

  if (!p) notFound();

  const meta = {
    title: decode(p as string),
  };

  return {
    title: meta.title,
  };
}

export default function Page({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { p } = searchParams;
  const t = useTranslations('Config');
  const categoryId = Number(t('categoryId'));

  if (!p) notFound();

  return (
    <main className={blogStyles.wrap}>
      <div className={blogStyles.left}>
        <Articles
          linkType="search"
          searchText={p as string}
          categoryId={categoryId}
        />
        <ClientArticles
          linkType="search"
          searchText={p as string}
          categoryId={categoryId}
        />
      </div>
      <div className={blogStyles.right}>
        <SideBar defaultSearchText={p as string} />
      </div>
    </main>
  );
}

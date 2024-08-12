import { useTranslations } from 'next-intl';
import blogStyles from '@/app/[lang]/(blog)/blog.module.scss';
import Langs from '@/components/pages/Langs';
import Articles from '@/components/pages/blog/Articles';
import ClientArticles from '@/components/pages/blog/ClientArticles';
import SideBar from '@/components/pages/blog/SideBar';

export default function Home() {
  const t = useTranslations('Config');
  const categoryId = Number(t('categoryId'));

  return (
    <>
      <Langs />
      <main className={blogStyles.wrap}>
        <div className={blogStyles.left}>
          <Articles linkType="articles" categoryId={categoryId} />
          <ClientArticles linkType="articles" categoryId={categoryId} />
        </div>
        <div className={blogStyles.right}>
          <SideBar />
        </div>
      </main>
    </>
  );
}

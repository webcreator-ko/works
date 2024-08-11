import { decode } from 'html-entities';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import blogStyles from '@/app/[lang]/(blog)/blog.module.scss';
import Articles from '@/components/pages/blog/Articles';
import ClientArticles from '@/components/pages/blog/ClientArticles';
import ShareList from '@/components/pages/blog/ShareList';
import SideBar from '@/components/pages/blog/SideBar';
import { formatterDate } from '@/lib/dayjs';
import fetchWP from '@/lib/fetchWP';
import { ArticleDetailType } from '@/types/articleDetailType';
import { FetchType } from '@/types/fetchType';
import pageStyles from './page.module.scss';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;

  const { title, content, x_featured_media_large } =
    await fetchWP<ArticleDetailType>({
      method: FetchType.Get,
      endpoint: `/posts/${id}?_fields=date,title,content,x_featured_media_large`,
    });

  if (!title || !content) notFound();

  const meta = {
    title: decode(title.rendered),
    des: decode(content.rendered),
    openGraph: {
      image: x_featured_media_large,
    },
  };

  return {
    title: meta.title,
    description: `${meta.des.slice(0, 20)}...`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const articleId = Number(id);

  const { date, title, content, categories, x_featured_media_large } =
    await fetchWP<ArticleDetailType>({
      method: FetchType.Get,
      endpoint: `/posts/${id}?_fields=date,title,content,categories,x_featured_media_large`,
    });

  return (
    <main className={blogStyles.wrap}>
      <div className={blogStyles.left}>
        <section className={pageStyles.wrap}>
          <h1 dangerouslySetInnerHTML={{ __html: title.rendered }} />
          <time>{formatterDate(date)}</time>
          <div className={pageStyles.imageWrap}>
            <Image
              src={x_featured_media_large}
              sizes="100vw"
              priority={true}
              fill={true}
              alt=""
            />
          </div>
          <article dangerouslySetInnerHTML={{ __html: content.rendered }} />
          <ShareList
            title={decode(title.rendered)}
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/articles/${id}`}
            hashTags={['WEBCREATOR_KO']}
            size={30}
          />
        </section>
        <Articles
          linkType="categories"
          excludeId={articleId}
          categoryId={categories[0]}
        />
        <ClientArticles
          linkType="categories"
          excludeId={articleId}
          categoryId={categories[0]}
        />
      </div>
      <div className={blogStyles.right}>
        <SideBar />
      </div>
    </main>
  );
}

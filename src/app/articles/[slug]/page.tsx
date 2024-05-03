import diaryStyles from "@/app/diary.module.scss";
import pageStyles from "./page.module.scss";
import ClientArticles from "@/components/pages/ClientArticles";
import SideBar from "@/components/pages/Sidebar";
import { fetchComWP } from "@/libs/fetchComWP";
import { ArticleDetailType } from "@/types/articleDetailType";
import { FetchType } from "@/types/fetchType";
import { decode } from "html-entities";
import { notFound } from "next/navigation";
import Image from "next/image";
import { formatterDate } from "@/libs/dayjs";
import ShareList from "@/components/pages/ShareList";
import Articles from "@/components/pages/Articles";

export async function generateMetadata({
 params,
}: {
 params: { slug: string };
}) {
 const { slug } = params;

 const { title, content } = await fetchComWP<ArticleDetailType>({
  method: FetchType.Get,
  endpoint: `/posts/${slug}?_fields=date,title,content`,
 });

 if (!title || !content) notFound();

 const meta = {
  title: decode(title.rendered),
  des: decode(content.rendered),
 };

 return {
  title: meta.title,
  description: `${meta.des.slice(0, 20)}...`,
 };
}

export default async function Page({ params }: { params: { slug: string } }) {
 const { slug } = params;
 const articleId = Number(slug);

 const { date, title, content, categories, x_featured_media_large } =
  await fetchComWP<ArticleDetailType>({
   method: FetchType.Get,
   endpoint: `/posts/${slug}?_fields=date,title,content,categories,x_featured_media_large`,
  });

 return (
  <main className={diaryStyles.wrap}>
   <div className={diaryStyles.left}>
    <section className={pageStyles.wrap}>
     <h1 dangerouslySetInnerHTML={{ __html: title.rendered }} />
     <time>{formatterDate(date)}</time>
     <div className={pageStyles.image}>
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
      url={`${process.env.NEXT_PUBLIC_SITE_URL}/articles/${slug}`}
      hashTags={["WebCreator_KO"]}
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
   <div className={diaryStyles.right}>
    <SideBar />
   </div>
  </main>
 );
}

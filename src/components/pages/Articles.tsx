import articlesStyles from "./articles.module.scss";
import { ArticleType } from "@/types/articleType";
import { LinkType } from "@/types/linkType";
import {
 getArticles,
 getCategoryArticles,
 getSearchArticles,
} from "@/app/action";
import Article from "./Article";

type Props = {
 linkType: LinkType;
 excludeId?: number;
 categoryId?: number;
 searchText?: string;
 contentMaxLength?: number;
};

const Articles = async ({
 linkType,
 excludeId = 0,
 categoryId,
 searchText,
 contentMaxLength = 60,
}: Props) => {
 let data: ArticleType[] = [];

 if (linkType === "articles") {
  data = await getArticles({ offset: 0, excludeId });
 }
 if (linkType === "categories" && categoryId) {
  data = await getCategoryArticles({ offset: 0, excludeId, categoryId });
 }
 if (linkType === "search" && searchText) {
  data = await getSearchArticles({ offset: 0, excludeId, searchText });
 }

 return (
  <ul className={articlesStyles.articles}>
   {data.map((e, i) => {
    return (
     <li key={e.id}>
      <Article
       id={e.id}
       date={e.date}
       title={e.title.rendered}
       content={e.content.rendered}
       contentMaxLength={contentMaxLength}
      />
     </li>
    );
   })}

   {/* 追加で取得する記事は、クライアントサイドで取得する */}
  </ul>
 );
};

export default Articles;

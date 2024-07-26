import {
  getArticles,
  getCategoryArticles,
  getSearchArticles,
} from '@/app/action';
import { ArticleType } from '@/types/articleType';
import { LinkType } from '@/types/linkType';
import Article from './Article';
import articlesStyles from './articles.module.scss';

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
  contentMaxLength = 250,
}: Props) => {
  let data: ArticleType[] = [];

  if (linkType === 'articles') {
    data = await getArticles({ offset: 0, excludeId });
  }
  if (linkType === 'categories' && categoryId) {
    data = await getCategoryArticles({ offset: 0, excludeId, categoryId });
  }
  if (linkType === 'search' && searchText) {
    data = await getSearchArticles({ offset: 0, excludeId, searchText });
  }

  if (!data.length && linkType === 'search') {
    return (
      <p className={articlesStyles.noSearch}>検索結果はありません &#x1f62d;</p>
    );
  }

  if (!data.length) return null;

  return (
    <ul className={articlesStyles.articles}>
      {data.map((e) => {
        return (
          <li key={e.id}>
            <Article
              id={e.id}
              date={e.date}
              title={e.title.rendered}
              content={e.content.rendered}
              imageSrc={e.x_featured_media_large}
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

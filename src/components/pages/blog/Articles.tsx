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
  categoryId: number;

  excludeId?: number;
  searchText?: string;
  contentMaxLength?: number;
};

const Articles = async ({
  linkType,
  categoryId,
  excludeId = 0,
  searchText,
  contentMaxLength = 250,
}: Props) => {
  let data: ArticleType[] = [];

  if (linkType === 'articles') {
    data = await getArticles({
      offset: 0,
      excludeId,
      categoryId,
    });
  }
  if (linkType === 'categories') {
    data = await getCategoryArticles({ offset: 0, excludeId, categoryId });
  }
  if (linkType === 'search' && searchText) {
    data = await getSearchArticles({
      offset: 0,
      excludeId,
      searchText,
      categoryId,
    });
  }

  if (!data.length && linkType === 'search') {
    return (
      <p className={articlesStyles.noSearch}>
        No search results found. &#x1f62d;
      </p>
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
              imageSrc={e.x_featured_media_large}
              contentMaxLength={contentMaxLength}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;

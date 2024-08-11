'use server';
import { DEFAULT_IMPORT_ARTICLES_COUNT } from '@/const/count';
import fetchWP from '@/lib/fetchWP';
import { ArticleType } from '@/types/articleType';
import { FetchType } from '@/types/fetchType';

type ArticlesProps = {
  offset: number;
  excludeId: number;
  categoryId: number;
};

export async function getArticles({
  offset,
  excludeId,
  categoryId,
}: ArticlesProps) {
  try {
    const data = await fetchWP<ArticleType[]>({
      method: FetchType.Get,
      endpoint: `/posts?per_page=${DEFAULT_IMPORT_ARTICLES_COUNT}&offset=${offset}&categories=${categoryId}&exclude=${excludeId}&_fields=id,date,title,x_featured_media_large,category_name,category_id`,
    });

    return data;
  } catch (error) {
    console.error('Error getArticles:', error);
    throw new Error();
  }
}

type CategoryArticlesProps = {
  offset: number;
  excludeId: number;
  categoryId: number;
};

export async function getCategoryArticles({
  offset,
  excludeId,
  categoryId,
}: CategoryArticlesProps) {
  try {
    const data = await fetchWP<ArticleType[]>({
      method: FetchType.Get,
      endpoint: `/posts?per_page=${DEFAULT_IMPORT_ARTICLES_COUNT}&offset=${offset}&categories=${categoryId}&exclude=${excludeId}&_fields=id,date,title,x_featured_media_large,category_name,category_id`,
    });

    return data;
  } catch (error) {
    console.error('Error getCategoryArticles:', error);
    throw new Error();
  }
}

type SearchArticlesProps = {
  offset: number;
  excludeId: number;
  searchText: string;
  categoryId: number;
};

export async function getSearchArticles({
  offset,
  excludeId,
  searchText,
  categoryId,
}: SearchArticlesProps) {
  try {
    const data = await fetchWP<ArticleType[]>({
      method: FetchType.Get,
      endpoint: `/posts?per_page=${DEFAULT_IMPORT_ARTICLES_COUNT}&offset=${offset}&search=${searchText}&categories=${categoryId}&exclude=${excludeId}&_fields=id,date,title,x_featured_media_large,category_name,category_id`,
    });

    return data;
  } catch (error) {
    console.error('Error getSearchArticles:', error);
    throw new Error();
  }
}

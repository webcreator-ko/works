"use server";
import { DEFAULT_IMPORT_ARTICLES_COUNT } from "@/const/count";
import { fetchComWP } from "@/libs/fetchComWP";
import { ArticleType } from "@/types/articleType";
import { FetchType } from "@/types/fetchType";

type ArticlesProps = {
 offset: number;
 excludeId: number;
};

export async function getArticles({ offset, excludeId }: ArticlesProps) {
 try {
  const data = await fetchComWP<ArticleType[]>({
   method: FetchType.Get,
   endpoint: `/posts?per_page=${DEFAULT_IMPORT_ARTICLES_COUNT}&offset=${offset}&exclude=${excludeId}&_fields=id,date,title,content,category_name,category_id`,
  });

  return data;
 } catch (error) {
  console.error("Error getArticles:", error);
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
  const data = await fetchComWP<ArticleType[]>({
   method: FetchType.Get,
   endpoint: `/posts?per_page=${DEFAULT_IMPORT_ARTICLES_COUNT}&offset=${offset}&categories=${categoryId}&exclude=${excludeId}&_fields=id,date,title,content,category_name,category_id`,
  });

  return data;
 } catch (error) {
  console.error("Error getCategoryArticles:", error);
  throw new Error();
 }
}

type SearchArticlesProps = {
 offset: number;
 excludeId: number;
 searchText: string;
};

export async function getSearchArticles({
 offset,
 excludeId,
 searchText,
}: SearchArticlesProps) {
 try {
  const data = await fetchComWP<ArticleType[]>({
   method: FetchType.Get,
   endpoint: `/posts?per_page=${DEFAULT_IMPORT_ARTICLES_COUNT}&offset=${offset}&search=${searchText}&exclude=${excludeId}&_fields=id,date,title,content,category_name,category_id`,
  });

  return data;
 } catch (error) {
  console.error("Error getSearchArticles:", error);
  throw new Error();
 }
}

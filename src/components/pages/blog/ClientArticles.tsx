'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import ReactLoading from 'react-loading';
import {
  getArticles,
  getCategoryArticles,
  getSearchArticles,
} from '@/app/action';
import { DEFAULT_IMPORT_ARTICLES_COUNT } from '@/const/count';
import { ArticleType } from '@/types/articleType';
import { LinkType } from '@/types/linkType';
import Article from './Article';
import articlesStyles from './articles.module.scss';
import clientArticlesStyles from './client-articles.module.scss';

type Props = {
  linkType: LinkType;
  categoryId: number;
  excludeId?: number;
  searchText?: string;
  contentMaxLength?: number;
};

const ClientArticles = ({
  linkType,
  categoryId,
  excludeId = 0,
  searchText,
  contentMaxLength = 250,
}: Props) => {
  const [data, setData] = useState<ArticleType[]>([]);
  const [isLoading, setLoading] = useState(false);
  const isArticles = useRef(true);
  const local = useLocale();

  const offsetRef = useRef(DEFAULT_IMPORT_ARTICLES_COUNT);

  useEffect(() => {
    const handleScroll = async () => {
      const viewportBottom = window.innerHeight + window.scrollY;
      const documentHeight = document.body.scrollHeight;

      if (
        viewportBottom >= documentHeight &&
        isArticles.current &&
        !isLoading
      ) {
        setLoading(true);

        let newData: ArticleType[] = [];
        if (linkType === 'articles') {
          newData = await getArticles({
            offset: offsetRef.current,
            excludeId,
            categoryId,
          });
        }
        if (linkType === 'categories') {
          newData = await getCategoryArticles({
            offset: offsetRef.current,
            excludeId,
            categoryId,
          });
        }
        if (linkType === 'search' && searchText) {
          newData = await getSearchArticles({
            offset: offsetRef.current,
            excludeId,
            searchText,
            categoryId,
          });
        }

        if (newData.length) {
          setData((d) => [...d, ...newData]);
          offsetRef.current += DEFAULT_IMPORT_ARTICLES_COUNT;
        }

        if (newData.length < DEFAULT_IMPORT_ARTICLES_COUNT) {
          isArticles.current = false;
        }

        setLoading(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [linkType, searchText, offsetRef, isArticles, isLoading]);

  if (!data.length) return null;

  return (
    <div className={clientArticlesStyles.wrap}>
      <ul className={articlesStyles.articles}>
        {data.map((e, i) => {
          return (
            <li key={e.id} id={i === data.length - 1 ? 'lastItem' : undefined}>
              <Article
                id={e.id}
                lang={local}
                date={e.date}
                title={e.title.rendered}
                imageSrc={e.x_featured_media_large}
                contentMaxLength={contentMaxLength}
              />
            </li>
          );
        })}
      </ul>
      {isLoading && (
        <div className={clientArticlesStyles.loading}>
          <ReactLoading type="spin" color="white" height={30} width={30} />
        </div>
      )}
    </div>
  );
};

export default ClientArticles;

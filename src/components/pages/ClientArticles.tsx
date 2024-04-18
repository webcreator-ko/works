"use client";
import { ArticleType } from "@/types/articleType";
import { LinkType } from "@/types/linkType";
import React, { useEffect, useRef, useState } from "react";
import articlesStyles from "./articles.module.scss";
import clientArticlesStyles from "./client-articles.module.scss";
import Article from "./Article";
import ReactLoading from "react-loading";
import {
 getArticles,
 getCategoryArticles,
 getSearchArticles,
} from "@/app/action";
import { sleep } from "@/libs/sleep";
import { DEFAULT_IMPORT_ARTICLES_COUNT } from "@/const/count";

type Props = {
 linkType: LinkType;
 excludeId?: number;
 categoryId?: number;
 searchText?: string;
 contentMaxLength?: number;
};

const ClientArticles = ({
 linkType,
 excludeId = 0,
 categoryId,
 searchText,
 contentMaxLength = 250,
}: Props) => {
 const [data, setData] = useState<ArticleType[]>([]);
 const [isLoading, setLoading] = useState(false);
 const isArticles = useRef(true);

 const offsetRef = useRef(DEFAULT_IMPORT_ARTICLES_COUNT);

 useEffect(() => {
  const handleScroll = async () => {
   const viewportBottom = window.innerHeight + window.scrollY;
   const documentHeight = document.body.scrollHeight;

   if (viewportBottom >= documentHeight && isArticles.current && !isLoading) {
    console.log("load");
    setLoading(true);
    await sleep(1000);

    let newData: ArticleType[] = [];
    if (linkType === "articles") {
     newData = await getArticles({
      offset: offsetRef.current,
      excludeId,
     });
    }
    if (linkType === "categories" && categoryId) {
     newData = await getCategoryArticles({
      offset: offsetRef.current,
      excludeId,
      categoryId,
     });
    }
    if (linkType === "search" && searchText) {
     newData = await getSearchArticles({
      offset: offsetRef.current,
      excludeId,
      searchText,
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
    console.log("load end");
   }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, [linkType, searchText, offsetRef, isArticles, isLoading]);

 return (
  <>
   <ul className={articlesStyles.articles}>
    {data.map((e, i) => {
     return (
      <li key={e.id} id={i === data.length - 1 ? "lastItem" : undefined}>
       <Article
        id={e.id}
        date={e.date}
        title={e.title.rendered}
        imageSrc={e.x_featured_media_large}
        content={e.content.rendered}
        contentMaxLength={contentMaxLength}
       />
      </li>
     );
    })}

    {/* 追加で取得する記事は、クライアントサイドで取得する */}
   </ul>
   {isLoading && (
    <div className={clientArticlesStyles.loading}>
     <ReactLoading type="spin" color="white" height={30} width={30} />
    </div>
   )}
  </>
 );
};

export default ClientArticles;

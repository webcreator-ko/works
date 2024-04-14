import Link from "next/link";
import React from "react";
import Image from "next/image";
import articleStyles from "./article.module.scss";
import { formatterDate } from "@/libs/dayjs";
import ShareList from "./ShareList";

type Props = {
 id: number;
 title: string;
 content: string;
 imageSrc: string;
 date: string;
 contentMaxLength?: number;
};

const Article = ({
 id,
 title,
 content,
 imageSrc,
 date,
 contentMaxLength = 0,
}: Props) => {
 return (
  <article className={articleStyles.wrap}>
   <Link href={`/articles/${id}`}>
    <hgroup>
     <h1 dangerouslySetInnerHTML={{ __html: title }} />
     <article
      dangerouslySetInnerHTML={{
       __html:
        contentMaxLength > 0
         ? `${content.slice(0, contentMaxLength)}...`
         : content,
      }}
     />
     <div className={articleStyles.image}>
      <Image
       src={imageSrc}
       width={0}
       height={0}
       sizes="100vw"
       priority={true}
       alt=""
      />
     </div>
    </hgroup>
   </Link>
   <ShareList
    title={title}
    url={`${process.env.SITE_URL}/articles/${id}`}
    hashTags={["gptTrends"]}
    size={30}
   />
  </article>
 );
};

export default Article;

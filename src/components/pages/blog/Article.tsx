import React from 'react';
import { decode } from 'html-entities';
import Image from 'next/image';
import { formatterDate } from '@/lib/dayjs';
import { Link } from '@/navigation';
import ShareList from './ShareList';
import articleStyles from './article.module.scss';

type Props = {
  id: number;
  lang: string;
  title: string;
  content?: string;
  imageSrc: string;
  date: string;
  contentMaxLength?: number;
};

const Article = ({
  id,
  lang,
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
          {content && (
            <article
              dangerouslySetInnerHTML={{
                __html:
                  contentMaxLength > 0
                    ? `${content.slice(0, contentMaxLength)}...`
                    : content,
              }}
            />
          )}
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
      <time dateTime={date}>{formatterDate(date)}</time>
      <ShareList
        title={decode(title)}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/articles/${id}`}
        hashTags={['WEBCREATOR_KO']}
        size={30}
      />
    </article>
  );
};

export default Article;

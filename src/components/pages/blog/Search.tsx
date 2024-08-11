'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { SP_WIDTH } from '@/const/size';
import searchStyles from './search.module.scss';

type Props = {
  defaultSearchText?: string;
};

const Search = ({ defaultSearchText }: Props) => {
  const [isDisplaySearch, setDisplaySearch] = useState(true);
  const { lang } = useParams();

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      // SP時のみ
      if (window.innerWidth < SP_WIDTH) {
        setDisplaySearch(false);
      }
    };

    const handleScrollEnd = () => {
      setDisplaySearch(true);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scrollend', handleScrollEnd);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
    };
  }, []);

  const searchRef = useRef<HTMLInputElement>(null);
  const onClickSearchResult = () => {
    const val = searchRef.current?.value;
    if (!val) {
      window.location.href = '/';
      return;
    }
    //   router.push(`/search?p=${val}`);
    //   router.refresh();

    window.location.href = `/${lang}/search?p=${val}`;
  };

  return (
    <search
      className={`${searchStyles.wrap} ${isDisplaySearch ? searchStyles.on : ''}`}
    >
      <input type="text" ref={searchRef} defaultValue={defaultSearchText} />
      <button onClick={onClickSearchResult} type="button">
        Search
      </button>
    </search>
  );
};

export default Search;

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import searchStyles from './search.module.scss';

type Props = {
  defaultSearchText?: string;
};

const Search = ({ defaultSearchText }: Props) => {
  const [isDisplaySearch, setDisplaySearch] = useState(true);
  const { lang } = useParams();

  // スクロール検知
  useEffect(() => {
    let isScrolling: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        setDisplaySearch(true);
      }, 150); // 150msはスクロール終了と見なす
    };

    window.addEventListener('scroll', handleScroll);
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

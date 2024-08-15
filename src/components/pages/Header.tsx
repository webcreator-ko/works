'use client';
import React from 'react';
import { getImageProps } from 'next/image';
import { Link } from '@/navigation';
import headerStyles from './header.module.scss';

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ');
      return `url("${url}") ${dpi}`;
    })
    .join(', ');
  return `image-set(${imageSet})`;
}

const Header = () => {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: '',
    width: 2557,
    height: 1198,
    src: '/fukuoka.png',
  });
  const backgroundImage = getBackgroundImage(srcSet);

  return (
    <header
      className={headerStyles.wrap}
      style={{ backgroundImage }}
      id="header"
    >
      <h1>
        <Link href="/">
          WEBCREATOR
          <br />
          KO
        </Link>
      </h1>
      <div className={headerStyles.rect} />
    </header>
  );
};

export default Header;

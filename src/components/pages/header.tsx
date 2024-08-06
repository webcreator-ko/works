'use client';
import React from 'react';
import { getImageProps } from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const pathName = usePathname();
  let name = '404';
  if (
    pathName === '/' ||
    pathName.includes('/articles') ||
    pathName.includes('/search')
  ) {
    name = 'Diary';
  } else if (pathName === '/works') {
    name = 'Works';
  } else if (pathName === '/gallery') {
    name = 'Gallery';
  } else if (pathName === '/contact') {
    name = 'Contact';
  }

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
      <h2 className={headerStyles.leftFixed} data-text="Portfolio">
        {name}
      </h2>
      <div className={headerStyles.rect} />
    </header>
  );
};

export default Header;

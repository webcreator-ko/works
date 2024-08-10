'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navigationStyles from './navigation.module.scss';

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isDisplay, setDisplay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navRect = navRef.current?.getBoundingClientRect();
        const headerRect = document
          .getElementById('header')
          ?.getBoundingClientRect();
        if (!headerRect) return;

        if (navRect.top <= 0 && headerRect.bottom < 0) {
          setDisplay(true);
        } else {
          setDisplay(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pathname = usePathname();

  return (
    <nav
      className={`${navigationStyles.wrap} ${
        isDisplay ? navigationStyles.fixed : undefined
      }`}
      ref={navRef}
    >
      <h1 className={isDisplay ? navigationStyles.on : undefined}>
        <Link href="/">WEBCREATOR - KO</Link>
      </h1>
      <ul>
        <li>
          <Link
            href="/"
            className={
              !pathname.includes('works') &&
              !pathname.includes('gallery') &&
              !pathname.includes('contact')
                ? navigationStyles.on
                : ''
            }
          >
            Diary
          </Link>
        </li>
        <li>
          <a
            href="https://bsky.app/profile/webcreator-ko.bsky.social"
            target="_blank"
          >
            BlueSky
          </a>
        </li>
        {/* <li>
          <Link
            href="/works"
            className={pathname.includes('works') ? navigationStyles.on : ''}
          >
            Works
          </Link>
        </li> */}
        {/* <li>
          <Link
            href="/gallery"
            className={pathname.includes('gallery') ? navigationStyles.on : ''}
          >
            Gallery
          </Link>
        </li> */}
        <li>
          <Link
            href={`/contact`}
            className={pathname.includes('contact') ? navigationStyles.on : ''}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

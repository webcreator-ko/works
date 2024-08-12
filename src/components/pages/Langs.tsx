'use client';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import langsStyles from './langs.module.scss';

const Langs = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <ul className={langsStyles.wrap}>
      <li>
        <Link
          href={pathname}
          locale="ja"
          className={locale === 'ja' ? langsStyles.on : ''}
        >
          <span className="fi fi-jp"></span>
        </Link>
      </li>
      <li>
        <Link
          href={pathname}
          locale="en"
          className={locale === 'en' ? langsStyles.on : ''}
        >
          <span className="fi fi-us"></span>
        </Link>
      </li>
      <li>
        <Link
          href={pathname}
          locale="zh"
          className={locale === 'zh' ? langsStyles.on : ''}
        >
          <span className="fi fi-cn"></span>
        </Link>
      </li>
    </ul>
  );
};

export default Langs;

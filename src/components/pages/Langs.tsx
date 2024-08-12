import Link from 'next/link';
import { useTranslations } from 'next-intl';
import langsStyles from './langs.module.scss';

const Langs = () => {
  const t = useTranslations('Config');

  return (
    <ul className={langsStyles.wrap}>
      <li>
        <Link href="/ja" className={t('lang') === 'ja' ? langsStyles.on : ''}>
          <span className="fi fi-jp"></span>
        </Link>
      </li>
      <li>
        <Link href="/en" className={t('lang') === 'en' ? langsStyles.on : ''}>
          <span className="fi fi-us"></span>
        </Link>
      </li>
      <li>
        <Link href="/zh" className={t('lang') === 'zh' ? langsStyles.on : ''}>
          <span className="fi fi-cn"></span>
        </Link>
      </li>
    </ul>
  );
};

export default Langs;

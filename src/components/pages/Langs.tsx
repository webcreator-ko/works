import Link from 'next/link';
import langsStyles from './langs.module.scss';

const Langs = () => {
  return (
    <ul className={langsStyles.wrap}>
      <li>
        <Link href="/ja">
          <span className="fi fi-jp"></span>
        </Link>
      </li>
      <li>
        <Link href="/en">
          <span className="fi fi-us"></span>
        </Link>
      </li>
      <li>
        <Link href="/zh">
          <span className="fi fi-cn"></span>
        </Link>
      </li>
    </ul>
  );
};

export default Langs;

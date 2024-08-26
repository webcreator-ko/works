import Link from 'next/link';
import notFoundStyles from '../notFound.module.scss';

const NotFound = () => {
  return (
    <div className={notFoundStyles.wrap}>
      <h2>
        N<span>o</span>t F<span>o</span>u<span>nd</span>
      </h2>
      <Link href="/">Go Back to Home Page</Link>
    </div>
  );
};

export default NotFound;

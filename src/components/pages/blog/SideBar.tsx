import Profile from './Profile';
import Search from './Search';

type Props = {
  defaultSearchText?: string;
  lang: string;
};

const SideBar = ({ defaultSearchText, lang }: Props) => {
  return (
    <>
      <Profile lang={lang} />
      <Search defaultSearchText={defaultSearchText} />
    </>
  );
};

export default SideBar;

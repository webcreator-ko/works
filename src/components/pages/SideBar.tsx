import Profile from "./Profile";
import Search from "./Search";

type Props = {
 defaultSearchText?: string;
};

const SideBar = ({ defaultSearchText }: Props) => {
 return (
  <>
   <Profile />
   <Search defaultSearchText={defaultSearchText} />
  </>
 );
};

export default SideBar;

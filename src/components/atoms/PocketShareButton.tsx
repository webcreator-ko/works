import { PocketIcon, PocketShareButton as ShareButton } from "react-share";

type Props = {
 url: string;
 title: string;
 size: number;
};

const PocketShareButton = ({ url, title, size }: Props) => {
 return (
  <ShareButton url={url} title={title}>
   <PocketIcon size={size} round={true} />
  </ShareButton>
 );
};

export default PocketShareButton;

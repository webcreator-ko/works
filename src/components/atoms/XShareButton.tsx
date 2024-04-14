import { TwitterShareButton, XIcon } from "react-share";

type Props = {
 title: string;
 url: string;
 hashtags: string[];
 size: number;
};

const XShareButton = ({ title, url, hashtags, size }: Props) => {
 return (
  <TwitterShareButton title={title} url={url} hashtags={hashtags}>
   <XIcon size={size} round={true} />
  </TwitterShareButton>
 );
};

export default XShareButton;

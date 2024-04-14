import { LinkedinShareButton, LinkedinIcon } from "react-share";

type Props = {
 url: string;
 title: string;
 size: number;
};

const LinkedInShareButton = ({ url, title, size }: Props) => {
 return (
  <LinkedinShareButton url={url} title={title}>
   <LinkedinIcon size={size} round={true} />
  </LinkedinShareButton>
 );
};

export default LinkedInShareButton;

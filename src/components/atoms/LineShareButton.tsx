import { LineIcon, LineShareButton as ShareButton } from "react-share";

type Props = {
 url: string;
 title: string;
 size: number;
};

const LineShareButton = ({ url, title, size }: Props) => {
 return (
  <ShareButton url={url} title={title}>
   <LineIcon size={size} round={true} />
  </ShareButton>
 );
};

export default LineShareButton;

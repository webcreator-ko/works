import { WhatsappShareButton as ShareButton, WhatsappIcon } from "react-share";

type Props = {
 url: string;
 title: string;
 size: number;
};

const WhatsappShareButton = ({ url, title, size }: Props) => {
 return (
  <ShareButton url={url} title={title}>
   <WhatsappIcon size={size} round={true} />
  </ShareButton>
 );
};

export default WhatsappShareButton;

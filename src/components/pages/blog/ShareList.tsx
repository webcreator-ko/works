"use client";
import React from "react";
import shareStyles from "./share.module.scss";
import XShareButton from "@/components/atoms/XShareButton";
import LinkedInShareButton from "@/components/atoms/LinkedInShareButton";
import LineShareButton from "@/components/atoms/LineShareButton";
import WhatsappShareButton from "@/components/atoms/WhatsappShareButton";
import PocketShareButton from "@/components/atoms/PocketShareButton";

type Props = {
 title: string;
 url: string;
 hashTags: string[];
 size: 30;
};

const ShareList = ({ title, url, hashTags, size }: Props) => {
 return (
  <ul className={shareStyles.wrap}>
   <li>
    <XShareButton title={title} url={url} hashtags={hashTags} size={size} />
   </li>
   <li>
    <LinkedInShareButton title={title} url={url} size={size} />
   </li>
   <li>
    <LineShareButton title={title} url={url} size={size} />
   </li>
   <li>
    <WhatsappShareButton title={title} url={url} size={size} />
   </li>
   <li>
    <PocketShareButton title={title} url={url} size={size} />
   </li>
  </ul>
 );
};

export default ShareList;

import React from "react";
import workStyles from "./work.module.scss";
import Image from "next/image";

type Props = {
 title: string;
 description: string;
 imgSrc: string;
 technologyStack: string;
 tasks: string;
};

const Work = ({
 title,
 description,
 imgSrc,
 technologyStack,
 tasks,
}: Props) => {
 return (
  <section className={workStyles.wrap}>
   <h2>{title}</h2>
   <div className={workStyles.inner}>
    <div className={workStyles.imageFrame}>
     <Image src={imgSrc} fill alt="" />
    </div>
    <dl>
     <dt>サービス内容</dt>
     <dd>{description}</dd>
     <dt>使用した技術スタック</dt>
     <dd>{technologyStack}</dd>
     <dt>主な実装</dt>
     <dd>{tasks}</dd>
    </dl>
   </div>
  </section>
 );
};

export default Work;

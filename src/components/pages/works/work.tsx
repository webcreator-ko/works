import React from "react";
import workStyles from "./work.module.scss";
import Image from "next/image";
const Work = () => {
 return (
  <section className={workStyles.wrap}>
   <h2>YOMcoma Web</h2>
   <div className={workStyles.inner}>
    <div className={workStyles.imageFrame}>
     <Image src="/yomcoma.png" fill alt="" />
    </div>
    <dl>
     <dt>技術スタック</dt>
     <dd>
      Next.js(Pages router), NestJS, MySQL, GCP(主にAppEngine, CloudStorage),
      外部API(OpenAI, Kyash)
     </dd>
     <dt>主な実装</dt>
     <dd>
      グループチャット機能、作品画像一括アップロード、AIとOCRを使用した作品タイトルと説明の自動生成機能、Kyashによる送金システム
     </dd>
    </dl>
   </div>
  </section>
 );
};

export default Work;

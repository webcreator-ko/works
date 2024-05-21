import React from "react";
import pageStyles from "./page.module.scss";
import Work from "@/components/pages/works/work";

const page = () => {
 return (
  <div className={pageStyles.wrap}>
   <Work
    title="Creator Profile"
    description="プロフ帳が作れるサービス、更にファンによるファンアートやコメント投稿、作品展示など可能！"
    imgSrc="/creatorProfile.png"
    technologyStack="Next.js(App router), NextAuth, Vercel Postgres, Vercel(ホスティング), Prisma, GCP(Cloud Storage), 外部API(OpenAI)"
    tasks="認証、プロフィールページに関する入力フォームの実装、3種類のOGP画像の自動生成、ダッシュボードの実装、Next.jsのストリーミングを使用した日本語/英語のプロフィールページ実装"
   />
   <Work
    title="YOMcoma Web"
    description="ショートマンガのサービス"
    imgSrc="/yomcoma.png"
    technologyStack="Next.js(Pages router), NestJS, TypeORM, MySQL, GCP(主にAppEngine, CloudStorage),
      外部API(OpenAI, Kyash)"
    tasks="グループチャット機能、作品画像一括アップロード機能、AIとOCRを使用した作品タイトルと説明の自動生成機能、Kyashによる送金システム"
   />
  </div>
 );
};

export default page;

import diaryStyles from "@/app/diary.module.scss";
import ClientArticles from "@/components/pages/ClientArticles";
import SideBar from "@/components/pages/Sidebar";

import { notFound } from "next/navigation";

import Articles from "@/components/pages/Articles";
import { decode } from "html-entities";

export async function generateMetadata({
 params,
 searchParams,
}: {
 params: { slug: string };
 searchParams: { [key: string]: string | string[] | undefined };
}) {
 const { p } = searchParams;

 if (!p) notFound();

 const meta = {
  title: decode(p as string),
 };

 return {
  title: meta.title,
 };
}

export default async function Page({
 params,
 searchParams,
}: {
 params: { slug: string };
 searchParams: { [key: string]: string | string[] | undefined };
}) {
 const { p } = searchParams;

 if (!p) notFound();

 return (
  <main className={diaryStyles.wrap}>
   <div className={diaryStyles.left}>
    <Articles linkType="search" searchText={p as string} />
    <ClientArticles linkType="search" searchText={p as string} />
   </div>
   <div className={diaryStyles.right}>
    <SideBar defaultSearchText={p as string} />
   </div>
  </main>
 );
}

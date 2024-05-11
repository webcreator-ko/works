import blogStyles from "@/app/(blog)/blog.module.scss";
import ClientArticles from "@/components/pages/blog/ClientArticles";

import { notFound } from "next/navigation";

import Articles from "@/components/pages/blog/Articles";
import { decode } from "html-entities";
import SideBar from "@/components/pages/blog/SideBar";

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
  <main className={blogStyles.wrap}>
   <div className={blogStyles.left}>
    <Articles linkType="search" searchText={p as string} />
    <ClientArticles linkType="search" searchText={p as string} />
   </div>
   <div className={blogStyles.right}>
    <SideBar defaultSearchText={p as string} />
   </div>
  </main>
 );
}

import Articles from "@/components/pages/Articles";
import pageStyles from "./page.module.scss";
import ClientArticles from "@/components/pages/ClientArticles";
import SideBar from "@/components/pages/Sidebar";

export default function Home() {
 return (
  <main className={pageStyles.wrap}>
   <div className={pageStyles.left}>
    <Articles linkType="articles" />
    <ClientArticles linkType="articles" />
   </div>
   <div className={pageStyles.right}>
    <SideBar />
   </div>
  </main>
 );
}

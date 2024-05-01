import Articles from "@/components/pages/Articles";
import diaryStyles from "@/app/diary.module.scss";
import ClientArticles from "@/components/pages/ClientArticles";
import SideBar from "@/components/pages/Sidebar";

export default function Home() {
 return (
  <main className={diaryStyles.wrap}>
   <div className={diaryStyles.left}>
    <Articles linkType="articles" />
    <ClientArticles linkType="articles" />
   </div>
   <div className={diaryStyles.right}>
    <SideBar />
   </div>
  </main>
 );
}

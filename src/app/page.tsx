import Header from "@/components/header";
import Navigation from "@/components/navigation";
import pageStyles from "./page.module.scss";

export default function Home() {
 return (
  <main className={pageStyles.wrap}>
   <Header />
   <Navigation />
  </main>
 );
}

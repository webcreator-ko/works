import NextJsIcon from "@/components/icons/NextJsIcon";
import profileStyles from "./profile.module.scss";

const Profile = () => {
 return (
  <article className={profileStyles.wrap}>
   <h3>WEB CREATOR KO</h3>
   <p className={profileStyles.des}>
    33歳から未経験で、Web開発に携わり現在 3 年目。
    <br />
    仕事では、Next,jsをフルに活用してフロントからバックエンドの実装を幅広く行なってます。
    <br />
    プライベートでも、Next.jsを使用して色んな物を作成中。
    <br />
    今後も Next.js を極めていき、より高いパフォーマンスが作れるよう精進中。
   </p>
   <aside>
    <a href="https://nextjs.org/" target="_blank">
     <NextJsIcon />
    </a>
   </aside>
  </article>
 );
};

export default Profile;

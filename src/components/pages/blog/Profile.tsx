import NextJsIcon from '@/components/icons/NextJsIcon';
import profileStyles from './profile.module.scss';

const Profile = () => {
  return (
    <article className={profileStyles.wrap}>
      <h3>WEB CREATOR KO</h3>
      {/* 2022年4月~2027年4月にスタート */}
      {/* 描きたい記事
   ・33歳から未経験で開発エンジニアになり、年収⚪︎⚪︎⚪︎になった話
   ・30代からの矯正が終わった話 */}
      <p className={profileStyles.des}>
        33歳から開発未経験で、Web開発に携わり現在 6 年目。
        <br />
        仕事では、Next,jsをフルに活用してフロントからバックエンドの実装を幅広く行なってます。
        <br />
        プライベートでも、Next.jsを使用して色んな物を作成中。
        <br />
        今後も Next.js
        を極めていき、より高いパフォーマンスのサイトが作れるよう精進中。
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

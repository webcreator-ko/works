import profileStyles from './profile.module.scss';

const Profile = () => {
  return (
    <article className={profileStyles.wrap}>
      <h3>WEB CREATOR KO</h3>

      <p className={profileStyles.des}>
        30代から開発エンジニアとしてスタートし、開発4年目
        <br />
        ReactやNext.jsでのモダン開発を得意とします
        <br />
        目標は30代の内に自分でサービスを作り、月50万円の売上を達成する事
      </p>
    </article>
  );
};

export default Profile;

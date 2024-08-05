import profileStyles from './profile.module.scss';

const Profile = () => {
  return (
    <article className={profileStyles.wrap}>
      <h3>WEB CREATOR KO</h3>

      <p className={profileStyles.des}>
        I started my career as a web developer in my 30s, specializing in modern
        development with React and Next.js.
        <br />
        My goal is to undertake individual projects in my 30s and achieve
        monthly earnings of over 1 million yen with the services I develop.
      </p>
    </article>
  );
};

export default Profile;

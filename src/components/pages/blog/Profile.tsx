import { getDictionary } from '@/app/dictionaries';
import profileStyles from './profile.module.scss';

type Props = {
  lang: string;
};

const Profile = async ({ lang }: Props) => {
  const { profile } = await getDictionary(lang);
  console.log(profile);

  return (
    <article className={profileStyles.wrap}>
      <h3>WEBCREATOR KO</h3>

      <p
        className={profileStyles.des}
        dangerouslySetInnerHTML={{ __html: profile }}
      />
    </article>
  );
};

export default Profile;

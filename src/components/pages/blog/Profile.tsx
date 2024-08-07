import { useTranslations } from 'next-intl';
import profileStyles from './profile.module.scss';

const Profile = () => {
  const t = useTranslations('SideBar');

  return (
    <article className={profileStyles.wrap}>
      <h3>WEBCREATOR KO</h3>

      <p
        className={profileStyles.des}
        dangerouslySetInnerHTML={{ __html: t('profile') }}
      />
    </article>
  );
};

export default Profile;

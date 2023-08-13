import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import Text from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile', { keyPrefix: 'profile' });
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button className={cls.editBtn} type="button" theme={ButtonTheme.OUTLINE}>
          {t('Edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={data?.firstname}
          placeholder={t('Your firstname')}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Your lastname')}
        />
      </div>
    </div>
  );
};

export default ProfileCard;

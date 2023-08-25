import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import Avatar from 'shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/Profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  onChangeFirstname?: (firstname: string) => void;
  onChangeLastname?: (lastname: string) => void;
  onChangeAge?: (age: string) => void;
  onChangeCurrency?: (currency: string) => void;
  onChangeCountry?: (country: string) => void;
  onChangeCity?: (city: string) => void;
  onChangeUsername?: (username: string) => void;
  onChangeAvatar?: (avatar: string) => void;
}

const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  error,
  isLoading,
  readOnly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCurrency,
  onChangeCountry,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
}) => {
  const { t } = useTranslation('profile', { keyPrefix: 'profile' });

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('An error occurred while loading the profile')}
          paragraph={t('Try to reload the page')}
        />
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.profileCard, { [cls.editing]: !readOnly }, [
        className,
      ])}
    >
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}

        <Input
          className={cls.input}
          value={data?.firstname}
          placeholder={t('Firstname')}
          readOnly={readOnly}
          onChange={onChangeFirstname}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Lastname')}
          readOnly={readOnly}
          onChange={onChangeLastname}
        />
        <Input
          className={cls.input}
          value={data?.age}
          placeholder={t('Age')}
          readOnly={readOnly}
          onChange={onChangeAge}
        />
        <Input
          className={cls.input}
          value={data?.currency}
          placeholder={t('Currency')}
          readOnly={readOnly}
          onChange={onChangeCurrency}
        />
        <Input
          className={cls.input}
          value={data?.country}
          placeholder={t('Country')}
          readOnly={readOnly}
          onChange={onChangeCountry}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('City')}
          readOnly={readOnly}
          onChange={onChangeCity}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('Username')}
          readOnly={readOnly}
          onChange={onChangeUsername}
        />
        <Input
          className={cls.input}
          value={data?.avatar}
          placeholder={t('Avatar')}
          readOnly={readOnly}
          onChange={onChangeAvatar}
        />
      </div>
    </div>
  );
};

export default ProfileCard;

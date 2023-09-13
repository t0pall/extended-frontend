import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import Avatar from 'shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/Profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (firstname: string) => void;
  onChangeLastname?: (lastname: string) => void;
  onChangeAge?: (age: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
  onChangeCity?: (city: string) => void;
  onChangeUsername?: (username: string) => void;
  onChangeAvatar?: (avatar: string) => void;
}

const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  error,
  isLoading,
  readonly,
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
      className={classNames(cls.profileCard, { [cls.editing]: !readonly }, [
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
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Lastname')}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          className={cls.input}
          value={data?.age}
          placeholder={t('Age')}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          readonly={readonly}
          onChange={onChangeCurrency}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('City')}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          readonly={readonly}
          onChange={onChangeCountry}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('Username')}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <Input
          className={cls.input}
          value={data?.avatar}
          placeholder={t('Avatar')}
          readonly={readonly}
          onChange={onChangeAvatar}
        />
      </div>
    </div>
  );
};

export default ProfileCard;

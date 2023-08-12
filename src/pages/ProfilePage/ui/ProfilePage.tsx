import { profileReducer } from 'entities/Profile';
import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
// import cls from './profilePage.module.scss;'

const initialReducers: ReducersList = {
  profile: profileReducer,
};

interface profilePageProps {
   className?: string
}

const ProfilePage: FC<profilePageProps> = memo(({ className }: profilePageProps) => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames('cls.profilePage', {}, [className])}>
        <h1>{t('Profile page')}</h1>
      </div>

    </DynamicModuleLoader>

  );
});

export default ProfilePage;

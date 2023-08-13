import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { classNames } from 'helpers/classNames/classNames';
import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
// import cls from './profilePage.module.scss;'

const initialReducers: ReducersList = {
  profile: profileReducer,
};

interface profilePageProps {
   className?: string
}

const ProfilePage: FC<profilePageProps> = memo(({ className }: profilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames('cls.profilePage', {}, [className])}>
        <ProfileCard />
      </div>

    </DynamicModuleLoader>

  );
});

export default ProfilePage;

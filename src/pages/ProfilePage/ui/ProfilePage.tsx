import {
  ProfileCard,
  fetchProfileData,
  getProfileFormData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  profileReducer,
} from 'entities/Profile';
import { classNames } from 'helpers/classNames/classNames';
import {
  FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileValidateErrors }
  from 'entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { Currency } from 'entities/Currency';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile/model/types/Profile';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';
// import cls from './profilePage.module.scss;'

const initialReducers: ReducersList = {
  profile: profileReducer,
};

interface profilePageProps {
  className?: string;
}

const ProfilePage: FC<profilePageProps> = memo(
  ({ className }: profilePageProps) => {
    const { t } = useTranslation('profile', { keyPrefix: 'profile' });
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    const validateErrorsTranslations = {
      [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
      [ValidateProfileError.INCORRECT_CURRENCY]: t('Incorrect currency'),
      [ValidateProfileError.INCORRECT_LOCATION]: t('Incorrect location'),
      [ValidateProfileError.INCORRECT_USERNAME]: t('Incorrect username'),
      [ValidateProfileError.INCORRECT_USER_DATA]: t(
        'Incorrect firstname or lastname',
      ),
      [ValidateProfileError.NO_DATA]: t('No data'),
      [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    };

    useInitialEffect(() => {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    }, [dispatch]);

    const onChangeFirstname = useCallback(
      (firstname) => {
        dispatch(profileActions.updateProfile({ firstname }));
      },
      [dispatch],
    );

    const onChangeLastname = useCallback(
      (lastname) => {
        dispatch(profileActions.updateProfile({ lastname }));
      },
      [dispatch],
    );

    const onChangeAge = useCallback(
      (age: string) => {
        const numberRegEx = /^(?!0)\d*$/;
        if (numberRegEx.test(age)) {
          dispatch(profileActions.updateProfile({ age }));
        }
      },
      [dispatch],
    );
    const onChangeCurrency = useCallback(
      (currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
      },
      [dispatch],
    );
    const onChangeCountry = useCallback(
      (country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
      },
      [dispatch],
    );
    const onChangeCity = useCallback(
      (city: string) => {
        dispatch(profileActions.updateProfile({ city }));
      },
      [dispatch],
    );
    const onChangeUsername = useCallback(
      (username: string) => {
        dispatch(profileActions.updateProfile({ username }));
      },
      [dispatch],
    );
    const onChangeAvatar = useCallback(
      (avatar: string) => {
        dispatch(profileActions.updateProfile({ avatar }));
      },
      [dispatch],
    );

    return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
        <Page className={classNames('cls.profilePage', {}, [className])}>
          <VStack max gap="16">
            <ProfilePageHeader />
            {validateErrors?.length
            && validateErrors.map((error) => (
              <Text
                theme={TextTheme.ERROR}
                paragraph={validateErrorsTranslations[error]}
                key={error}
              />
            ))}
            <ProfileCard
              data={formData}
              isLoading={isLoading}
              error={error}
              readonly={readonly}
              onChangeFirstname={onChangeFirstname}
              onChangeLastname={onChangeLastname}
              onChangeAge={onChangeAge}
              onChangeCurrency={onChangeCurrency}
              onChangeCountry={onChangeCountry}
              onChangeCity={onChangeCity}
              onChangeUsername={onChangeUsername}
              onChangeAvatar={onChangeAvatar}
            />
          </VStack>
        </Page>
      </DynamicModuleLoader>
    );
  },
);

export default ProfilePage;

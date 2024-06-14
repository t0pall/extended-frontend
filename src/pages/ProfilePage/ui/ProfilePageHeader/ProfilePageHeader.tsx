import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Text from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile', { keyPrefix: 'profile' });
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const dispatch = useAppDispatch();

  const canEdit = authData?.id === profileData?.id;

  const onEdit = () => {
    dispatch(profileActions.setReadonly(false));
  };

  const onSave = () => {
    dispatch(updateProfileData());
  };

  const onCancelEdit = () => {
    dispatch(profileActions.setReadonly(true));
    dispatch(profileActions.cancelEdit());
  };

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div className={cls.btnsContainer}>
          {readonly ? (
            <Button
              className={cls.editBtn}
              onClick={onEdit}
              type="button"
              theme={ButtonTheme.OUTLINE}
            >
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button
                className={cls.cancelBtn}
                onClick={onCancelEdit}
                type="button"
                theme={ButtonTheme.OUTLINE_RED}
              >
                {t('Cancel')}
              </Button>
              <Button
                className={cls.saveBtn}
                onClick={onSave}
                type="button"
                theme={ButtonTheme.OUTLINE_INVERTED}
              >
                {t('Save')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePageHeader;

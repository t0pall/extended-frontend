import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Text from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile', { keyPrefix: 'profile' });
  const readOnly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();

  const onEdit = () => {
    dispatch(profileActions.setReadOnly(false));
  };

  const onSave = () => {
    dispatch(updateProfileData());
    dispatch(profileActions.setReadOnly(true));
  };

  const onCancelEdit = () => {
    dispatch(profileActions.setReadOnly(true));
    dispatch(profileActions.cancelEdit());
  };

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      <div className={cls.btnContainer}>
        {readOnly ? (
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
    </div>
  );
};

export default ProfilePageHeader;

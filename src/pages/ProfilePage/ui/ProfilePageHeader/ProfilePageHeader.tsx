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
import { HStack } from 'shared/ui/Stack';

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
    <HStack max justyfy="between" className={classNames('', {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <HStack max gap="8" justyfy="end">
          {readonly ? (
            <Button
              onClick={onEdit}
              type="button"
              theme={ButtonTheme.OUTLINE}
            >
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button
                onClick={onCancelEdit}
                type="button"
                theme={ButtonTheme.OUTLINE_RED}
              >
                {t('Cancel')}
              </Button>
              <Button
                onClick={onSave}
                type="button"
                theme={ButtonTheme.OUTLINE_INVERTED}
              >
                {t('Save')}
              </Button>
            </>
          )}
        </HStack>
      )}
    </HStack>
  );
};

export default ProfilePageHeader;

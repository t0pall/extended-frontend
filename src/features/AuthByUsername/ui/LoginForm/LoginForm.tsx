import { classNames } from 'helpers/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { getAuthByUsernameState }
  from '../../model/selectors/getAuthByUsernameState/getAuthByUsernameState';
import { authByUsernameActions } from '../../model/slice/authByUsernameSlice';
import { authByUsername } from '../../model/services/authByUsername/authByUsername';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispath = useDispatch();

  const {
    username, password, isLoading, error,
  } = useSelector(getAuthByUsernameState);

  const onUsernameChange = useCallback(
    (value: string) => {
      dispath(authByUsernameActions.setUsername(value));
    },
    [dispath],
  );

  const onPasswordChange = useCallback(
    (value: string) => {
      dispath(authByUsernameActions.setPassword(value));
    },
    [dispath],
  );

  const onLoginButtonClick = useCallback(
    () => {
      dispath(authByUsername({ password, username }));
    },
    [dispath, password, username],
  );

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Authorization')} />
      {error && <Text paragraph={t('You have entered an incorrect username or password')} theme={TextTheme.ERROR} />}
      <Input onChange={onUsernameChange} value={username} autoFocus placeholder={t('username')} />
      <Input onChange={onPasswordChange} value={password} placeholder={t('password')} />
      <Button
        className={cls.loginButton}
        type="button"
        theme={ButtonTheme.OUTLINE}
        disabled={isLoading}
        onClick={onLoginButtonClick}
      >
        {t('login')}
      </Button>
    </div>
  );
});

export default LoginForm;

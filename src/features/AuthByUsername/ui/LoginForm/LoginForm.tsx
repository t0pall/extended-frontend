import { classNames } from 'helpers/classNames/classNames';
import {
  FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import cls from './LoginForm.module.scss';
import {
  authByUsernameActions,
  authByUsernameReducer,
} from '../../model/slice/authByUsernameSlice';
import { authByUsername } from '../../model/services/authByUsername/authByUsername';
import { getAuthByUsernameUsername } from '../../model/selectors/getAuthByUsernameUsername/getAuthByUsernameUsername';
import { getAuthByUsernamePassword } from '../../model/selectors/getAuthByUsernamePassword/getAuthByUsernamePassword';
import { getAuthByUsernameIsLoading } from '../../model/selectors/getAuthByUsernameIsLoading/getAuthByUsernameIsLoading';
import { getAuthByUsernameError } from '../../model/selectors/getAuthByUsernameError/getAuthByUsernameError';

const initialReducers: ReducersList = {
  authByUsername: authByUsernameReducer,
};

export interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispath = useDispatch();
  const username = useSelector(getAuthByUsernameUsername);
  const password = useSelector(getAuthByUsernamePassword);
  const isLoading = useSelector(getAuthByUsernameIsLoading);
  const error = useSelector(getAuthByUsernameError);

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

  const onLoginButtonClick = useCallback(() => {
    dispath(authByUsername({ password, username }));
  }, [dispath, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Authorization')} />
        {error && (
          <Text
            paragraph={t('You have entered an incorrect username or password')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          onChange={onUsernameChange}
          value={username}
          autoFocus
          placeholder={t('username')}
        />
        <Input
          onChange={onPasswordChange}
          value={password}
          placeholder={t('password')}
        />
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;

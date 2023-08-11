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
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import {
  loginActions,
  loginReducer,
} from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

const initialReducers: ReducersList = {
  login: loginReducer,
};

export interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispath = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onUsernameChange = useCallback(
    (value: string) => {
      dispath(loginActions.setUsername(value));
    },
    [dispath],
  );

  const onPasswordChange = useCallback(
    (value: string) => {
      dispath(loginActions.setPassword(value));
    },
    [dispath],
  );

  const onLoginButtonClick = useCallback(() => {
    dispath(loginByUsername({ password, username }));
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

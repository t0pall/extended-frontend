import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input autoFocus placeholder={t('username')} />
      <Input placeholder={t('password')} />
      <Button
        className={cls.loginButton}
        type="button"
        theme={ButtonTheme.OUTLINE}
      >
        {t('login')}
      </Button>
    </div>
  );
};

export default LoginForm;

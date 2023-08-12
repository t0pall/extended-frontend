import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const handleReload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Something went wrong')}</p>
      <Button
        type="button"
        onClick={handleReload}
        className={cls.button}
        theme={ButtonTheme.CLEAR}
      >
        {t('Reload page')}
      </Button>
    </div>
  );
});

export default PageError;

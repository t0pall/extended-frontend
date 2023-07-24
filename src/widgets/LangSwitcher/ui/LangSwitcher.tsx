import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();
  const toggleLang = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      type="button"
      theme={ButtonTheme.CLEAR}
      onClick={toggleLang}
      className={classNames('', {}, [className])}
    >
      {short ? t('ShortLanguage') : t('Language')}
    </Button>
  );
};

export default LangSwitcher;

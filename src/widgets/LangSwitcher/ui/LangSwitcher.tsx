import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggleLang = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLang}
      className={classNames(cls.Button, {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};

export default LangSwitcher;

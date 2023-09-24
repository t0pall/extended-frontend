import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import cls from './{{pascalCase}}.module.scss';
import { useTranslation } from 'react-i18next';

interface {{pascalCase}}Props {
  className?: string;
}

const {{pascalCase}}: FC<{{pascalCase}}Props> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.{{pascalCase}}, {}, [className])}>
      
    </div>
  );
};

export default {{pascalCase}};

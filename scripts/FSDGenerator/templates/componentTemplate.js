module.exports = (componentName) => `import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './${componentName}.module.scss';

interface ${componentName}Props {
  className?: string;
}

const ${componentName}: FC<${componentName}Props> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.${componentName}, {}, [className])}>
      
    </div>
  );
};

export default memo(${componentName});
`;

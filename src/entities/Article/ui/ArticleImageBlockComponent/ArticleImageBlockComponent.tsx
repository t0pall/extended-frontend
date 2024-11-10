import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  block: ArticleImageBlock;
  className?: string;
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({ block, className }) => {
  useTranslation();
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img className={cls.image} src={block.src} alt={block.title} />
      {block.title && <Text paragraph={block.title} />}
    </div>
  );
};

export default memo(ArticleImageBlockComponent);

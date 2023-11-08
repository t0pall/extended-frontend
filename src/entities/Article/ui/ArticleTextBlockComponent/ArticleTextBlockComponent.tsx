import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
  block: ArticleTextBlock;
  className?: string;
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({
  block,
  className,
}) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text className={cls.title} title={block.title} />}
      {block.paragraphs.map((paragraph, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Text className={cls.paragraph} paragraph={paragraph} key={index} />
      ))}
    </div>
  );
};

export default memo(ArticleTextBlockComponent);

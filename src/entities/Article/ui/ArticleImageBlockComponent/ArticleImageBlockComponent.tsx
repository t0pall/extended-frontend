import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  block: ArticleImageBlock;
  className?: string;
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({
  block,
  className,
}) => {
  useTranslation();
  return (
    <VStack align="center" className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} />
      {block.title && <Text paragraph={block.title} />}
    </VStack>
  );
};

export default memo(ArticleImageBlockComponent);

import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import Code from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  block: ArticleCodeBlock;
  className?: string;
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({ block, className }) => (
  <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
    <Code text={block.code} />
  </div>
);

export default memo(ArticleCodeBlockComponent);

import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from 'shared/ui/Icon/Icon';
import Text from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import Card from 'shared/ui/Card/Card';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListItemProps {
  article: Article;
  view: ArticleView;
  className?: string;
}

const ArticleListItem: FC<ArticleListItemProps> = ({ article, view, className }) => {
  const { t } = useTranslation('articles', { keyPrefix: 'articles' });

  if (view === ArticleView.BIG) {
    return (
      <li className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={t('Cover image')} className={cls.img} />
          <Text paragraph={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <Text paragraph={article.types?.join(', ')} className={cls.types} />
          <Icon Svg={EyeIcon} />
          <Text paragraph={article.views?.toString()} className={cls.views} />
        </div>
        <Text title={article.title} />
      </li>
    );
  }

  return (
    <li className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={t('Cover image')} className={cls.img} />
          <Text paragraph={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <Text paragraph={article.types?.join(', ')} className={cls.types} />
          <Icon Svg={EyeIcon} className={cls.icon} />
          <Text paragraph={article.views?.toString()} className={cls.views} />
        </div>
        <Text title={article.title} />
      </Card>
    </li>
  );
};

export default memo(ArticleListItem);

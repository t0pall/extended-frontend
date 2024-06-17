import { classNames } from 'helpers/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from 'shared/ui/Icon/Icon';
import Text from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import Card from 'shared/ui/Card/Card';
import Avatar from 'shared/ui/Avatar/Avatar';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  article: Article;
  view: ArticleView;
  className?: string;
}

const ArticleListItem: FC<ArticleListItemProps> = ({ article, view, className }) => {
  const { t } = useTranslation('articles', { keyPrefix: 'articles' });
  const navigate = useNavigate();

  const handleOpenArticle = useCallback(() => {
    navigate(AppRoutes.ARTICLE_DETAILS + article.id);
  }, [article.id, navigate]);

  const types = <Text paragraph={article.types?.join(', ')} className={cls.types} />;
  const createdAt = <Text paragraph={article.createdAt} className={cls.date} />;
  const img = <img src={article.img} alt={t('Cover image')} className={cls.img} />;
  const views = (
    <>
      <Icon Svg={EyeIcon} className={cls.icon} />
      <Text paragraph={article.views?.toString()} className={cls.views} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    return (
      <li className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user?.avatar} />
            <Text paragraph={article.user?.username} className={cls.username} />
            {createdAt}
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          {img}
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <Button type="button" theme={ButtonTheme.OUTLINE} onClick={handleOpenArticle}>{t('Read More')}</Button>
            {views}
          </div>
        </Card>
      </li>
    );
  }

  return (
    <li
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card} onClick={handleOpenArticle}>
        <div className={cls.imageWrapper}>
          {img}
          {createdAt}
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text title={article.title} className={cls.title} />
      </Card>
    </li>
  );
};

export default memo(ArticleListItem);

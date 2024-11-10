import { classNames } from 'helpers/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/articleDetailsPageSelectors';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('articles', { keyPrefix: 'articles' });
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const handleBackToList = useCallback(() => {
    navigate(AppRoutes.ARTICLES);
  }, [navigate]);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button
        type="button"
        theme={ButtonTheme.OUTLINE}
        onClick={handleBackToList}
      >
        {t('Back to list')}
      </Button>
      {canEdit && (
        <Button
          type="button"
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={() => navigate(`${AppRoutes.ARTICLE_DETAILS}${article?.id}/edit`)}
        >
          {t('Edit article')}
        </Button>
      )}
    </div>
  );
};

export default memo(ArticleDetailsPageHeader);

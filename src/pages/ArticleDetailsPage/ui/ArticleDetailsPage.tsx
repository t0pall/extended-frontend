import { classNames } from 'helpers/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Page } from 'widgets/Page';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleDetailsCommentsEntities } from '../model/slice/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/articleDetailsCommentsSelectors';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { getArticleDetailsRecommendationsEntities }
  from '../model/slice/articleDetailsRecommendations/articleDetailsRecommendations';
import { getArticleDetailsRecommendationsIsLoading } from '../model/selectors/articleDetailsRecommendationsSelectors';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations';
import { ArticleDetailsPageReducer } from '../model/slice';
import ArticleDetailsPageHeader from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: ArticleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('articles', { keyPrefix: 'articles' });
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleDetailsCommentsEntities.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const recommendations = useSelector(
    getArticleDetailsRecommendationsEntities.selectAll,
  );
  const recommendationsIsLoading = useSelector(
    getArticleDetailsRecommendationsIsLoading,
  );

  const handleSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  }, []);

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          paragraph={t('Article is not found')}
        />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Related articles')} />
        <ArticleList
          className={cls.recommendations}
          target="_blank"
          articles={recommendations}
          isLoading={recommendationsIsLoading}
        />
        <Text className={cls.commentTitle} title={t('Comments')} />
        <AddCommentForm
          className={cls.addCommentForm}
          handleSendComment={handleSendComment}
        />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);

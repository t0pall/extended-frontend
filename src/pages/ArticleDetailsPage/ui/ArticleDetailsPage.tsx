import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import Text from 'shared/ui/Text/Text';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleDetailsPage.module.scss';
import {
  articleDetailsCommentsReducer,
  getArticleDetailsCommentsEntities,
} from '../model/slice/articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from '../model/selectors/articleDetailsCommentsSelectors';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('articles', { keyPrefix: 'articles' });
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleDetailsCommentsEntities.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const commentsError = useSelector(getArticleDetailsCommentsError);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, []);

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Article is not found')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Comments')} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);

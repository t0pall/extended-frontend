import { classNames } from 'helpers/classNames/classNames';
import { useSelector } from 'react-redux';
import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetailsSelectors';

interface ArticleDetailsProps {
  id: string;
  className?: string;
}

const reducers: ReducersList = { articleDetails: articleDetailsReducer };

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
  ({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('articles', { keyPrefix: 'articles' });
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    let content;

    if (isLoading) {
      content = <Text paragraph={t('Articles')} />;
    } else if (error) {
      content = <Text theme={TextTheme.ERROR} align={TextAlign.CENTER} paragraph={t('Article is not found')} />;
    } else {
      content = <Text theme={TextTheme.ERROR} align={TextAlign.CENTER} paragraph={article?.img} />;
    }

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
          {content}
        </div>
      </DynamicModuleLoader>
    );
  },
);

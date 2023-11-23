import { classNames } from 'helpers/classNames/classNames';
import { useSelector } from 'react-redux';
import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import Text, { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Avatar from 'shared/ui/Avatar/Avatar';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import CalendarIcon from 'shared/assets/icons/calendar-icon.svg';
import Icon from 'shared/ui/Icon/Icon';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetailsSelectors';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  id: string;
  className?: string;
}

const reducers: ReducersList = { articleDetails: articleDetailsReducer };

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
  ({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('articles', { keyPrefix: 'articles' });
    const dispatch = useAppDispatch();
    useInitialEffect(() => {
      dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        );
      default:
        return null;
      }
    }, []);

    let content;

    if (isLoading) {
      content = (
        <>
          <Skeleton
            className={cls.avatar}
            borderRadius={100}
            height={200}
            width={200}
          />
          <Skeleton className={cls.title} width={300} height={32} />
          <Skeleton className={cls.skeleton} width={600} height={24} />
          <Skeleton className={cls.skeleton} width="100%" height={200} />
          <Skeleton className={cls.skeleton} width="100%" height={200} />
        </>
      );
    } else if (error) {
      content = (
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          paragraph={t('Article is not found')}
        />
      );
    } else {
      content = (
        <>
          <div className={cls.avatarWrapper}>
            <Avatar className={cls.avatar} src={article?.img} size={200} />
          </div>
          <Text
            className={cls.title}
            size={TextSize.L}
            title={article?.title}
            paragraph={article?.subtitle}
          />
          <div className={cls.articleInfo}>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Text paragraph={String(article?.views)} />
          </div>
          <div className={cls.articleInfo}>
            <Icon Svg={CalendarIcon} className={cls.icon} />
            <Text paragraph={article?.createdAt} />
          </div>
          {article?.blocks?.map(renderBlock)}
        </>
      );
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

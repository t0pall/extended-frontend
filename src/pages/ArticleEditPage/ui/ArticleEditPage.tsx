import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }) => {
  const { id } = useParams<{id: string}>();
  const isEditMode = Boolean(id);

  return (
    <div className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEditMode ? `Editing article with id = ${id}` : 'New article'}
    </div>
  );
};

export default memo(ArticleEditPage);

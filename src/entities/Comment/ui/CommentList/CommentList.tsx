import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/Comment';
import CommentCard from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList: FC<CommentListProps> = ({
  className,
  comments,
  isLoading,
}) => {
  const { t } = useTranslation('main', { keyPrefix: 'main' });

  const Loaders = (
    <>
      <CommentCard isLoading />
      <CommentCard isLoading />
      <CommentCard isLoading />
    </>
  );

  const Comments = comments?.length ? (
    comments.map((comment) => (
      <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />
    ))
  ) : (
    <Text paragraph={t('There are no comments yet')} />
  );

  return (
    <VStack max gap="16" className={classNames(cls.CommentList, {}, [className])}>
      {isLoading ? Loaders : Comments}
    </VStack>
  );
};

export default memo(CommentList);

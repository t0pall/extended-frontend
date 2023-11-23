import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from 'shared/ui/Avatar/Avatar';
import Text, { TextSize } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/Comment';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

const CommentCard: FC<CommentCardProps> = ({
  className,
  comment,
  isLoading,
}) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className, cls.CommentCardSkeleton])}>
        <div className={cls.header}>
          <Skeleton height={30} width={30} borderRadius={100} />
          <Skeleton height={10} width={100} />
        </div>
        <Skeleton height={50} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        <Avatar size={30} src={comment?.user.avatar} />
        <Text title={comment?.user.username} size={TextSize.S} />
      </div>
      <Text paragraph={comment?.text} />
    </div>
  );
};

export default memo(CommentCard);

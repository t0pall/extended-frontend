import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from 'shared/ui/Avatar/Avatar';
import Text, { TextSize } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import AppLink from 'shared/ui/AppLink/AppLink';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { HStack, VStack } from 'shared/ui/Stack';
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
  useTranslation();

  const CommentSkeleton = (
    <>
      <HStack gap="8">
        <Skeleton height={30} width={30} borderRadius={100} />
        <Skeleton height={10} width={100} />
      </HStack>
      <Skeleton height={50} />
    </>
  );

  const Comment = (
    <>
      <AppLink to={`${AppRoutes.PROFILE}${comment?.user.id}`}>
        <HStack gap="8">
          <Avatar size={30} src={comment?.user.avatar} />
          <Text title={comment?.user.username} size={TextSize.S} />
        </HStack>
      </AppLink>
      <Text paragraph={comment?.text} />
    </>
  );

  return (
    <VStack
      gap="8"
      className={classNames(cls.CommentCard, { [cls.loading]: isLoading }, [
        className,
      ])}
    >
      {isLoading ? CommentSkeleton : Comment}
    </VStack>
  );
};

export default memo(CommentCard);

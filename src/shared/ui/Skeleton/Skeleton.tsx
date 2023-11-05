import { classNames } from 'helpers/classNames/classNames';
import { CSSProperties, FC, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: number;
}

const Skeleton: FC<SkeletonProps> = ({
  className,
  height,
  width,
  borderRadius,
}) => {
  const styles: CSSProperties = {
    height,
    width,
    borderRadius,
  };

  return (
    <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
  );
};

export default memo(Skeleton);

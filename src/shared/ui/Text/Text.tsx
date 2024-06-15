import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string;
  paragraph?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    title,
    paragraph,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <p className={cls.title}>{title}</p>}
      {paragraph && <p className={cls.paragraph}>{paragraph}</p>}
    </div>
  );
});

export default Text;

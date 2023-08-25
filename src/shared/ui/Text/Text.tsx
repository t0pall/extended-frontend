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

interface TextProps {
  className?: string;
  title?: string;
  paragraph?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    title,
    paragraph,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
      <p className={cls.title}>{title}</p>
      <p className={cls.paragraph}>{paragraph}</p>
    </div>
  );
});

export default Text;

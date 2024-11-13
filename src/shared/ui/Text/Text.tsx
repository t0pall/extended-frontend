import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
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

type HeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHTag: Record<TextSize, HeaderTag> = {
  size_s: 'h3',
  size_m: 'h2',
  size_l: 'h1',
};

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

  const HTag = mapSizeToHTag[size];

  return (
    <div
      className={classNames(cls.Text, {}, [
        className,
        cls[theme],
        cls[align],
        cls[size],
      ])}
    >
      {title && <HTag className={cls.title}>{title}</HTag>}
      {paragraph && <p className={cls.paragraph}>{paragraph}</p>}
    </div>
  );
});

export default Text;

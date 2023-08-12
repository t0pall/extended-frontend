import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
   className?: string;
   title?: string;
   paragraph?: string;
   theme?: TextTheme;
}

const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className, title, paragraph, theme = TextTheme.PRIMARY,
  } = props;
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      <p className={cls.title}>{title}</p>
      <p className={cls.paragraph}>{paragraph}</p>
    </div>
  );
});

export default Text;

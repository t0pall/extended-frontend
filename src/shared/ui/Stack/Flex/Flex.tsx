import { classNames } from 'helpers/classNames/classNames';
import {
  forwardRef,
  HTMLAttributes,
} from 'react';
import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32' | '64';

const justifyClasses: Record<FlexJustify, string> = {
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
  start: cls.justifyStart,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
  64: cls.gap64,
};

export interface FlexProps
  extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  justyfy?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    children,
    className,
    justyfy = 'start',
    align = 'start',
    direction = 'row',
    gap,
    max = true,
  } = props;

  const classes = classNames(
    cls.Flex,
    {
      [cls.max]: max,
    },
    [
      className,
      justifyClasses[justyfy],
      alignClasses[align],
      directionClasses[direction],
      gap && gapClasses[gap],
    ],
  );

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
});

export default Flex;

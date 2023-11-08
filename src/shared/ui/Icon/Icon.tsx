import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const Icon: FC<IconProps> = ({ Svg, className }) => (
  <Svg className={classNames(cls.Icon, {}, [className])} />
);

export default memo(Icon);

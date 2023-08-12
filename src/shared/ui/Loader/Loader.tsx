import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = memo(({ className }: LoaderProps) => (
  <div className={classNames('lds-ripple', {}, [className])}>
    <div />
    <div />
  </div>
));

export default Loader;

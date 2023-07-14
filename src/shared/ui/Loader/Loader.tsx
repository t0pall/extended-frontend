import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames('lds-ripple', {}, [className])}>
    <div />
    <div />
  </div>
);

export default Loader;

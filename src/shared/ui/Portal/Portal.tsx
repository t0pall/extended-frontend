import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  node?: HTMLElement;
}

const Portal: FC<PortalProps> = (props: PortalProps) => {
  const { children, node = document.body } = props;
  return createPortal(children, node);
};

export default Portal;

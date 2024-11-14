import { forwardRef } from 'react';
import Flex, { type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = forwardRef<HTMLDivElement, VStackProps>((props, ref) => (
  <Flex
    {...props}
    ref={ref}
    direction="column"
  />
));

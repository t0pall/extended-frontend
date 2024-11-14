import { forwardRef } from 'react';
import Flex, { type FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = forwardRef<HTMLDivElement, HStackProps>((props, ref) => (
  <Flex {...props} ref={ref} direction="row" />
));

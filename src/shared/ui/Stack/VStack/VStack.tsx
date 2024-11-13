import { FC } from 'react';
import Flex, { type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack: FC<VStackProps> = (props) => (
  <Flex
    {...props}
    direction="column"
  />
);

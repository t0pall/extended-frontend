import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';

const styleDecorator = (StoryComponent: StoryFn) => <StoryComponent />;

export default styleDecorator;

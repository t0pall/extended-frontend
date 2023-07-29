import type { Preview } from '@storybook/react';
import styleDecorator from '../../src/shared/config/storybook/decorators/styleDecorator';
import themeDecorator from '../../src/shared/config/storybook/decorators/themeDecorator';
import providersDecorator from '../../src/shared/config/storybook/decorators/providersDecorator';
import { Theme } from '../../src/app/providers/themeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [styleDecorator, themeDecorator(Theme.LIGHT), providersDecorator],
};

export default preview;

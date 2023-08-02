/* eslint-disable max-len */
import type { Preview } from '@storybook/react';
import styleDecorator from '../../src/shared/config/storybook/decorators/styleDecorator';
import themeDecorator from '../../src/shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from '../../src/app/providers/themeProvider';
import StateDecorator from '../../src/shared/config/storybook/decorators/StateDecorator';
import RouterDecorator from '../../src/shared/config/storybook/decorators/RouterDecorator';
import I18nDecorator from '../../src/shared/config/storybook/decorators/I18nDecorator';

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
  decorators: [
    styleDecorator,
    themeDecorator(Theme.LIGHT),
    I18nDecorator,
    StateDecorator(),
    RouterDecorator,
  ],
};

export default preview;

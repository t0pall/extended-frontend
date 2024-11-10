import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

const I18nDecorator = (StoryComponent: StoryFn) => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="">
      <StoryComponent />
    </Suspense>
  </I18nextProvider>
);

export default I18nDecorator;

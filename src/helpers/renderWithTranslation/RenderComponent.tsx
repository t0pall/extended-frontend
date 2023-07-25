import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface RenderComponentOptions {
  route?: string;
}

const RenderComponent = (
  component: ReactNode,
  options: RenderComponentOptions = {},
) => {
  const { route = '/' } = options;

  render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
    </MemoryRouter>,
  );
};

export default RenderComponent;

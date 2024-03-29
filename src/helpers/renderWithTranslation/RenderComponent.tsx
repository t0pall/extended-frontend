import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface RenderComponentOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

const RenderComponent = (
  component: ReactNode,
  options: RenderComponentOptions = {},
) => {
  const { route = '/', initialState } = options;

  render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};

export default RenderComponent;

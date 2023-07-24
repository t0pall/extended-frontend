import { render } from 'react-dom';
import App from 'app/app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/themeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);

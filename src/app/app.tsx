import { classNames } from 'helpers/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useEffect } from 'react';
import 'app/styles/index.scss';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

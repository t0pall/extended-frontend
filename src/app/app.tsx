import { classNames } from 'helpers/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { AppRouter } from './providers/router';
import 'app/styles/index.scss';
import Modal from 'shared/ui/Modal/Modal';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Button type="button" onClick={() => setIsOpen(true)} theme={ButtonTheme.CLEAR}>Модалка</Button>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
        <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}  />
      </Suspense>
    </div>
  );
};

export default App;

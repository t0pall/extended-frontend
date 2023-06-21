import { Link } from 'react-router-dom';
import 'app/styles/index.scss';
import { classNames } from 'helpers/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <button onClick={toggleTheme}>Сменить тему</button>
      <AppRouter />
    </div>
  );
};

export default App;

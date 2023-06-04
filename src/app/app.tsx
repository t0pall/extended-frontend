import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "app/styles/index.scss";
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "app/providers/themeProvider";
import { MainPage } from "pages/mainPage";
import { AboutPage } from "pages/aboutPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

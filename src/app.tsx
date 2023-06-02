import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { MainPageAsync } from "./pages/mainPage/mainPage.async";
import { AboutPageAsync } from "./pages/aboutPage/aboutPage.async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./index.scss";
import { MainPageAsync } from "./pages/mainPage/mainPage.async";
import { AboutPageAsync } from "./pages/aboutPage/aboutPage.async";

const App = () => {
  return (
    <div className="app">
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
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

import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";

import { Landing, Social, Navigation, Spinner } from "./components";
import {
  NSDPY,
  TamGiang,
  CodePen,
  Flask,
  Welcome,
  Snake,
  Underdog,
  Kagyoaid,
} from "./pages";

import "./app.css";

const App = () => {
  const [firstVisit, setFirstVisit] = useLocalStorage("firstVisit", true);
  useEffect(() => setFirstVisit(true), [setFirstVisit]);

  return (
    // TODO: is it better to wrap it here with the pageClass div (relative position) or in the dic in index.html?
    // this is to make the cover element (absolute position) appear on the top of all the other elements
    <div className="pageClass">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Landing firstVisit={firstVisit} setFirstVisit={setFirstVisit} />
          }
        />
        <Route path="projects">
          <Route path="NSDPY" element={<NSDPY />} />
          <Route path="TamGiang" element={<TamGiang />} />
          <Route path="CodePen" element={<CodePen />} />
          <Route path="Flask" element={<Flask />} />
          <Route path="CSS3" element={<Welcome />} />
          <Route path="react" element={<Spinner />} />
          <Route path="snake" element={<Snake />} />
          <Route path="Underdogdevs" element={<Underdog />} />
          <Route path="Kagyoaid" element={<Kagyoaid />} />
        </Route>
      </Routes>
      <Social />
    </div>
  );
};

export default App;

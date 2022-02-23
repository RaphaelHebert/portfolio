import { useEffect } from "react";
import {
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import useLocalStorage from "./hooks/useLocalStorage"


import Social from "./components/social";
import Landing from "./components/landing";
import NSDPY from "./components/projects/NSDPY";
import TamGiang from "./components/projects/TamGiang";
import CodePen from "./components/projects/CodePen";
import Flask from "./components/projects/Flask";

import Navigation from './components/Navigation';
import './app.css';


const App = () => {

  const [ firstVisit, setFirstVisit ] = useLocalStorage("firstVisit", true) 
  useEffect(() => setFirstVisit(true),[])

  return (
    // TODO: is it better to wrap it here with the pageClass div (relative position) or in the dic in index.html?
    // this is to make the cover element (absolute position) appear on the top of all the other elements
    <div className="pageClass">
      <Routes>
        <Route path="/" element={<Landing firstVisit={firstVisit} setFirstVisit={setFirstVisit}/>} />
        <Route path="projects" >
          <Route path="NSDPY" element={<NSDPY />} />
          <Route path="TamGiang" element={<TamGiang />} />
          <Route path="CodePen" element={<CodePen />} />
          <Route path="Flask" element={<Flask />} />
        </Route>
      </Routes>
      <Social />
    </div>
  );
}

export default App;

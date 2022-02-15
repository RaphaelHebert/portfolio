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
import TamGiang from "./components/projects/TamGiang"

import './mainPage.css'
import Navigation from './components/Navigation'
 
function App() {

  const [ firstVisit, setFirstVisit ] = useLocalStorage("firstVisit", true) 
  useEffect(() => setFirstVisit(true),[])

  return (
    // TODO: is it better to wrap it here with the pageClass div (relative position) or in the dic in index.html?
    // this is to make the cover element (absolute position) appear on the top of all the other elements
    <div className="pageClass">
      {!firstVisit && <Navigation/>}
      <Routes>
        <Route path="/" element={<Landing firstVisit={firstVisit} setFirstVisit={setFirstVisit}/>} />
        <Route path="projects" >
          <Route path="NSDPY" element={<NSDPY />} />
          <Route path="TamGiang" element={<TamGiang />} />


        </Route>
      </Routes>
      <Social />
    </div>
  );
}

export default App;

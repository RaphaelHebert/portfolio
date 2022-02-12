import {
  Route,
  Routes,
  Link,
} from 'react-router-dom';

import Social from "./components/social";
import Landing from "./components/landing";
import NSDPY from "./components/projects/NSDPY";

import './mainPage.css'

function App() {
  return (
    // TODO: is it better to wrap it here with the pageClass div (relative position) or in the dic in index.html?
    // this is to make the cover element (absolute position) appear on the top of all the other elements
    <div className="pageClass">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="projects" >
          <Route path="NSDPY" element={<NSDPY />} />
        </Route>
      </Routes>
      <Social />
    </div>
  );
}

export default App;

import {
  Route,
  Routes,
  Link,
} from 'react-router-dom';

import Social from "./components/social";
import Landing from "./components/landing";
import NSDPY from "./components/projects/NSDPY";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="projects" >
          <Route path="NSDPY" element={<NSDPY />} />
        </Route>
      </Routes>
      <Social />
    </>
  );
}

export default App;

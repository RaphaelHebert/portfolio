import {
  Route,
  Routes,
  Link,
} from 'react-router-dom';

import Social from './components/social';
import Landing from "./components/landing";


function App() {
  return (
    <>
      <Social />
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
    </>
  );
}

export default App;

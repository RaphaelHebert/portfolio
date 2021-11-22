import {
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

import landing from "./components/landing";


function App() {
  return (
    <>
    <Switch>
      <Route path="/" render={landing} />
    </Switch>
    <div className="App">
      Hello! this is Raphael...
    </div>
    </>
  );
}

export default App;

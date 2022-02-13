import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './App';
import reportWebVitals from './reportWebVitals';

//create a reducer here for now
// TODO: move the reducer to its own folder and import it
const reducer = () => {
  return(
    {
      firstVisit: true
    }
  )
};

// create redux store
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

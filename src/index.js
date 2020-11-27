import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './conteiners/App';
import Lista from './conteiners/Lista';
//import Home from './conteiners/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Lista />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

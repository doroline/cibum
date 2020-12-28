import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalStyles from './globalStyles';
//import App from './conteiners/App';
//import Lista from './conteiners/Lista';
//import AddLista from './conteiners/AddLista';
//import Clienti from './conteiners/Clienti';
//import Clienti from './conteiners/ClientiMenu';
//import Drawer from './conteiners/Drawer';
//import ClientiLettura from './conteiners/ClientiLettura';
//import Clienti from './conteiners/ClientiLetturaObj';
//import Clienti from './conteiners/ClientiLetturaEScritturaObj';
//import Aziende from './conteiners/Aziende';
//import Variabili from './conteiners/Variabili';
import Inizio from './conteiners/Inizio';
//import HomeDb from './conteiners/HomeDb';
//import Home from './conteiners/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <>
    <Inizio />
    <GlobalStyles />
  </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

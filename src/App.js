import logo from './logo.svg';
import './App.css';

function App() {
  console.log('prova console log');
  let pippo = null;
  debugger;
  pippo = "mariuccio";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Ecco la mia prima app in react
        </p>
        <a
          className="App-link"
          href="https://www.condesign.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          condesign
        </a>
      </header>
    </div>
  );
}

export default App;

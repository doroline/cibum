import logo from './assets/soloLogo.png';
import logoReact from './logo.svg';
import './App.css';

function App() {
  console.log('prova console log');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h2 id="titolo1">conDesign</h2>
        Web Agency
        </p>
        <p className="testoWhite">
          Sviluppo di Siti Web e App multimediali
        </p>
        <a
          className="App-link"
         href="https://www.condesign.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          condesign
        </a>
        <h4>Power by React</h4>
        <img src={logoReact} className="App-logo-react" alt="logo" />
      </header>
    </div>
  );
}

export default App;

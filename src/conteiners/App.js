import {Component, useState} from 'react';
import './App.css';
import Img from '../components/Img';
import Lingue from '../components/Lingue';
import bandieraIt from '../assets/bandiera-it.png';
import bandieraEn from '../assets/bandiera-en.png';
import bandieraEs from '../assets/bandiera-es.png';

function App() {
  const [linguaPagina, setCurrentLingua] = useState(<Lingue lingua="it" />);
  const [currentLabel, setCurrentLabel] = useState("Pinco Pallino");
  const [showImg, setShowImg] = useState(false);

  const gestisciClick = () => {
    console.log('HA CLICCATO');
    setCurrentLabel("Hai Cliccato");
    setShowImg(true);
  }

  const nascondiClick = () => {
    console.log('HA CLICCATO DI NUOVO');
    setShowImg(false);
  }
  const testoEn = () =>{
    setCurrentLingua(<Lingue lingua="en" />);
  }
  const testoIt = () =>{
    setCurrentLingua(<Lingue lingua="it" />);
  }
  const testoEs = () =>{
    setCurrentLingua(<Lingue lingua="es" />);
  }
  return (
    <div className="App">
      <header className="App-header">
        {showImg &&(
          <>
            <Img 
              label={currentLabel}
            />
            <div onClick={nascondiClick} className="btn">
            CLICCA e NASCONDI
            </div>
        </>
        )}
       { !showImg &&(<div onClick={gestisciClick} className="btn">
        CLICCA e SCOPRI
      </div>)}
         
              <div>{linguaPagina}</div>
              <div>
              <img src={bandieraIt} alt="bandieraIt" onClick={testoIt} className="btn2"/>
              <img src={bandieraEn} alt="bandieraEn" onClick={testoEn} className="btn2"/>
              <img src={bandieraEs} alt="bandieraEs" onClick={testoEs} className="btn2"/>
          </div>
      </header>
      
    </div>
  );
}

export default App;

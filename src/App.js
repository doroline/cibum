import {useState} from 'react';
import './App.css';
import Img from './Img';

function App() {

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

      </header>
      
    </div>
  );
}

export default App;

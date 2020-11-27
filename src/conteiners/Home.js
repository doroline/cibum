import {Component, useState} from 'react';
import ScegliLingua from '../components/ScegliLingua';
import BarraNavigazione from '../components/BarraNavigazione';
import './App.css';

function Home() {
    const [currentLingua, setCurrentLingua] = useState("it");    
  return (
    <div className="App">
      <header className="App-header">
   <ScegliLingua setLingua={setCurrentLingua}/>
      </header>
      <footer>
          <BarraNavigazione lingua={currentLingua}/>
      </footer>
    </div>
  );
}

export default Home;

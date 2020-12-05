import { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';
import './App.css';

firebase.initializeApp(firebaseConfig); // qui inizializzo il db

function HomeDb() {

    const [chiaviRicette, setChiaviRicette] = useState([]); // creo la super variabile chiviRicette e la definisco come un array per ricevere tanti valori
    const [oggettoRicette, setOggettoRicette] = useState({});

    const mostraRicette = () => {
        const tabellaRicette = firebase.database().ref('/recipes'); // qui faccio puntare il valore di tabellaRicette alla 'tabella' recipes del db
        tabellaRicette.on("value", snapshot => { // qui l'attivo
            const ricetteOnLine = snapshot.val();
            const arrayRicette = Object.keys(ricetteOnLine);
            setOggettoRicette(ricetteOnLine); // cosi facendo abbiamo popolato anche l'oggetto ricette
            setChiaviRicette(arrayRicette);
        });
    }

    return (
        <div className="App">
            <header className="App-header" >
                <button variant="contained" onClick={() => mostraRicette()}>VISUALIZZA RICETTE</button>
                <div>
                <ul>
                    {chiaviRicette.map((chiaveCorrente, indice) => { // qui creo un ciclo dell'array chiaveCorrente con il metodo map
                        return (
                            <li key={indice}>
                            
                                <h6 style={{ marginBottom: "0px" }}>Categoria: {oggettoRicette.[chiaveCorrente].recipeCategory}</h6>
                                <strong style={{ color: "#8e5c1d", display: "block", marginBottom: "-20px" }}>{oggettoRicette.[chiaveCorrente].name}</strong>
                                <p style={{ color: "black"}}>{oggettoRicette.[chiaveCorrente].description}</p>
                                <img src={oggettoRicette.[chiaveCorrente].image.url} style={{ width: "50%" }}></img>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
            </header>
            
        </div>
    );
}

export default HomeDb;
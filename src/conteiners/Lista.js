import {Component, useState} from 'react';
import './App.css';

function Lista() {

    const [inputCorrente, setInputCorrente]= useState("");
    const [lista, setLista]= useState([]); // cosi facendo inizializzo la supervariabile lista come un array

    const gestisciOnChange = (evento) =>{
        setInputCorrente(evento.target.value);
    };
    const aggiungiElementoAllaLista = () =>{
        const listaAggiornata = [... lista];// con questi 3 punti gli dico di CLONARE tutto il contenuto dell array lista, avessimo dovuto clonare un oggetto sarebbe stata la setssa cosa ma nelle graffe {... pippo}
        listaAggiornata.push(inputCorrente);// aggiungo l'input corrente
        setLista(listaAggiornata); // modifico la nostra lista
        setInputCorrente("");
    };

    const personaggi = ['pippo', 'pluto', 'paperino'];
  return (
    <div className="App">
        <header className="App-header">
            <h4>scrivi cosa vuoi aggiungere alla lista:</h4>
            <input value={inputCorrente} onChange={(evento) => gestisciOnChange(evento)}/>

            <button type="button" onClick={() => aggiungiElementoAllaLista()}>AGGIUNGI</button>
            <div>ecco la tua lista:
                <ul>
                {lista.map((elemento, indice) => {
                        //il map ci permette di ciclare un array e di mostrare gli elementi che contieneù
                        return(
                            <li>{elemento}</li>
                        )
                    }
                )}

                </ul>
                <ul>
                {personaggi.map((personaggio) => {
                        //il map ci permette di ciclare un array e di mostrare gli elementi che contieneù
                        return(
                            <li>{personaggio}</li>
                        )
                    }
                )}

                </ul>
            </div>

        </header>
      
      </div>
  );
}

export default Lista;

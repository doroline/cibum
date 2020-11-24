import {Component, useState} from 'react';
import './App.css';

function Lista() {
//PARTE DEDICATA AL CAMBIO DI COLORE DELLO SFONDO
    const [coloreCorrente, setColoreCorrente]= useState("orange"); //imposto il colore di defaul su orange e lo preparo al cambio di stato
    const [nuovoColore, setNuovoColore]= useState(""); //creo una super variabile 'nuovoColore' che cambierà il suo stato quando si attiverà l'onChange sul campo input

    const salvaColore = (evento) =>{ // qui si attiva l'onChange e si prende il paramentro scritto nel campo e lo passa a setNuovoColore, che cambia lo stato a nuovoColore
    setNuovoColore(evento.target.value);
    };
    const cambiaColore = ()=>{ // qui si attiva l'onClick che va ad aggiornare lo stato di coloreCorrente con la super variabile nuovoColore
    setColoreCorrente(nuovoColore);
    };  


  //PARTE DEDICATA AL CAMBIO DI COLORE DEI TESTI
    const [coloreTestiCorrente, setColoreTestiCorrente]= useState("white"); //imposto il colore di defaul dei testi su bianco e lo preparo al cambio di stato
    const [nuovoColoreTesti, setNuovoColoreTesti]= useState(""); //creo una super variabile 'nuovoColoreTesti' che cambierà il suo stato quando si attiverà l'onChange sul campo input

    const salvaColoreTesti = (evento) =>{ // qui si attiva l'onChange e si prende il paramentro scritto nel campo e lo passa a setNuovoColore, che cambia lo stato a nuovoColore
    setNuovoColoreTesti(evento.target.value);
    };
    const cambiaColoreTesti = ()=>{ // qui si attiva l'onClick che va ad aggiornare lo stato di coloreCorrente con la super variabile nuovoColore
    setColoreTestiCorrente(nuovoColoreTesti);
    };


//PARTE DEDICATA ALLA CREAZIONE DELLA LISTA
    const [inputCorrente, setInputCorrente]= useState("");
    const [lista, setLista]= useState([]); // cosi facendo inizializzo la supervariabile lista come un array
    const gestisciOnChange = (evento) =>{
        setInputCorrente(evento.target.value);
    };
    const aggiungiElementoAllaLista = () =>{
        const listaAggiornata = [... lista];// con questi 3 punti gli dico di CLONARE tutto il contenuto dell array lista, avessimo dovuto clonare un oggetto sarebbe stata la setssa cosa ma nelle graffe {... pippo}
        listaAggiornata.push(inputCorrente);// aggiungo l'input corrente
        setLista(listaAggiornata); // modifico la nostra lista
        setInputCorrente(""); // svuoto la super variabile di inputCorrente
    };
  return (
    <div className="App">
        <header className="App-header"  style={{backgroundColor: coloreCorrente, color: coloreTestiCorrente} }>
                <div id="cambioColori">
                 <span>colore dello sfondo: </span>
                <input onChange={(evento) => salvaColore(evento)} className="campiTesto" />
                <button type="button"onClick={() => cambiaColore()} className="btn3" >SFONDO</button>

                <span>colore dei testi: </span>
                <input onChange={(evento) => salvaColoreTesti(evento)} className="campiTesto"/>
                <button type="button"onClick={() => cambiaColoreTesti()} className="btn3">TESTI</button>
                
                </div>

           <h4>Scrivi cosa vuoi aggiungere alla lista:</h4>
            <input value={inputCorrente} onChange={(evento) => gestisciOnChange(evento)}/>

            <button type="button" onClick={() => aggiungiElementoAllaLista()}>AGGIUNGI</button>
            <div>Ecco lista completa delle cose che hai scelto:
                <ul>
                {lista.map((elemento, indice) => {
                        //il map ci permette di ciclare un array e di mostrare gli elementi che contiene
                        return(
                            <li>{elemento}</li>
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

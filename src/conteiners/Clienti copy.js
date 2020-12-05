import { Component, useState, useEffect } from 'react'; // importo e aggiungo lo useEffect che ci permette di gestire i cicli di vita della nostra applicazione
import './App.css';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

function Clienti() {
    const [inputCorrente, setInputCorrente] = useState("");
   
    const [chiavi, setChiavi] = useState([]);
    const [nodo, setNodo] = useState({});
 
    useEffect(() => { 
        const riferimentoTabella = firebase.database().ref('/clienti'); 
        riferimentoTabella.on("value", (idTabella) => {  
            const idTabFirebase = idTabella.val(); 
 
            if (idTabFirebase) { 
                const idClienti = Object.keys(idTabFirebase); 
                setNodo(idTabFirebase); 
                setChiavi(idClienti);
            }
        });
    }, []); 
 


    const gestisciOnChange = (evento) => {
        setInputCorrente(evento.target.value);
    };
    const aggiungiElementoAllaLista = () => {
        const nuovaListaClienti = [...listaClienti];// con questi 3 punti gli dico di CLONARE tutto il contenuto dell array lista, avessimo dovuto clonare un oggetto sarebbe stata la setssa cosa ma nelle graffe {... pippo}
        nuovaListaClienti.push(inputCorrente);// aggiungo l'input corrente
        setListaClienti(nuovaListaClienti); // modifico la nostra lista
        setInputCorrente(""); // svuoto la super variabile di inputCorrente


        const riferimentoLista = firebase.database().ref('/clienti');
        riferimentoLista.set(nuovaListaClienti); // il set si usa per scrivere
    };
    return (
        <div className="App">
            <header className="App-header">

                <h4>Aggiungi un nuovo cliente</h4>
                <input id="outlined-basic" value={inputCorrente} onChange={(evento) => gestisciOnChange(evento)} variant="outlined" />
                <button variant="contained" onClick={() => aggiungiElementoAllaLista()} >AGGIUNGI</button>
                <div>Ecco i nostri clienti:
                <ul style={{ color: "black" }}>
                        {idClienti.map((elemento, indice) => {
                            console.log(elemento);
                            //il map ci permette di ciclare un array e di mostrare gli elementi che contiene
                            return (
                                <li key={indice}>
                                    <img src={oggettoClienti.[elemento].foto.url} style={{ width: "150px" }}></img>
                                    <br></br>
                                    {oggettoClienti.[elemento].nome} {oggettoClienti.[elemento].cognome}</li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </header>

        </div>
    );
}

export default Clienti;
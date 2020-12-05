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
                const id = Object.keys(idTabFirebase);
                setNodo(idTabFirebase);
                setChiavi(id);
            }
        });
    }, []);


    const gestisciOnChange = (evento) => {
        setInputCorrente(evento.target.value);
    };
    const aggiungiElementoAllaLista = () => {
        const nuovaLista = [...chiavi];
        nuovaLista.push(inputCorrente);// aggiungo l'input corrente
        setChiavi(nuovaLista); // modifico la nostra lista
        setInputCorrente(""); // svuoto la super variabile di inputCorrente

        const riferimentoLista = firebase.database().ref('/clienti');
        riferimentoLista.set(nuovaLista); // il set si usa per scrivere
    };
    return (
        <div className="App">
            <header className="App-header" style={{ color: "black" }}>

                <h4>Aggiungi un nuovo cliente</h4>
                <label>Nome:</label> <input value={inputCorrente} onChange={(evento) => gestisciOnChange(evento)} /><br />
                Cognome: <input value={inputCorrente} onChange={(evento) => gestisciOnChange(evento)} /><br />
                Città: <input value={inputCorrente} onChange={(evento) => gestisciOnChange(evento)} /><br />
                URL foto: <input value={inputCorrente} onChange={(evento) => gestisciOnChange(evento)} /><br />
                Alt foto: <input value={inputCorrente} onChange={(evento) => gestisciOnChange(evento)} /><br />
                <button onClick={() => aggiungiElementoAllaLista()} >AGGIUNGI CLIENTE</button>
                <div>Ecco i nostri clienti:
                <ul >
                        {chiavi.map((id, indice) => {
                            console.log(chiavi);
                            //il map ci permette di ciclare un array e di mostrare gli elementi che contiene
                            return (
                                <li key={indice}>
                                    <img src={nodo.[id].foto.url} style={{ width: "150px" }} alt={nodo.[id].alt} />
                                    <br />
                                    nome: {nodo.[id].nome} {nodo.[id].cognome}
                                    <br /> nato a {nodo.[id].citta}
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

export default Clienti;
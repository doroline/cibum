import { Component, useState, useEffect } from 'react'; // importo e aggiungo lo useEffect che ci permette di gestire i cicli di vita della nostra applicazione
import './App.css';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

function Clienti() {
    //const [inputCorrente, setInputCorrente] = useState("");
    const [inputCorrente, setInputCorrente] = useState({ url: '', nome: '', cognome: '', citta: '', alt: '' });



    //const [chiavi, setChiavi] = useState([]);
    const [nodo, setNodo] = useState([]); // qui ho tolto la  graffa e messo la quadra di array

    useEffect(() => {
        const riferimentoTabella = firebase.database().ref('/clienti');
        riferimentoTabella.on("value", (idTabella) => {
            const idTabFirebase = idTabella.val();

            if (idTabFirebase) {
                //const id = Object.keys(idTabFirebase);
                setNodo(idTabFirebase);
                //setChiavi(id);
            }
        });
    }, []);


    // const gestisciOnChange = (evento) => {
    //     setInputCorrente(evento.target.value);
    // };
    const gestisciOnChange = (evento) => {
        setInputCorrente({ ...inputCorrente, [evento.target.name]: evento.target.value });
    };
    const aggiungiElementoAllaLista = () => {
        // const nuovaLista = [...chiavi];
        // nuovaLista.push(inputCorrente);// aggiungo l'input corrente
        // setChiavi(nuovaLista); // modifico la nostra lista
        // setInputCorrente(""); // svuoto la super variabile di inputCorrente
        const nuovaLista = [...nodo];

        nuovaLista.push({
            ...inputCorrente,
            foto: { url: inputCorrente.url, alt: inputCorrente.alt }
        });// aggiungo l'input corrente
        setNodo(nuovaLista); // modifico la nostra lista
        setInputCorrente({ url: '', nome: '', cognome: '', citta: '', alt: '' });// svuoto la super variabile di inputCorrente

        const riferimentoLista = firebase.database().ref('/clienti');
        riferimentoLista.set(nuovaLista); // il set si usa per scrivere
    };
    return (
        <div className="App">
            <header className="App-header" style={{ color: "black" }}>

                <h4>Aggiungi un nuovo cliente</h4>
                <label>Nome:</label> <input value={inputCorrente.nome} name="nome" onChange={(evento) => gestisciOnChange(evento)} /><br />
                Cognome: <input value={inputCorrente.cognome} name="cognome" onChange={(evento) => gestisciOnChange(evento)} /><br />
                Città: <input value={inputCorrente.citta} name="citta" onChange={(evento) => gestisciOnChange(evento)} /><br />
                URL foto: <input value={inputCorrente.url} name="url" onChange={(evento) => gestisciOnChange(evento)} /><br />
                Alt foto: <input value={inputCorrente.alt} name="alt" onChange={(evento) => gestisciOnChange(evento)} /><br />
                <button onClick={() => aggiungiElementoAllaLista()} >AGGIUNGI CLIENTE</button>
                <div>Ecco i nostri clienti:
                <ul >
                        {nodo.map((id, indice) => {
                            //  console.log(chiavi);
                            //il map ci permette di ciclare un array e di mostrare gli elementi che contiene
                            return (
                                <li key={indice}>
                                    <img src={id.foto.url} style={{ width: "150px" }} alt={id.foto.alt} />
                                    <br />
                                    nome: {id.nome} {id.cognome}
                                    <br /> nato a {id.citta}
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
import { Component, useState, useEffect } from "react"; // importo e aggiungo lo useEffect che ci permette di gestire i cicli di vita della nostra applicazione
import Wrapper from "./AppWrapper";
import firebase from "firebase";
import firebaseConfig from "../firebaseConfig";

firebase.initializeApp(firebaseConfig);

function ClientiLetturaEScritturaObj() {
  const [nodo, setNodo] = useState([]); // qui definisco l'array che conterrà tutti i nodi principali trasformati in array
  const [tabella, setTabella] = useState({}); // qui creo un oggetto che si riempirà con tutti i valori della tabella del db

  useEffect(() => {
    const riferimentoTabella = firebase.database().ref("/clientiObj");
    riferimentoTabella.on("value", (tabellaDb) => {
      const tabFirebase = tabellaDb.val();
      const chiavi = Object.keys(tabFirebase); // creo una var "chiavi" e la riempio grazie all'Object.key con le chiavi, i nodi, principali della tabella del db definendola come se fosse un array ogni chiave

      if (tabFirebase) {
        // è un if che controlla se ci sono dati nella tabella
        setTabella(tabFirebase); // assegno all'oggetto "tabella" tutti i valori della tabella del db
        setNodo(chiavi); // assegno all'array "nodo" solo i valori dei nodi principali sotto forma di array
        console.log(chiavi);
      }
    });
  }, []);

// parte dedicata alla scrittura nel db di tipo oggetti
const [inputCorrente, setInputCorrente] = useState({
  nome: "",
  cognome: "",
  foto: "",
});

  const gestisciOnChange = (evento) => {
    setInputCorrente({
      ...inputCorrente,
      [evento.target.name]: evento.target.value,
    });
  };

  const aggiungiElementoAllaLista = () => {
    const nuovaLista = [...nodo];

    nuovaLista.push({
      ...inputCorrente,
    });
    setNodo(nuovaLista);
    setInputCorrente({ nome: "", cognome: "", foto: "" });

    const riferimentoLista = firebase.database().ref("/clientiObj");
    riferimentoLista.set(nuovaLista);
  };
  return (
    <div className="App">
      <header className="App-header" style={{ color: "black" }}>
        <div>
          Ecco i nostri clienti:
          <ul>
            {nodo.map((nodo, indice) => {
              return (
                <li key={indice}>
                  <img src={tabella[nodo].foto} style={{ width: "150px" }} />
                  <br />
                  nome: {tabella[nodo].nome} cognome: {tabella[nodo].cognome}
                </li>
              );
            })}
          </ul>
        </div>
        <>
          <h4>Aggiungi un nuovo cliente</h4>
          <label>Nome:</label>{" "}
          <input
            value={inputCorrente.nome}
            name="nome"
            onChange={(evento) => gestisciOnChange(evento)}
          />
          <br />
          Cognome:{" "}
          <input
            value={inputCorrente.cognome}
            name="cognome"
            onChange={(evento) => gestisciOnChange(evento)}
          />
          <br />
          URL foto:{" "}
          <input
            value={inputCorrente.foto}
            name="foto"
            onChange={(evento) => gestisciOnChange(evento)}
          />
          <br />
          <button className="btn" onClick={() => aggiungiElementoAllaLista()}>
            AGGIUNGI CLIENTE
          </button>
        </>
      </header>
    </div>
  );
}

export default ClientiLetturaEScritturaObj;

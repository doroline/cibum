import { Component, useState, useEffect } from "react"; // importo e aggiungo lo useEffect che ci permette di gestire i cicli di vita della nostra applicazione
import Wrapper from "./AppWrapper";
import firebase from "firebase";

import firebaseConfig from "../firebaseConfig";

firebase.initializeApp(firebaseConfig);

function Clienti() {
  //const [inputCorrente, setInputCorrente] = useState("");
  const [inputCorrente, setInputCorrente] = useState({
    url: "",
    nome: "",
    cognome: "",
    citta: "",
    alt: "",
  });

  //const [chiavi, setChiavi] = useState([]);
  const [nodo, setNodo] = useState([]); // qui ho tolto la  graffa e messo la quadra di array

  useEffect(() => {
    const riferimentoTabella = firebase.database().ref("/clienti");
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
    setInputCorrente({
      ...inputCorrente,
      [evento.target.name]: evento.target.value,
    });
  };
  const aggiungiElementoAllaLista = () => {
    const nuovaLista = [...nodo];
    const riferimentoLista = firebase.database().ref("/clienti");
    riferimentoLista.set(nuovaLista);
    
    nuovaLista.push({
      ...inputCorrente,
      foto: { url: inputCorrente.url, alt: inputCorrente.alt },
    });
    setNodo(nuovaLista);
    setInputCorrente({ url: "", nome: "", cognome: "", citta: "", alt: "" });

 
  };

  return (
    <Wrapper className="App">
      <header className="App-header">
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
        Città:{" "}
        <input
          value={inputCorrente.citta}
          name="citta"
          onChange={(evento) => gestisciOnChange(evento)}
        />
        <br />
        URL foto:{" "}
        <input
          value={inputCorrente.url}
          name="url"
          onChange={(evento) => gestisciOnChange(evento)}
        />
        <br />
        Alt foto:{" "}
        <input
          value={inputCorrente.alt}
          name="alt"
          onChange={(evento) => gestisciOnChange(evento)}
        />
        <br />
        <button className="btn" onClick={() => aggiungiElementoAllaLista()}>
          AGGIUNGI CLIENTE
        </button>
        <div>
          Ecco i nostri clienti:
          <ul>
            {nodo.map((cliente, indice) => {
              return (
                <li key={indice}>
                  <img
                    src={cliente.foto.url}
                    style={{ width: "150px" }}
                    alt={cliente.foto.alt}
                  />
                  <br />
                  nome: {cliente.nome} {cliente.cognome}
                  <br /> nato a {cliente.citta}
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </Wrapper>
  );
}

export default Clienti;

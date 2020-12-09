import { Component, useState, useEffect } from "react"; // importo e aggiungo lo useEffect che ci permette di gestire i cicli di vita della nostra applicazione
import Wrapper from "./AppWrapper";
import firebase from "firebase";
import firebaseConfig from "../firebaseConfig";

firebase.initializeApp(firebaseConfig);

function ClientiLettura() {
  const [nodo, setNodo] = useState([]);

  useEffect(() => {
    const riferimentoTabella = firebase.database().ref("/clienti");
    riferimentoTabella.on("value", (idTabella) => {
      const idTabFirebase = idTabella.val();

      if (idTabFirebase) {
        setNodo(idTabFirebase);
      }
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header" style={{ color: "black" }}>
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
    </div>
  );
}

export default ClientiLettura;

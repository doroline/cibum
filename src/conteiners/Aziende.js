import { Component, useState, useEffect } from "react"; // importo e aggiungo lo useEffect che ci permette di gestire i cicli di vita della nostra applicazione
import Wrapper from "./AppWrapper";
import firebase from "firebase";
import firebaseConfig from "../firebaseConfig";
import Button from '@material-ui/core/Button';

firebase.initializeApp(firebaseConfig);

function onUtenteLoggato(utenteLoggatoCallBack){
  // eseguirà questo codice del return, interno al metodo, quando l'utente si sarà loggato o sloggato
  return firebase.auth().onAuthStateChanged((utenteParametro) => {
    if (utenteParametro){ // così vuol dire che è loggato
      console.log('utenteParametro: ', utenteParametro); // cosi possiamo vedere quali dati ci passa firebase
      utenteLoggatoCallBack({
        loggato: true,
        nome: utenteParametro.displayName,
        email: utenteParametro.email,
        foto: utenteParametro.photoURL,
        uid: utenteParametro.uid,
      }); 
    }else{
      utenteLoggatoCallBack({
        loggato: false,
      }); 
    }
  })
};

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const loggatiConGoogle = () => {
  auth.signInWithPopup(provider);
};

const logout = () => {
  firebase.auth().signOut();

};


function Aziende() {

const [nodo, setNodo] = useState([]);
const [tabella, setTabella] = useState({});

const [utente, setUtente] = useState({loggato: false});

useEffect(() => {
  function utenteLoggatoCallBack(utenteObj){ // una CallBack è una chiamata ad una funzione, che dovrà avvenire soltanto ad un certo momento e non seguirà il normale flusso degli eventi, in questo caso si avvierà soltanto dopo che firebase ci avrà restituito il "loggato:true" al nostro parametro "utenteObj" e ci permetterà di invocare i cambi di stato anche al di fuori del nostro componente!
  setUtente(utenteObj); 
  }

    const riferimentoTabella = firebase.database().ref("/aziende");
    riferimentoTabella.on("value", (tabellaDb) => {
      const tabFirebase = tabellaDb.val();
      const chiavi = Object.keys(tabFirebase); // creo una var "chiavi" e la riempio grazie all'Object.key con le chiavi, i nodi, principali della tabella del db definendola come se fosse un array ogni chiave

      if (tabFirebase) {
        // è un if che controlla se ci sono dati nella tabella
        setTabella(tabFirebase); // assegno all'oggetto "tabella" tutti i valori della tabella del db
        setNodo(chiavi); // assegno all'array "nodo" solo i valori dei nodi principali sotto forma di array
       
      }
    });
    onUtenteLoggato(utenteLoggatoCallBack);
  }, []);


  useEffect(() => { // questo useEffect eseguirà il codice al suo interno, tutte le volte che lo stato di utente muterà, perchè abbiamo messo "utente" nelle quadre finali
    if(utente.uid){ // se esiste lo user ID, per cui l'utente è loggato
      const utenteReferenza = firebase.database().ref('/utenti/' + utente.uid);
      utenteReferenza.once("value",(utenteDb) => { // once è tipo "on" con la differenza che viene eseguita una volta sola
        const cloneUtenteDb = utenteDb.val(); // come prima cosa andiamo a leggere e prenderci tutti i valori, i nodi principali del DB per verificare se nel db c'è già un nodo con lo stesso uid  
        if(cloneUtenteDb){ // così verifico se l'utente già esiste
          return null; // ok allora non fare nulla
        } else { // se invece non esiste
          utenteReferenza.set({
            email: utente.email,
            nome: utente.nome,
            foto: utente.foto
          })
        }
      })
    }
  }, [utente])


    
    return (
        <div className="App">
          <header className="App-header" style={{ color: "black" }}>
          {utente.loggato && (
                <div>
                  Ciao <br />{utente.nome}{" "}
                  <img src={utente.foto} className="fotoUtente" />
                </div>
            )}
            {!utente.loggato && (
          <Button onClick={() => loggatiConGoogle()}>Accedi con Google</Button>
        )}
        {utente.loggato && (
          <div>
            <Button onClick={() => logout()}>ESCI</Button>
          </div>
        )}

            <div>
              Ecco le nostre Aziende
              <ul>
                {nodo.map((nodo, indice) => {
                  return (
                    <li key={indice}>
                      <img src={tabella[nodo].logo} style={{ width: "150px" }} />
                      <br />
                      nome Azienda: {tabella[nodo].nome} 
                      <br />
                      Anno azienda: {tabella[nodo].anno}
                      <br />
                      Descrizione: {tabella[nodo].descrizione}
                    </li>
                  );
                })}
              </ul>
            </div>
          </header>
        </div>
      );

  }
  
  export default Aziende;
  
import { Component, useState, useEffect} from "react"; 
//PARTE DI IMPORTAZIONI DEL MENU DRAWER
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
// importo e aggiungo lo useEffect che ci permette di gestire i cicli di vita della nostra applicazione
// FINE PRIMA PARTE

import Wrapper from "./AppWrapper";
import firebase from "firebase";

import firebaseConfig from "../firebaseConfig";

import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

firebase.initializeApp(firebaseConfig);


// STILI DEL DRAWER
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


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

    nuovaLista.push({
      ...inputCorrente,
      foto: { url: inputCorrente.url, alt: inputCorrente.alt },
    });
    setNodo(nuovaLista);
    setInputCorrente({ url: "", nome: "", cognome: "", citta: "", alt: "" });

    const riferimentoLista = firebase.database().ref("/clienti");
    riferimentoLista.set(nuovaLista);
  };

  const [isDrawerOpen, setIsDrawerOpen]=useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
  // SECONDA PARTE DEL MENU DRAWER
  // const classes = useStyles();
  // const [state, setState] = React.useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // });


  // const list = (anchor) => (
  //   <div
  //     className={clsx(classes.list, {
  //       [classes.fullList]: anchor === 'top' || anchor === 'bottom',
  //     })}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );
  // FINE SECONDA PARTE
  return (
    <Wrapper className="App">
     <div>
      
      
          <Button onClick={()=> setIsDrawerOpen(true)}>MENU</Button>
          <Button onClick={()=> setIsDrawerOpen(false)}>CHIUDI</Button>
          <SwipeableDrawer
            anchor="right"
            open={isDrawerOpen}
            width="70%"
           // onClose={toggleDrawer(anchor, false)}
           // onOpen={toggleDrawer(anchor, true)}
          >
          <Divider />
            <list>
              <ListItem>
                <ListItemText primary="HOME"></ListItemText>
              </ListItem>
              <ListItem><ListItemText primary="Chi Siamo"></ListItemText></ListItem>
            </list>
            <Divider />
          </SwipeableDrawer>
        
      
    </div>
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

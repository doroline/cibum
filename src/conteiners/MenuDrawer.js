import { useState } from "react";
import Wrapper from "./AppWrapper";
// importiamo gli elementi di material ui che ci occorrono : il menu vero e proprio e gli elementi list, list item e list text per stilizzare i bottoni che avremo nel menu
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Img from "../components/Img";

import MenuIcon from "@material-ui/icons/Menu";

function MenuDrawer() {
  // stato che utilizzeremo per aprire e chiudere il nostro menu laterale. Il menu può solo essere aperto o chiudo, perciò utilizzo un booleano (true/aperto, false/chiuso)
  const [menuVisibile, setMenuVisibile] = useState(false);

  const apriChiudiMenu = () => {
    // con il punto esclamativo prima di una variabile andiamo a selezionare il valore opposto di un booleano
    // (se il valore di menuVisibile è true, noi lo mettiamo a false)
    // questo ci permette di non dover verificare prima di invocare questa funzione se dobbiamo aprire o chiudere il menu: lui lo capirà da solo!
    setMenuVisibile(!menuVisibile);
  };

  return (
   <>
        {/* questo bottone determina l'apertura o la chiusura del menu*/}
        <button onClick={() => apriChiudiMenu()} className="pulsanteMenu">
          <MenuIcon></MenuIcon>
        </button>
 
      {/* 
        qui inizia il menu, con l'elemento SwipeableDrawer che contiene tutti i bottoni con i nomi delle sezione della mia APP 
        anchor indica la posizione da cui il menu si aprirà
        open indica se il menu è aperto o chiuso
        onClose e onOpen sono eventi legati allo swipe dell'utente (in generale per noi è importante invocare una sola funzione: apriChiudiMenu)
      */}
      <SwipeableDrawer
        anchor="left"
        open={menuVisibile}
        onClose={() => apriChiudiMenu()}
        onOpen={() => apriChiudiMenu()}
      className="menu"
      >
        {/* List svolge il ruolo di <ul> e ListItem quello di <li>: in questo caso potrei utilizzare una costante ed eseguire un .map per ciclarmi tutte le pagine della mia app che voglio elencare */}
        <List className="lista">
          <ListItem button key="Home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="Ricette">
            <ListItemText primary="Ricette" />
          </ListItem>
          <ListItem button key="Lista della Spesa">
            <ListItemText primary="Lista della Spesa" />
          </ListItem>
        </List>
      </SwipeableDrawer>
  </>
  );
}

export default MenuDrawer;

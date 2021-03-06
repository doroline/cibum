import { Component, useState } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';
import NavBar from '../components/NavBar';
import BandieraLingua from '../components/BandieraLingua';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import './App.css';
import { red } from '@material-ui/core/colors';

firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function Lista() {
  const [currentLingua, setCurrentLingua] = useState("it"); // è importate che lo state che contiene le super variabile sia nel file padre, per questo lo scrivo q
  const classes = useStyles();
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  //PARTE DEDICATA AL CAMBIO DI COLORE DELLO SFONDO
  const [coloreCorrente, setColoreCorrente] = useState("orange"); //imposto il colore di defaul su orange e lo preparo al cambio di stato
  const [nuovoColore, setNuovoColore] = useState(""); //creo una super variabile 'nuovoColore' che cambierà il suo stato quando si attiverà l'onChange sul campo input

  const salvaColore = (evento) => { // qui si attiva l'onChange e si prende il paramentro scritto nel campo e lo passa a setNuovoColore, che cambia lo stato a nuovoColore
    setNuovoColore(evento.target.value);
  };
  const cambiaColore = () => { // qui si attiva l'onClick che va ad aggiornare lo stato di coloreCorrente con la super variabile nuovoColore
    setColoreCorrente(nuovoColore);
  };


  //PARTE DEDICATA AL CAMBIO DI COLORE DEI TESTI
  const [coloreTestiCorrente, setColoreTestiCorrente] = useState("white"); //imposto il colore di defaul dei testi su bianco e lo preparo al cambio di stato
  const [nuovoColoreTesti, setNuovoColoreTesti] = useState(""); //creo una super variabile 'nuovoColoreTesti' che cambierà il suo stato quando si attiverà l'onChange sul campo input

  const salvaColoreTesti = (evento) => { // qui si attiva l'onChange e si prende il paramentro scritto nel campo e lo passa a setNuovoColore, che cambia lo stato a nuovoColore
    setNuovoColoreTesti(evento.target.value);
  };
  const cambiaColoreTesti = () => { // qui si attiva l'onClick che va ad aggiornare lo stato di coloreCorrente con la super variabile nuovoColore
    setColoreTestiCorrente(nuovoColoreTesti);
  };

  //PARTE DEDICATA AL CAMBIO DI DIMENSIONE FONT
  const [textSizeCorrente, setTextSizeCorrente] = useState("25px"); //imposto il la dimensione del testo di defaul a 25px

  const cambiaTextSize = (evento) => { // qui si attiva l'onChange e si prende il paramentro del option del select lo passa a setTextSizeCorrente, che cambia lo stato a textSizeCorrente, che cambierà il css dinamicao del font-size
    setTextSizeCorrente(evento.target.value);
  };



  //PARTE DEDICATA ALLA CREAZIONE DELLA LISTA
  const [inputCorrente, setInputCorrente] = useState("");
  const [lista, setLista] = useState([]); // cosi facendo inizializzo la supervariabile lista come un array
  const [chiaviRicette, setChiaviRicette] = useState([]);
  const [oggettoRicette, setOggettoRicette] = useState({});
  const gestisciOnChange = (evento) => {
    setInputCorrente(evento.target.value);
  };
  const aggiungiElementoAllaLista = () => {
    const recipesRef = firebase.database().ref('/recipes');
    recipesRef.on("value", snapshot => {
      const ricetteOnLine = snapshot.val();
      const arrayRicette = Object.keys(ricetteOnLine);
      setOggettoRicette(ricetteOnLine); // cosi facendo abbiamo popolato anche l'oggetto ricette
      setChiaviRicette(arrayRicette);
    });

    const listaAggiornata = [...lista];// con questi 3 punti gli dico di CLONARE tutto il contenuto dell array lista, avessimo dovuto clonare un oggetto sarebbe stata la setssa cosa ma nelle graffe {... pippo}
    listaAggiornata.push(inputCorrente);// aggiungo l'input corrente
    setLista(listaAggiornata); // modifico la nostra lista
    setInputCorrente(""); // svuoto la super variabile di inputCorrente
  };
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: coloreCorrente, color: coloreTestiCorrente, fontSize: textSizeCorrente }}>
        <div id="cambioColori">
          <span> colore dello sfondo: </span>
          <Input id="standard-basic" color="secondary" onChange={(evento) => salvaColore(evento)} style={{ color: 'red' }} className="btn-grey" />

          <Button variant="contained" onClick={() => cambiaColore()} color="secondary">
            SFONDO
      </Button>

          <span> colore dei testi: </span>
          <Input id="standard-basic" color="secondary" onChange={(evento) => salvaColoreTesti(evento)} style={{ color: 'red' }} className="btn-grey" />
          <Button variant="contained" onClick={() => cambiaColoreTesti()} color="secondary">TESTI</Button> font:
                <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={(evento) => cambiaTextSize(evento)}
            style={{ color: 'red' }}
            className="btn-grey"
          >
            <MenuItem value="15px">piccolo</MenuItem>
            <MenuItem value="25px" selected="selected">medio</MenuItem>
            <MenuItem value="35px">grande</MenuItem>
          </Select>
          <BandieraLingua setLingua={setCurrentLingua} />
          {/* al componente BandieraLingua aggiungo una prop che chiamo setLingua che conterrà il valore del metodo setCurrentLingua  */}
        </div>


        <h4>Scrivi cosa vuoi aggiungere alla lista:</h4>
        <TextField id="outlined-basic" value={inputCorrente} onChange={(evento) => gestisciOnChange(evento)} variant="outlined" />
        <Button variant="contained" onClick={() => aggiungiElementoAllaLista()} >AGGIUNGI</Button>
        <div>Ecco lista completa delle cose che hai scelto:
                <ul>
            {chiaviRicette.map((chiaveCorrente, indice) => {
              return (
                <li key={indice}>
                <h6 style={{marginBottom:"0px"}}>Categoria: {oggettoRicette.[chiaveCorrente].recipeCategory}</h6>
                <strong style={{color:"#8e5c1d",display:"block",marginBottom:"-20px"}}>{oggettoRicette.[chiaveCorrente].name}</strong>
                <p>{oggettoRicette.[chiaveCorrente].description}</p>
                
                <img src={oggettoRicette.[chiaveCorrente].image.url} style={{width:"50%"}}></img>
                </li>
              )
            }
            )}

          </ul>
        </div>

        <Typography id="continuous-slider" gutterBottom>
          Volume
      </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
        {currentLingua}
      </header>
      <footer>
        <NavBar lingua={currentLingua} />
      </footer>
    </div>
  );
}

export default Lista;

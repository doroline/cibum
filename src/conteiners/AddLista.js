import { Component, useState, useEffect } from 'react'; // importo e aggiungo lo useEffect che ci permette di gestire i cicli di vita della nostra applicazione
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
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

function AddLista() {

    useEffect(() => { // qui mettiamo le varie azioni, ad inizio app
        const riferimentoLista = firebase.database().ref('/lista');

        riferimentoLista.on("value", (valoreLista) => {  //quando hai recuperato i valori (value) da firebase del nodo lista, esegui la funzione valoreLista che ti vado a dichiarare
            const listaDaFirebase = valoreLista.val(); // creo una variabile e la riempio con i valori della lista
            if (listaDaFirebase) { // gli metto un if che dice di riempire la supervariabile lista solamente se listaDaFirebase esiste, altrimenti se fosse vuota, lui non la considera e lascia la supervariabile vuota pronta ad essere riempita
                setLista(listaDaFirebase); // modifico la supervariabile "lista" assegnandogli da subito i valori di lista presi da firebse
            }
        });
    }, []); // le parentesi quadre vuote indicano di eseguire l'azione solo una volta all'avvio, il didMount si scatena, si attiva quando la nostra applicaizone è pronta per essere messa a video

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
    const gestisciOnChange = (evento) => {
        setInputCorrente(evento.target.value);
    };
    const aggiungiElementoAllaLista = () => {
        const nuovaLista = [...lista];// con questi 3 punti gli dico di CLONARE tutto il contenuto dell array lista, avessimo dovuto clonare un oggetto sarebbe stata la setssa cosa ma nelle graffe {... pippo}
        nuovaLista.push(inputCorrente);// aggiungo l'input corrente
        setLista(nuovaLista); // modifico la nostra lista
        setInputCorrente(""); // svuoto la super variabile di inputCorrente


        const riferimentoLista = firebase.database().ref('/lista');
        riferimentoLista.set(nuovaLista); // il set si usa per scrivere

        // come creare una specie di RECORDSET che recupera i valori dalla "tabella" lista
        //riferimentoLista.on("value", (valoreLista)=>{  //quando hai recuperato i valori (value) da firebase del nodo lista, esegui la funzione valoreLista che ti vado a dichiarare
        //    const listaDaFirebase = valoreLista.val(); // creo una variabile e la riempio con i valori della lista
        //    console.log(listaDaFirebase); // se voglio faccio un console log per vedere se recupare i valore della lista
        // })
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
                </div>

                <h4>Scrivi cosa vuoi aggiungere alla lista:</h4>
                <TextField id="outlined-basic" value={inputCorrente} onChange={(evento) => gestisciOnChange(evento)} variant="outlined" />
                <Button variant="contained" onClick={() => aggiungiElementoAllaLista()} >AGGIUNGI</Button>
                <div>Ecco lista completa delle cose che hai scelto:
                <ul>
                        {lista.map((elemento, indice) => {
                            //il map ci permette di ciclare un array e di mostrare gli elementi che contiene
                            return (
                                <li>{elemento}</li>
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
            </header>

        </div>
    );
}

export default AddLista;
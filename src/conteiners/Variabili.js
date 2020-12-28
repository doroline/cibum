import { Component, useState } from 'react';
import VarEsterne from '../components/VarEsterne';
function Variabili() {
    const [nome, setNome] = useState("");
    const [inputCorrente, setInputCorrente] = useState("");
    const tantiNomi = [
        "danilo",
        "mario",
        "mimmo",
        "ciccio"
    ]

    const cambiaNome = (a) => {
        setNome(a);
    }

    const gestisciOnChange = (evento) => {
        setInputCorrente(evento.target.value);
    };
    const aggiungi = (evento) => {
        setNome(inputCorrente);
    };
    return (
        <div className="App">
            <header className="App-header">
                come ti chiami?
        <VarEsterne nome={nome} cambiaNome={cambiaNome} aggiungi={aggiungi} gestisciOnChange={gestisciOnChange} inputCorrente={inputCorrente} />
                {tantiNomi.map((nominativo,indice) => {
                    return (
                        <div id={indice}>{nominativo}</div>
                    )
                }
                )}
            </header>
        </div>
    );
}

export default Variabili;

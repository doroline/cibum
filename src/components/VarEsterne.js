import {useState} from 'react';

function VarEsterne(props) {


  return (
    <>
      {props.nome && <div> Mi chiamo {props.nome}</div>}
      <br />
      <button onClick={() => props.cambiaNome("Danilo")}>Danilo</button>
      <button onClick={() => props.cambiaNome("Mario")}>Mario</button>
      <button onClick={() => props.cambiaNome("Alberto")}>Alberto</button>
      oppure scrivilo te:
      <br /><br />
      <input value={props.inputCorrente} onChange={(evento) => props.gestisciOnChange(evento)}/>
      <button onClick={(evento) => props.aggiungi(evento)} >Invia NOME</button>
    </>
  );
}
export default VarEsterne;

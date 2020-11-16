import logoReact from './logo.svg';

function Img(props) {
  console.log('prova console log');
  return (
    <>
        <img src={logoReact} className="App-logo" alt="logo" />  
        <h2>{props.label}</h2>  
        <h4>{props.label2}</h4>  
    </>    
  );
}

export default Img;

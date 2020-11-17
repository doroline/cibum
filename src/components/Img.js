import logoReact from './logo.svg';

function Img(props) {
  return (
    <>
        <img src={logoReact} className="App-logo" alt="logo" />  
        <h2>{props.label}</h2>  
    </>    
  );
}

export default Img;

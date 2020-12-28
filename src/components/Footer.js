import { useHistory, useLocation } from "react-router-dom";
import { ROTTE } from "../costanti";

function Footer() {
  // costanti per gli Hook di Routing
  const listaRottePrecedenti = useHistory();
  const rottaCorrente = useLocation();

  const cambiaRotta = (nuovaRotta) => {
    listaRottePrecedenti.push(nuovaRotta);
  };

  return (
    <div>
      <button onClick={() => cambiaRotta(ROTTE.HOME)}>Home</button>
      <button onClick={() => cambiaRotta(ROTTE.CLIENTI)}>Clienti</button>
      <button onClick={() => cambiaRotta(ROTTE.AZIENDE)}>Aziende</button>
    </div>
  );
}
export default Footer;

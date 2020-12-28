import { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ROTTE } from "../costanti";
import Footer from "../components/Footer";
import Home from "./PagHome";
import Clienti from "./PagClienti";
import Aziende from "./PagAziende";

function Inizio() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">HEADER</header>
        <contenitore>
          <Switch>
            <Route path={ROTTE.CLIENTI}>
              <Clienti />
            </Route>
            <Route path={ROTTE.AZIENDE}>
              <Aziende />
            </Route>
            <Route path={ROTTE.HOME}>
              <Home />
            </Route>
          </Switch>
        </contenitore>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
export default Inizio;

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);



export default function Index() {
  return (
    <>
     <Router>
     <div>
        <nav>
          <ul>
            <li>
              <Link to="/">A Pousada</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/instalacoes">Instalações</Link>
            </li>
            <li>
              <Link to="/localizacao">Localização</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
        </div>
     <Switch>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/instalacoes">
            <Instalacoes />
          </Route>
          <Route path="/localizacao">
            <Localizacao />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
    </>
  )
}


function Home() {
  return(
    <>
    <h1>Home Funcionando</h1>
    </>
  )
}

function Instalacoes() {
  return(
    <>
    <h1>Instalações Funcionando</h1>
    </>
  )
}

function Localizacao() {
  return(
    <>
    <h1>Localização Funcionando</h1>
    </>
  )
}

function Contato() {
  return(
    <>
    <h1>Contato Funcionando</h1>
    </>
  )
}

function Sobre() {
  return(
    <>
    <h1>Sobre Funcionando</h1>
    </>
  )
}
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';

const TituloPagina = styled.h1`
  font-family: "Pacifico", "Open Sans","Helvetica Neue", "Helvetica", "sans-serif";
  font-size: 67px;
  font-weight: normal;
  text-decoration: none;
  color: rgba(34,34,34,1);
  letter-spacing: normal;
  line-height: 1.2;
  font-style: italic;
  color: rgba(255,255,255,1);
  text-shadow: 1px 1px 1px rgba(133,56,155,1);
`


function App() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    </style>
      <Router>
        <div>
          <TituloPagina>Pousada Recanto do Sossego</TituloPagina>
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
export default App;

function Home() {
  return (
    <>
      <h1>Home Funcionando</h1>
    </>
  )
}

function Instalacoes() {
  return (
    <>
      <h1>Instalações Funcionando</h1>
    </>
  )
}

function Localizacao() {
  return (
    <>
      <h1>Localização Funcionando</h1>
    </>
  )
}

function Contato() {
  return (
    <>
      <h1>Contato Funcionando</h1>
    </>
  )
}

function Sobre() {
  return (
    <>
      <h1>Sobre Funcionando</h1>
    </>
  )
}
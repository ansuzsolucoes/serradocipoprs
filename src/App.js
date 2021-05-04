import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import styled from 'styled-components';
import "./App.css";

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
`;
const Header = styled.div `

  width: 100%;
  min-height: 527px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

`;

const NavigationBar = styled.nav `
display: inline-flex;
flex-direction: row;
align-items: center;
justify-content: center;
min-height:61px;
width: 100%;
background-color: rgba(33,165,58,0.8);
border-bottom-color: rgba(70,215,71,1);
border-bottom-style: solid;
border-bottom-width: 6px;
margin: 0px;
transition: all 0.1s ease-in-out;
padding: 0px;
`;

const NavigationLink = styled(NavLink)`
color: #fff;
text-decoration: none;
padding: 25px 15px 25px 15px;
margin: 0;
font-family: "Roboto", "Open Sans", "Helvetica Neue", "Helvetica", "sans-serif";
font-size: 20px;
`;



function App() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    </style>
      <Router>
        <Header>
          <TituloPagina>Pousada Recanto do Sossego</TituloPagina>
          <br/>
          <NavigationBar>

                <NavigationLink className="NavLink" exact="true" activeClassName="NavLinkSelected" to="/" >A Pousada</NavigationLink>

                <NavigationLink className="NavLink" activeClassName="NavLinkSelected" to="/sobre">Sobre Nós</NavigationLink>

                <NavigationLink className="NavLink" activeClassName="NavLinkSelected" to="/instalacoes">Instalações</NavigationLink>

                <NavigationLink className="NavLink" activeClassName="NavLinkSelected" to="/localizacao">Localização</NavigationLink>

                <NavigationLink className="NavLink" activeClassName="NavLinkSelected" to="/contato">Contato</NavigationLink>

          </NavigationBar>
        </Header>
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
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
  background-color: rgba(33,165,58,0.3);
  width: 100%;
  min-height: 7rem;
  text-align: center;
`;
  const Header = styled.div `
  width: 100%;
  min-height: 527px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  z-index: 5;
`;

const Banner = styled.img`
width: 100%;
max-height: 500px;
object-fit: cover;
`

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

const Container = styled.div`
  padding: 0 10% 0 10%;
`

const Espacador = styled.hr`
  height: 2rem;
  border: none;
`
const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
`
const TituloCard = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`
const SubtituloCard = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
`

const publico = process.env.PUBLIC_URL

let banner = publico + "/img/banner.jpg"



function App() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    </style>
      <Router>
        <Header>
          <TituloPagina>Pousada Recanto do Sossego</TituloPagina>
          <Banner src={banner} />
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
    <Container>
      <Espacador/>
      <ContainerCard>
        <Card>
          <img src={publico + '/img/7.jpg'}></img>
          <TituloCard>SIMPLICIDADE E CONFORTO</TituloCard>
          <SubtituloCard>TRANQUILIDADE PARA O CORPO E A MENTE</SubtituloCard>
          <p>Longe do barulho e stress da cidade grande, aqui, podemos aproveitar uma estadia relaxante, com a simplicidade  do interior e o conforto necessário para nosso descanso.</p>
        </Card> 
        <Espacador/>
        <Card>
          <img src={publico + '/img/7.jpg'}></img>
          <TituloCard>SIMPLICIDADE E CONFORTO</TituloCard>
          <SubtituloCard>TRANQUILIDADE PARA O CORPO E A MENTE</SubtituloCard>
          <p>Longe do barulho e stress da cidade grande, aqui, podemos aproveitar uma estadia relaxante, com a simplicidade  do interior e o conforto necessário para nosso descanso.</p>
        </Card>
        
        
      </ContainerCard>
    </Container>
      <Espacador/>
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
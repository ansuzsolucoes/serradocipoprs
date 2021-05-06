import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import styled from 'styled-components';
import "./App.css";

// const theme = {
//   blue: {
//     default: "#3f51b5",
//     hover: "#283593"
//   },
//   pink: {
//     default: "#e91e63",
//     hover: "#ad1457"
//   }
// };


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
const Header = styled.div`
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

const NavigationBar = styled.nav`
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
&:link{
  color: #fff;
}
&:hover{
  color: #fff;
}
&:active{
  color: #fff;
}
&:visited{
  color: #fff;
}

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
  @media(max-width: 700px){
    flex-direction: column;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
  @media(max-width: 700px){
    max-width: 100%;
  }
`
const TituloCard = styled.h2`
  font-family: "Roboto", "Open Sans", "Helvetica Neue", "Helvetica", "sans-serif";
  font-style: normal;
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  color: rgba(34,34,34,1);
  letter-spacing: normal;
  line-height: 1.2;
  text-align: center;
`
const SubtituloCard = styled.h3`
  font-family: "Roboto", "Open Sans", "Helvetica Neue", "Helvetica", "sans-serif";
  font-style: normal;
  font-size: 16px;
  font-weight: normal;
  text-decoration: none;
  color: rgba(34,34,34,1);
  letter-spacing: normal;
  line-height: 1.2;
  text-align: center;
`
const TextCard = styled.p`
  text-align: justify;
  line-height: 1.8;
`
const Coluna = styled.div`
  background-color: ${props => props.backgroundColor};
  padding-top: ${props => props.altura};
  padding-bottom: ${props => props.altura};
`
const ContainerColuna = styled(Container)`
  display: flex;
  flex-direction: row;
  @media(max-width: 700px){
    flex-direction: column;
  }
`
const ColunaMenor = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35%;
  @media(max-width: 700px){
    max-width: 100%;
  }
`

const ColunaMaior = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  @media(max-width: 700px){
    max-width: 100%;
  }
`
const TituloColuna = styled(TituloCard)`
  color: ${props => props.textColor};
`
const SubtituloColuna = styled(SubtituloCard)`
  color: ${props => props.textColor};
`
const TextColuna = styled(TextCard)`
  color:${props => props.textColor};
`
const ColunaLink = styled(NavLink)`
color: ${props => props.textColor};
padding: 25px 15px 25px 15px;
margin: 0;
font-family: "Roboto", "Open Sans", "Helvetica Neue", "Helvetica", "sans-serif";
font-size: 20px;
&:link{
  color: ${props => props.textColor};
}
&:hover{
  color: ${props => props.textColor};
}
&:active{
  color: ${props => props.textColor};
}
&:visited{
  color: ${props => props.textColor};
}

`;

const ColunaImagem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media(max-width: 700px){
    flex-direction: column;
  }
`

const ImgImagem = styled.img`
  width: 100%;
  height: 100%;
`

const Button = styled.button`
  background-color: rgba(33,165,58,0.8);
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: rgba(33,165,58,0.8);
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;


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
          <br />
          <NavigationBar>

            <NavigationLink className="NavLink" exact={true} activeClassName="NavLinkSelected" to="/" >A Pousada</NavigationLink>

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
        <Espacador />
        <ContainerCard>
          <Card>
            <img src={publico + '/img/7.jpg'} alt="" />
            <TituloCard>SIMPLICIDADE E CONFORTO</TituloCard>
            <SubtituloCard>TRANQUILIDADE PARA O CORPO E A MENTE</SubtituloCard>
            <TextCard>Longe do barulho e stress da cidade grande, aqui, podemos aproveitar uma estadia relaxante, com a simplicidade  do interior e o conforto necessário para nosso descanso.</TextCard>
          </Card>
          <Espacador />
          <Card>
            <img src={publico + '/img/8.jpg'} alt="" />
            <TituloCard>CONSTRUIDO PARA VOCÊ</TituloCard>
            
            <SubtituloCard>INSTALAÇÕES CONSTRUÍDAS PARA AGRADAR</SubtituloCard>
            <TextCard>Desde os quartos até a área da churrasqueira, tudo foi planejado de forma a agradar os hóspedes. O ambiente é mais que uma pousada, é como uma segunda casa </TextCard>
          </Card>
        </ContainerCard>
      </Container>
      <Espacador/>
      <Coluna backgroundColor="#000" altura="100px">
        <ContainerColuna>
          <ColunaMenor>
            <TituloColuna textColor="#fff">
              Como Começou a Pousada?
          </TituloColuna>
            <SubtituloColuna textColor="#fff">
              Recanto do Sossego Serra do Cipó
          </SubtituloColuna>
            <TextColuna textColor="#fff">
              A pousada está em atividade desde 1999. Seu proprietário, Narcizo Raimundo da Silva, morador no local, viu em seu sítio um local relaxante e agradável para construí-la de forma a compartilhar isso com outras pessoas. A pusada, recebe vários hóspedes de diversos lugares que vêm em busca de sossego,  descanso e lazer.
          </TextColuna>
            <ColunaLink to="/sobre">Leia Mais</ColunaLink>
            <Espacador/>
            <TituloColuna textColor="#fff">
              Mais que uma Pousada
            </TituloColuna>
            <SubtituloColuna textColor="#fff">
              Aqui, Fazemos Amigos
            </SubtituloColuna>
            <TextColuna textColor="#fff">
            As pessoas que passam por aqui são mais  que hóspedes, são amigos. Já os que estão por vir são os amigos que ainda não conhecemos.
            </TextColuna>
            <ColunaLink textColor="#fff" to="/sobre">Leia Mais</ColunaLink>
          </ColunaMenor>
          <Espacador/>
          <ColunaMaior>
            <iframe title="GoogleMaps" src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d29793.063134277276!2d-43.64654747802237!3d-19.39795712076952!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-19.3754968!2d-43.6611626!4m5!1s0xa5e8ac82f05065%3A0xdb581dfb8008d5e6!2sUnnamed%20Rd%2C%20Jaboticatubas%20-%20MG%2C%2035830-000%2C%20Brasil!3m2!1d-19.403034299999998!2d-43.632829099999995!5e1!3m2!1spt-BR!2sbr!4v1620310519277!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0 }} allowFullscreen="" loading="lazy"></iframe>
          </ColunaMaior>
        </ContainerColuna>
      </Coluna>
      <Coluna altura="200px">
        <ContainerColuna>
          <ColunaMaior>
          <div className="zoom"><img src={publico + "/img/rede.jpg"} alt=""/></div>
            </ColunaMaior>
            <Espacador/>
          <ColunaMenor>
            <TituloColuna>
            ACORDE COM A NATUREZA À SUA PORTA
          </TituloColuna>
            <SubtituloColuna>
            Todos os apartamentos se abrem diretamente para a natureza. Sinta o prazer de respirar ar puro.
          </SubtituloColuna>
          <NavLink to="/instalacoes"><Button>Conheça</Button></NavLink>
          </ColunaMenor>
        </ContainerColuna>
      </Coluna>
      <Espacador />
    </>
  )
}

function Sobre() {
  return (
    <>
      <Container>
        <Espacador/>
        <div  style={{textAlign: 'center'}}>
          <img src={publico+"/img/placa.jpg"} alt=""></img>
        </div>
        <Espacador/>
        <Coluna>
          <ContainerColuna>
            <ColunaMaior>
              <TextColuna>
              Na pousada, quem chega sente cheiro de mato, ouve a barulhada gostosa dos animais nativos, descansa os olhos numa paisagem ímpar, pode nadar numa piscina onde corre água natural, relaxar na sauna,  bater uma bola, fazer o prórpio churrasco na beira da piscina (traga sua carne, a  cerveja gelada nós  vendemos)
              </TextColuna>
            </ColunaMaior>
            <Espacador/>
            <ColunaMenor>
            <NavLink to="/instalacoes"><Button>Conheça</Button></NavLink>
            </ColunaMenor>
          </ContainerColuna>
        </Coluna>
        <TituloCard>Petiscos e tira-gostos</TituloCard>
        <Espacador/>
        <SubtituloCard>Temos a famosa Traíra sem espinha</SubtituloCard>
        <ColunaImagem>
          <img src={publico + "/img/tilapia1.jpg"} alt=""/>
          <Espacador/>
          <img src={publico + "/img/tilapia2.jpg"} alt=""/>
        </ColunaImagem>
        <Espacador/>
        <SubtituloCard>Temos Tropeiro e Pizza caseira</SubtituloCard>
        <ColunaImagem>
          <img src={publico + "/img/tilapia1.jpg"} alt=""/>
          <Espacador/>
          <img src={publico + "/img/tilapia2.jpg"} alt=""/>
        </ColunaImagem>
        <Espacador/>
        <SubtituloCard>Temos Tropeiro e Pizza caseira</SubtituloCard>
        <ColunaImagem>
          <img src={publico + "/img/tilapia1.jpg"} alt=""/>
          <Espacador/>
          <img src={publico + "/img/tilapia2.jpg"} alt=""/>
        </ColunaImagem>
        <Espacador/>
      </Container>
    </>
  )
}

function Instalacoes() {
  return (
    <>
      
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


import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import {TituloPagina, Header, Banner, NavigationBar, NavigationLink, Container, Espacador, ContainerCard, Card, TituloCard, SubtituloCard, TextCard, Coluna, ContainerColuna, ColunaMenor, ColunaMaior, TituloColuna, SubtituloColuna, TextColuna, ColunaLink, ColunaImagem, ImgImagem, Button, ContainerFrame, Frame, ContainerFrameMapa} from "./Theme.js"
import {LocalPhone, WhatsApp} from "@material-ui/icons";
import "./App.css";

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

            <NavigationLink exact={true} activeClassName="NavLinkSelected" to="/" >A Pousada</NavigationLink>

            <NavigationLink activeClassName="NavLinkSelected" to="/sobre">Sobre Nós</NavigationLink>

            <NavigationLink activeClassName="NavLinkSelected" to="/instalacoes">Instalações</NavigationLink>

            <NavigationLink activeClassName="NavLinkSelected" to="/localizacao">Localização</NavigationLink>

            <NavigationLink activeClassName="NavLinkSelected" to="/contato">Contato</NavigationLink>

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
            <ImgImagem src={publico + '/img/7.jpg'} alt="" />
            <TituloCard>SIMPLICIDADE E CONFORTO</TituloCard>
            <SubtituloCard>TRANQUILIDADE PARA O CORPO E A MENTE</SubtituloCard>
            <TextCard>Longe do barulho e stress da cidade grande, aqui, podemos aproveitar uma estadia relaxante, com a simplicidade  do interior e o conforto necessário para nosso descanso.</TextCard>
          </Card>
          <Espacador />
          <Card>
            <ImgImagem src={publico + '/img/8.jpg'} alt="" />
            <TituloCard>CONSTRUIDO PARA VOCÊ</TituloCard>

            <SubtituloCard>INSTALAÇÕES CONSTRUÍDAS PARA AGRADAR</SubtituloCard>
            <TextCard>Desde os quartos até a área da churrasqueira, tudo foi planejado de forma a agradar os hóspedes. O ambiente é mais que uma pousada, é como uma segunda casa </TextCard>
          </Card>
        </ContainerCard>
      </Container>
      <Espacador />
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
            <ColunaLink textColor="#fff" to="/sobre">Leia Mais</ColunaLink>
            <Espacador />
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
          <Espacador />
          <ColunaMaior>
          <ContainerFrameMapa>
          <Frame title="GoogleMaps" src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d29793.063134277276!2d-43.64654747802237!3d-19.39795712076952!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-19.3754968!2d-43.6611626!4m5!1s0xa5e8ac82f05065%3A0xdb581dfb8008d5e6!2sUnnamed%20Rd%2C%20Jaboticatubas%20-%20MG%2C%2035830-000%2C%20Brasil!3m2!1d-19.403034299999998!2d-43.632829099999995!5e1!3m2!1spt-BR!2sbr!4v1620310519277!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullscreen="" loading="lazy"></Frame>
        </ContainerFrameMapa>
            
          </ColunaMaior>
        </ContainerColuna>
      </Coluna>
      <Coluna altura="200px">
        <ContainerColuna>
          <ColunaMaior>
            <div className="zoom"><ImgImagem src={publico + "/img/rede.jpg"} alt="" /></div>
          </ColunaMaior>
          <Espacador />
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
        <Espacador />
        <div style={{ textAlign: 'center' }}>
          <ImgImagem src={publico + "/img/placa.jpg"} alt=""/>
        </div>
        <Espacador />
        <Coluna>
          <ContainerColuna>
            <ColunaMaior>
              <TextColuna>
                Na pousada, quem chega sente cheiro de mato, ouve a barulhada gostosa dos animais nativos, descansa os olhos numa paisagem ímpar, pode nadar numa piscina onde corre água natural, relaxar na sauna,  bater uma bola, fazer o prórpio churrasco na beira da piscina (traga sua carne, a  cerveja gelada nós  vendemos)
              </TextColuna>
            </ColunaMaior>
            <Espacador />
            <ColunaMenor>
              <NavLink to="/instalacoes"><Button>Conheça</Button></NavLink>
            </ColunaMenor>
          </ContainerColuna>
        </Coluna>
        <TituloCard>Petiscos e tira-gostos</TituloCard>
        <Espacador />
        <SubtituloCard>Temos a famosa Traíra sem espinha</SubtituloCard>
        <ColunaImagem>
          <ImgImagem src={publico + "/img/tilapia1.jpg"} alt="" />

          <ImgImagem src={publico + "/img/tilapia2.jpg"} alt="" />
        </ColunaImagem>
        <Espacador />
        <SubtituloCard>Temos Tropeiro e Pizza caseira</SubtituloCard>
        <ColunaImagem>
          <ImgImagem src={publico + "/img/tropeiro.jpg"} alt="" />

          <ImgImagem src={publico + "/img/pizza.jpg"} alt="" />
        </ColunaImagem>

        <SubtituloCard>Temos Refeições Caseira</SubtituloCard>
        <ColunaImagem>
          <ImgImagem src={publico + "/img/refeicao1.jpg"} alt="" />

          <ImgImagem src={publico + "/img/refeicao2.jpg"} alt="" />
        </ColunaImagem>

        <SubtituloCard>Temos Tropeiro e Pizza caseira</SubtituloCard>
        <ColunaImagem>
          <ImgImagem src={publico + "/img/tilapia1.jpg"} alt="" />

          <ImgImagem src={publico + "/img/tilapia2.jpg"} alt="" />
        </ColunaImagem>

        <SubtituloCard>Temos Café da Manhã com gostinho do interior</SubtituloCard>
        <ColunaImagem>
          <ImgImagem src={publico + "/img/cafe1.jpg"} alt="" />

          <ImgImagem src={publico + "/img/cafe2.jpg"} alt="" />
        </ColunaImagem>

        <ColunaImagem>
          <ImgImagem src={publico + "/img/cafe3.jpg"} alt="" />

          <ImgImagem src={publico + "/img/cafe4.jpg"} alt="" />
        </ColunaImagem>
        <Espacador />
        <ColunaImagem>
          <ImgImagem src={publico + "/img/cafe5.jpg"} alt="" />

          <ImgImagem src={publico + "/img/cafe6.jpg"} alt="" />
        </ColunaImagem>
        <Espacador />

        <ColunaImagem>
          <ContainerFrame>
          <Frame src="https://www.youtube.com/embed/xNSnxYwAGGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Frame>
          </ContainerFrame>
          
          <Espacador />
          <ContainerFrame>
          <Frame width="560" height="315" src="https://www.youtube.com/embed/nlijD0c_rR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Frame>
          </ContainerFrame>
          
        </ColunaImagem>
        <Espacador />

        <ColunaImagem>
          <ContainerFrame>
          <Frame width="560" height="315" src="https://www.youtube.com/embed/McvZoa0tZxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Frame>
          </ContainerFrame>
          
          
          <Espacador />
          <ContainerFrame>
          <Frame width="560" height="315" src="https://www.youtube.com/embed/wlkk006QH6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Frame>
          </ContainerFrame>
          
        </ColunaImagem>
        <Espacador />
      </Container>
    </>
  )
}

function Instalacoes() {
  return (
    <>
      <Container>
        <Espacador />
        <div style={{ textAlign: 'center' }}>
          <ImgImagem src={publico + "/img/isnt.jpg"} alt=""/>
        </div>
        <Espacador />
        <Coluna>
          <ContainerColuna>
            <TituloColuna>
              Nossas instalações são aconchegantes para trazer paz de espírito e calma na estadia.
              </TituloColuna>
            <Espacador />

          </ContainerColuna>
        </Coluna>
        <TituloCard>Petiscos e tira-gostos</TituloCard>
        <Espacador />
        <ColunaImagem>
          <ImgImagem src={publico + "/img/inst2.jpg"} alt="" />

          <ImgImagem src={publico + "/img/inst3.jpg"} alt="" />
        </ColunaImagem>
        <Espacador />
        <ColunaImagem>
          <ImgImagem src={publico + "/img/inst4.jpg"} alt="" />

          <ImgImagem altura="450px" src={publico + "/img/inst5.jpeg"} alt="" />
        </ColunaImagem>

        <ColunaImagem>
          <ImgImagem altura="450px" src={publico + "/img/inst6.jpeg"} alt="" />

          <ImgImagem src={publico + "/img/inst.jpg"} alt="" />
        </ColunaImagem>

        <ColunaImagem>
          <ImgImagem src={publico + "/img/inst7.jpg"} alt="" />

          <ImgImagem src={publico + "/img/inst8.jpg"} alt="" />
        </ColunaImagem>


      </Container>
    </>
  )
}

function Localizacao() {
  return (
    <>
      <Container>
        <Espacador />
        <TituloColuna>
          COMO CHEGAR?
        </TituloColuna>
        <SubtituloColuna>
          Assista ao vídeo abaixo
        </SubtituloColuna>
        <Espacador />
        <ContainerFrame>
        <Frame src="https://www.youtube.com/embed/fhxlfOn96tY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Frame>
        </ContainerFrame>
        
        <Espacador />
        <TituloColuna>
          Localização
      </TituloColuna>
        <SubtituloColuna>
          ÁREA DE PRESERVAÇÃO AMBIENTAL<br />E CIRCUITO TURÍSTICO
      </SubtituloColuna>
        <Espacador />
        <ImgImagem src={publico + "/img/mapa.jpg"} />
        <TextColuna>
          Situada aos pés da Serra do Cipó, dentro da área de preservação, o terreno onde foi construida a Pousada Recanto do Sossego se extende pelas encostas íngremes e adentra o planalto.
        </TextColuna>
        <Espacador/>
        <TextColuna>
        A região, além de fazer parte do parque estadual da Serra do Cipó, também é conhecida como pertencente ao complexo turístico da Estrada Real.
        </TextColuna>
        <ImgImagem altura="400px" largura="auto" src={publico + "/img/mapa2.jpg"}/>
        <Espacador/>
        <ContainerFrame>
        <Frame title="GoogleMaps" src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d29793.063134277276!2d-43.64654747802237!3d-19.39795712076952!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-19.3754968!2d-43.6611626!4m5!1s0xa5e8ac82f05065%3A0xdb581dfb8008d5e6!2sUnnamed%20Rd%2C%20Jaboticatubas%20-%20MG%2C%2035830-000%2C%20Brasil!3m2!1d-19.403034299999998!2d-43.632829099999995!5e1!3m2!1spt-BR!2sbr!4v1620310519277!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullscreen="" loading="lazy"></Frame>
        </ContainerFrame>
        
        <TextColuna>Estrada Lapinha Casa Nova - Zona Rual - Serra do Cipó MG</TextColuna>
        <Espacador/>
      </Container>

    </>
  )
}

function Contato() {
  return (
    <>
      <Container>
        <Espacador/>
        <ContainerCard>
        <Card>
          <TituloCard>Localização</TituloCard>
          <TextCard>Serra do Cipó</TextCard>
          <TextCard>Primeira entrada à direita após Restaurante Coqueiros na rodovia MG10 km 90,5 - 5km de estrada de terra até a pousada.</TextCard>
        </Card>
        <Espacador/>
        <Card>
          <TituloCard>TELEFONES</TituloCard>
          <TextCard><LocalPhone/> +55 (31) 3799-3533 </TextCard>
          <TextCard><LocalPhone/> +55 (31) 9 8673-8025</TextCard>
          <TextCard><WhatsApp/> +55 (31) 9 8418-5776</TextCard>
          <TextCard><LocalPhone/> +55 (31) 9 8448-1219</TextCard>
          <TextCard><LocalPhone/> +55 (31) 4101-0527</TextCard>
        </Card>
        </ContainerCard>
        <Espacador/>
        <ContainerFrame>
        <Frame title="GoogleMaps" src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d29793.063134277276!2d-43.64654747802237!3d-19.39795712076952!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-19.3754968!2d-43.6611626!4m5!1s0xa5e8ac82f05065%3A0xdb581dfb8008d5e6!2sUnnamed%20Rd%2C%20Jaboticatubas%20-%20MG%2C%2035830-000%2C%20Brasil!3m2!1d-19.403034299999998!2d-43.632829099999995!5e1!3m2!1spt-BR!2sbr!4v1620310519277!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullscreen="" loading="lazy"></Frame>
        </ContainerFrame>
        
        <Espacador/>
        
      </Container>

    </>
  )
}


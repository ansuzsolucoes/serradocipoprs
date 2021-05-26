import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import styled from 'styled-components';



export const TituloPagina = styled.h1`
  font-family: "Pacifico", "Open Sans","Helvetica Neue", "Helvetica", "sans-serif";
  font-size: 8vw;
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
  text-align: center;
  padding-bottom: 7vh;
  @media(max-width: 700px){
    font-size: 12vw;
    padding-bottom: 4vh;
  }
`;
export const Header = styled.div`
  width: 100%;
  min-height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  z-index: 5;
`;

export const Banner = styled.img`
background-color: rgba(33,165,58,0.3);
width: 100%;
max-height: 100vh;
object-fit: cover;
`

export const NavigationBar = styled.nav`
display: inline-flex;
flex-direction: row;
align-items: center;
justify-content: center;
min-height:6vh;
width: 100%;
background-color: rgba(33,165,58,0.8);
border-bottom-color: rgba(70,215,71,1);
border-bottom-style: solid;
border-bottom-width: 6px;
margin: 0px;
transition: all 0.1s ease-in-out;
padding: 0px;
`;

export const NavigationLink = styled(NavLink)`
color: #fff;
text-decoration: none;
padding: 1vw 2vh 1vw 2vh;
margin: 0;
font-family: "Roboto", "Open Sans", "Helvetica Neue", "Helvetica", "sans-serif";
font-size: 2vw;
&:link{
  color: #fff;
}
&:hover{
  color: #fff;
  background-color: rgba(0,0,0,0.3);
}
&:active{
  color: #fff;
  background-color: rgba(0,0,0,0.3);
}
&:visited{
  color: #fff;
}

`;

export const Container = styled.div`
  padding: 0 10% 0 10%;
`

export const Espacador = styled.hr`
  height: 2rem;
  border: none;
`
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  @media(max-width: 700px){
    flex-direction: column;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 45%;
  @media(max-width: 700px){
    max-width: 100%;
  }
`
export const TituloCard = styled.h2`
  font-family: "Roboto", "Open Sans", "Helvetica Neue", "Helvetica", "sans-serif";
  font-style: normal;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: rgba(34,34,34,1);
  letter-spacing: normal;
  line-height: 1.2;
  text-align: center;
`
export const SubtituloCard = styled.h3`
  font-family: "Roboto", "Open Sans", "Helvetica Neue", "Helvetica", "sans-serif";
  font-style: normal;
  font-size: 1rem;
  font-weight: normal;
  text-decoration: none;
  color: rgba(34,34,34,1);
  letter-spacing: normal;
  line-height: 1.2;
  text-align: center;
`
export const TextCard = styled.p`
  text-align: justify;
  line-height: 1.8;
`
export const Coluna = styled.div`
  background-color: ${props => props.backgroundColor};
  padding-top: ${props => props.altura};
  padding-bottom: ${props => props.altura};
`
export const ContainerColuna = styled(Container)`
  display: flex;
  flex-direction: row;
  @media(max-width: 700px){
    flex-direction: column;
  }
`
export const ColunaMenor = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35%;
  @media(max-width: 700px){
    max-width: 100%;
  }
`

export const ColunaMaior = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  @media(max-width: 700px){
    max-width: 100%;
  }
`
export const TituloColuna = styled(TituloCard)`
  color: ${props => props.textColor};
`
export const SubtituloColuna = styled(SubtituloCard)`
  color: ${props => props.textColor};
`
export const TextColuna = styled(TextCard)`
  color:${props => props.textColor};
`
export const ColunaLink = styled(NavLink)`
color: ${props => props.textColor};
padding: 25px 15px 25px 15px;
margin: 0;
font-family: "Roboto", "Open Sans", "Helvetica Neue", "Helvetica", "sans-serif";
font-size: 1rem;
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

export const ColunaImagem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media(max-width: 700px){
    flex-direction: column;
  }
`

export const ImgImagem = styled.img`
  width: ${props => props.largura || '100%'};
  max-height: ${props => props.altura || 'auto'};
  margin: 50px;
  overflow: hidden;
  @media(max-width: 700px){
    max-width: 100%;
    margin: 5px;
  }
`

export const Button = styled.button`
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
export const ContainerFrame = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
`;
export const Frame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
export const ContainerFrameMapa = styled(ContainerFrame)`
@media(min-width: 700px){
  min-width: 400px;
}
`
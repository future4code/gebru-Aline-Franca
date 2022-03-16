import React from "react";
import styled from "styled-components"

const Pagina = styled.div`
display: flex;
justify-content: center;
`
const Whatslab = styled.div`
max-width: 600px;
height: 100vh;
border: 1px solid black;
flex: 1 1 0%;
display: flex;
flex-direction: column;
`
const BoxMensagem = styled.div`
flex: 1 1 0%;
display: flex;
flex-direction: column;
-webkit-box-pack: end;
justify-content: flex-end;
padding: 20px;
`
const CaixaMensagem = styled.div`
display: flex;
`
const CaixaInputUsuario = styled.input`
`

const CaixaInputMensagem = styled.input`
flex-grow: 1;
`

export default class App extends React.Component {
  state = {
    inputUsuario: "",
    inputMensagem: ""
  };
  onChangeInputUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value });
    };

  onChangeInputMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value });
    };  

  limparInputs = () => {
    console.log("Usuário: ", this.state.inputUsuario);
    console.log("Mensagem: ", this.state.inputMensagem);
      
  
  this.setState({
    inputUsuario: "",
    inputMensagem: "",
    });   
  };

render() {
  return (
  <>
  <Pagina>
  <Whatslab>
  <BoxMensagem>
  
  </BoxMensagem>
  
  <CaixaMensagem>
  <CaixaInputUsuario   
  placeholder="Usuário"
  value={this.state.inputUsuario}
  onChange={this.onChangeInputUsuario}
  /> 

  <CaixaInputMensagem
  placeholder="Mensagem"
  value={this.state.inputMensagem}
  onChange={this.onChangeInputMensagem}
  />
  
  <button onClick={this.limparInputs}>Enviar</button>
  
  </CaixaMensagem>
  </Whatslab>
  </Pagina> 
  </> 
  );
}
}

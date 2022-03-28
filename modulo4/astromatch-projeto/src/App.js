import React, {useState} from "react"
import styled from "styled-components";
import TituloAstromatch from "./components/TituloAstromatch";
import axios from "axios";



const TelaAstromatch = styled.div`
background-color: white;
width: 400px;
height: 600px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 1px solid black;
border-radius: 5px;

`
function App() {
  return (
    
    <TelaAstromatch>
      <TituloAstromatch>
        
      </TituloAstromatch>
      
    </TelaAstromatch>
    
  );
}

export default App;

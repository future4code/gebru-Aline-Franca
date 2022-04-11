import React from "react";
import { useNavigate } from "react-router-dom";
import {GoBack} from "../routes/coordinator"
import styled from "styled-components";

const MenuForm = styled.div`
flex-direction: column;
margin: 20vh;  
`
const ListaTitulo = styled.h2`
text-align: center;
`
const LabexButton = styled.div`
display: flex;
justify-content: center;

`

const ApplicationForm = () =>{
    const navigate=useNavigate()

  
    return(
        <MenuForm>
            <LabexButton>Inscreva-se para uma viagem</LabexButton>
            <LabexButton>
            <button onClick={()=>GoBack(navigate)}>Voltar</button>
            <button>Enviar</button>
            </LabexButton>
        </MenuForm>
    )
}
export default ApplicationForm;
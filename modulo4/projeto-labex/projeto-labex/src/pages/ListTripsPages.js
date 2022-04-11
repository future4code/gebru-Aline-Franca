import React from "react";
import { useNavigate} from "react-router-dom";
import { GoBack, GoToForm } from "../routes/coordinator";
import styled from "styled-components";

const MenuList = styled.div`
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
const ListTrip = () =>{
    const navigate=useNavigate()
    
    
   
        return(
        <MenuList>
            <LabexButton>
            <button onClick={()=>GoToForm(navigate)}>Inscreva-se</button>
            <button onClick={()=>GoBack(navigate)}>Voltar</button>
            </LabexButton>
            <ListaTitulo>Lista de Viagens</ListaTitulo>
        </MenuList>
    )
}
export default ListTrip;
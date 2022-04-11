import React, {useNavigate} from "react-router-dom";
import {GoToTripsList, GoToLogin} from "../routes/coordinator";
import styled from 'styled-components';

const MenuInicial = styled.div`
flex-direction: column;
margin: 40vh;



`
const LabexTítulo = styled.h1`
text-align: center;
`
const LabexButton = styled.div`
display: flex;
justify-content: center;
`

const HomePage = () => {
    const navigate = useNavigate();

    return(
    <MenuInicial>
        <LabexTítulo>LabeX</LabexTítulo>
        
        <LabexButton>
        <button onClick={()=>GoToTripsList(navigate)}>Ver Viagens</button>
        <button onClick={()=>GoToLogin(navigate)}>Área Administrativa</button>
        </LabexButton>
    </MenuInicial> 
    )
}
export default HomePage;
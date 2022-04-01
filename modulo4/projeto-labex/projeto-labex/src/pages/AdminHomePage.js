import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHomePage = () =>{
    const navigate = useNavigate ()
    const GoBack =()=>{
        navigate(-1)
    
    }
    const GoToCreate =()=>{
        navigate("/CreateTrip")
    }
    return(
        <div>
            <p>Teste página administrativa</p>
            <button onClick={GoToCreate}>Adicionar Viagem</button>
            <button onClick={GoBack}>Voltar</button>
            
        </div>
     )
}
export default AdminHomePage;
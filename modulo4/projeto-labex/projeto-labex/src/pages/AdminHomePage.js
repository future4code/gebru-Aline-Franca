import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const AdminHomePage = () =>{
    const navigate = useNavigate ()
    const params = useParams()

    
    const GoToCreate =()=>{
        navigate("CreateTrip")
    }
    const GoBack =()=>{
        navigate(-1)
    
    }
    return(
        <div>
            <p>Painel Administrativo</p>
            <button onClick={GoToCreate}>Adicionar Viagem</button>
            <button onClick={GoBack}>Voltar</button>
            <button>Logout</button>
            
        </div>
     )
}
export default AdminHomePage;
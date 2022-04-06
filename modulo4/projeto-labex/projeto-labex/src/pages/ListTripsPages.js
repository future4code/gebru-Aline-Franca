import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ListTrip = () =>{
    const navigate=useNavigate()
    const params = useParams()
    
    const GoToForm = (list) =>{
        navigate("Form")
    }
    const GoBack =()=>{
        navigate(-1)
    }
        
    return(
        <div>
            <h2>Lista de Viagens</h2>
            <button onClick={GoToForm}>Inscreva-se</button>
            <button onClick={GoBack}>Voltar</button>
        </div>
    )
}
export default ListTrip;
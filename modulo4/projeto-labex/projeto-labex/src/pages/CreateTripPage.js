import React from "react";
import { useNavigate } from "react-router-dom";

const CreateTrip = ()=>{
    const navigate=useNavigate()
   
     
    const GoToDetails = () =>{
        navigate=("/TripDetails")
    }
    const GoBack = () =>{
        navigate(-1)
    }
    return(
        <div>
          <p>Criar Viagem</p>
          <button onClick={GoBack}>Voltar</button>
          <button onClick={GoToDetails}>Avançar</button>
        </div>

    )
}
export default CreateTrip;
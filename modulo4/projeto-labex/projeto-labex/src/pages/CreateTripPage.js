import React from "react";
import { useNavigate } from "react-router-dom";

const CreateTrip = ()=>{
    const navigate=useNavigate()
    const GoBack = () =>{
        navigate=useNavigate()
        navigate(-1)
    } 
    const GoToDetails = () =>{
        navigate=("/TripDetails")
    }
    return(
        <div>
          <p>Teste página de criação de viagem</p>
          <button onClick={GoBack}>Voltar</button>
          <button onClick={GoToDetails}>Avançar</button>
        </div>

    )
}
export default CreateTrip;
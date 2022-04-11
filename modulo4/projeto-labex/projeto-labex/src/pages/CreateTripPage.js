import React from "react";
import { useNavigate } from "react-router-dom";
import {GoBack, GoToDetails } from "../routes/coordinator"

const CreateTrip = ()=>{
    const navigate=useNavigate()
   
     
     return(
        <div>
          <p>Criar Viagem</p>
          <button onClick={()=>GoBack(navigate)}>Voltar</button>
          <button onClick={()=>GoToDetails(navigate)}>Avançar</button>
        </div>

    )
}
export default CreateTrip;
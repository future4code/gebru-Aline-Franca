import React from "react";
import { useNavigate } from "react-router-dom";

const TripDetails = () =>{
    const navigate = useNavigate()

    const GoBack =()=>{
        navigate(-1)
    }
   

    return(
        <div>
            <p>Teste página sobre a viagem</p>
            <button onClick={GoBack}>Voltar</button>
        </div>
    )
}
export default TripDetails;
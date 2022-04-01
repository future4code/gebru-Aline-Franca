import React from "react";
import { useNavigate } from "react-router-dom";

const ListTrip = () =>{
    const navigate=useNavigate()

    const GoToForm = () =>{
        navigate("/Form")
    }
    const GoBack =()=>{
        navigate(-1)
    }    
    return(
        <div>
            <button onClick={GoToForm}>Inscreva-se</button>
            <button onClick={GoBack}>Voltar</button>
        </div>
    )
}
export default ListTrip;
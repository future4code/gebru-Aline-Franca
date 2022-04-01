import React from "react";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () =>{
    const navigate=useNavigate()

    const GoBack=()=>{
        navigate(-1)
    }
    return(
        <div>
            <p>Teste página de formulário</p>
            <button onClick={GoBack}>Voltar</button>
        </div>
    )
}
export default ApplicationForm;
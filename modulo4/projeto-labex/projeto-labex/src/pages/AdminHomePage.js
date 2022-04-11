import React from "react";
import { useNavigate} from "react-router-dom";
import {GoToCreate, GoBack} from "../routes/coordinator";

const AdminHomePage = () =>{
    const navigate = useNavigate ()
    // const params = useParams()

    
   
    
    return(
        <div>
            <p>Painel Administrativo</p>
            <button onClick={()=>GoToCreate(navigate)}>Adicionar Viagem</button>
            <button onClick={()=>GoBack(navigate)}>Voltar</button>
            <button>Logout</button>
            
        </div>
     )
}
export default AdminHomePage;
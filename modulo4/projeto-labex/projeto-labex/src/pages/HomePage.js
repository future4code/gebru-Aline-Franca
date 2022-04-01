import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate ()

    const GoToTripsList = () =>{
        navigate("/ListTrip")
    }
    const GoToLogin = () =>{
        navigate("/LoginPage")
    }

    return(
    <div>
        <p>Teste Home Page</p>
        <button onClick={GoToTripsList}>Lista de Viagens</button>
        <button onClick={GoToLogin}>Login</button>
    </div> 
    )
}
export default HomePage;
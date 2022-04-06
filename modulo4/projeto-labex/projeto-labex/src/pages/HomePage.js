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
        <h1>LabeX</h1>
        <button onClick={GoToTripsList}>Ver Viagens</button>
        <button onClick={GoToLogin}>Área Administrativa</button>
    </div> 
    )
}
export default HomePage;
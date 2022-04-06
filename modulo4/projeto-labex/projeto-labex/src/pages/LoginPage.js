import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () =>{
    const navigate = useNavigate()

    const GoHome = () =>{
        navigate("/")
    }
    const GoToAdminPage = () =>{
        navigate("Admin")
    }
    return(
        <div>
            <p>Login</p>
            <button onClick={GoHome}>Voltar para a Home</button>
            <button onClick={GoToAdminPage}>Entrar</button>
        </div>
    )
}
export default LoginPage;
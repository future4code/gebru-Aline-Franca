import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {GoToAdminPage, GoBack} from '../routes/coordinator';


const LoginPage = () =>{
    const [email, setEmail] = useState('')
    const [passoword, setPassoword] = useState('')
    const navigate = useNavigate()

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassoword = (event) => {
        setPassoword(event.target.value)
    };

    const onSubmitLogin = () => {
        console.log(email, passoword)
        const URL =
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-franca-gebru/login";
        
        const body = {
            email: email,
            passoword: passoword
        };

        axios.post(URL, body)
        .then((res)=>{
            console.log(res.data)
        
            localStorage.setItem("token", res.data.token)
            GoToAdminPage(navigate);
        })
        .catch((err)=> {
            console.log('ERRO!', err.response)

        });
    };
    
   
    return (
        <>
            <h2>Login</h2>

            <input
            placeholder="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            />
            <input
            placeholder="password"
            type="password"
            value={passoword}
            onChange={onChangePassoword}
            />
            <button onClick={()=>onSubmitLogin(navigate)}>Enviar</button>
            <button onClick={()=>GoBack(navigate)}>Voltar</button> 
            
        </>
    )
}
export default LoginPage;
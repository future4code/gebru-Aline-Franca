import React, {useState, useEffect} from 'react'
import axios from 'axios'


function CharacterDetailsPage (props){
    const [details, setDetails] = useState({})

    useEffect(()=>{
        GetDetailsPage()  
       },[props.url])

    function GetDetailsPage(){
        axios.get(props.url)
        .then((response)=> {
            console.log(response.data)
            setDetails(response.data)})
        .catch((error)=>{
            console.log(error.message)
        })
    }

    return(
    <>    
    <h1>Detalhes do Personagem</h1>
    <p>Nome: {details.name}</p>
    <p>Planeta de Origem: {details.homeworld}</p>
    <button onClick={props.goToListPage}>Voltar para a lista de personagens</button>
    </>
    )
}
export default CharacterDetailsPage;
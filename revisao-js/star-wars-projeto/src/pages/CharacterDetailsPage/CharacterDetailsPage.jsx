import React, {useState, useEffect} from 'react'
import {GetDetailsPage, GetPlanetsDetails} from "../../services/requests"


function CharacterDetailsPage (props){
    const [details, setDetails] = useState({})
    const [planets, setPlanets] = useState({})

    useEffect(()=>{
        GetDetailsPage(props.url, setDetails)  
       },[props.url])

    useEffect(()=>{
        GetPlanetsDetails(details.homeworld, setPlanets)
    }, [details.homeworld]) 
    
    
  

    return(
    <>    
    <h1>Detalhes do Personagem</h1>
    {details.name && planets.name ? 
        <div>
        <p>Nome: {details.name}</p>
        <p>Planeta de Origem: {planets.name}</p>
        </div>:
        <p>Carregando...</p>}
    <button onClick={props.goToListPage}>Voltar para a lista de personagens</button>
    </>
    )
}
export default CharacterDetailsPage;
import React, {useState, useEffect} from 'react'
import axios from 'axios'


function CharacterDetailsPage (props){
    const [details, setDetails] = useState({})
    const [planets, setPlanets] = useState({})

    useEffect(()=>{
        GetDetailsPage()  
       },[props.url])

    useEffect(()=>{
        GetPlanetsDetails()
    }, [details.homeworld]) 
    
    
    function GetDetailsPage(){
        axios.get(props.url)
        .then((response)=> {
            console.log(response.data)
            setDetails(response.data)})
        .catch((error)=>{
            console.log(error.message)
        })
    }

    function GetPlanetsDetails(){
        axios.get(details.homeworld)
        .then((response) => {
            console.log(response.data)
            setPlanets(response.data)
        })
        .catch((error) =>console.log(error.message))
    }

    return(
    <>    
    <h1>Detalhes do Personagem</h1>
    <p>Nome: {details.name}</p>
    <p>Planeta de Origem: {planets.name}</p>
    <button onClick={props.goToListPage}>Voltar para a lista de personagens</button>
    </>
    )
}
export default CharacterDetailsPage;
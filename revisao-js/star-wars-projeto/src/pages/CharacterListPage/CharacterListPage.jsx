import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL} from '../../constants/urls.js'
import {CharacterCard} from './Styled'


function CharacterListPage (){
    const [characterList, setCharacterList] = useState ([])
    
useEffect(()=>{
    getCharacterList()
}, []) 
function getCharacterList (){
    axios.get(`${BASE_URL}/people/`)
    .then((response) => setCharacterList(response.data.results))
    .catch((error)=> console.log(`Erro:`, error.mesage))
}  

    function showCharacters (){
        return characterList.map((character,index)=>{
            return <CharacterCard key={index}>{character.name}</CharacterCard>
        })
    }

    

    return (
        <div>
            <h1>Lista de Personagens</h1>
            {showCharacters()}
        </div>
    )
}
export default CharacterListPage
import React from 'react'

function CharacterDetailsPage (props){
    return(
    <>    
    <h1>Detalhes do Personagem</h1>
    <p>{props.url}</p>
    <button onClick={props.goToListPage}>Voltar para a lista de personagens</button>
    </>
    )
}
export default CharacterDetailsPage;
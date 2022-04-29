import React, { useState } from "react";
import CharacterDetailsPage from "./pages/CharacterDetailsPage/CharacterDetailsPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";

function App() {
  const [currentPage] = useState('list')

function selectPage (){
  if (currentPage === 'list'){
    return <CharacterListPage/>
  } else{
    return <CharacterDetailsPage/>
  }
}
  return (
    <div>
    {selectPage()}
    </div>
  );
}

export default App;

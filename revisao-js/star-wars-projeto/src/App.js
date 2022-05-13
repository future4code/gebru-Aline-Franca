import React, { useState } from "react";
import CharacterDetailsPage from "./pages/CharacterDetailsPage/CharacterDetailsPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";

function App() {
  const [currentPage,setCurrentPage] = useState('list')
  const [detailsUrls, setDetailsUrls] = useState('')

function goToDetailsPage (url){
  setCurrentPage('details')
  setDetailsUrls(url)
}  

function goToListPage (){
  setCurrentPage('list')
}  
function selectPage (){
  if (currentPage === 'list'){
    return <CharacterListPage goToDetailsPage={goToDetailsPage}/>
  } else{
    return <CharacterDetailsPage goToListPage={goToListPage} url={detailsUrls}/>
  }
}
  return (
    <div>
    {selectPage()}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './img/AlinePerfil.jpeg'
import ImagemMax from './img/Max.jpeg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPerfil} 
          nome="Aline"
          descricao="Oi, sou a Aline, estudante de Desenvolvimento Web Full Stack, pela Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
        email="Meu e-mail: alinefranca0000000000@gmail.com"
        imagem="https://apexensino.com.br/wp-content/uploads/2017/03/iconmonstr-email-4-icon-27.png"
        
        />
        <CardPequeno
        imagem="https://e7.pngegg.com/pngimages/849/42/png-clipart-computer-icons-famille-marie-jeunesse-address-logo-logo-mobile-phones.png" 
        endereco="Endereço: Rua Jeová Aloísio Sampaio"
        />
      </div>

      <div className="page-section-container">
        <h2>Um pouco sobre mim</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem={ImagemMax}
          nome="Max" 
          descricao="Sou o filho da Aline, faço muita bagunça mas esbanjo amor" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
      </div>
      
      
    </div>
  );
}

export default App;

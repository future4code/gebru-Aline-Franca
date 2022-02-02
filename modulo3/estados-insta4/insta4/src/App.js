import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/56'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'marcelo'}
          fotoUsuario={'https://picsum.photos/50/55'}
          fotoPost={'https://picsum.photos/200/152'}
        />

<Post
          nomeUsuario={'maria'}
          fotoUsuario={'https://picsum.photos/50/60'}
          fotoPost={'https://picsum.photos/200/151'}
        />
      </MainContainer>
      
    );
  }
}

export default App;

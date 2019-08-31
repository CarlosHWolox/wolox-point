import React from 'react';
import AppContainer from './components/index.js';
import styled from 'styled-components';

const ContainerBackground = styled.div`
  border-radius: 20px;
`;

function App() {
  return (
    <ContainerBackground>
      <AppContainer /> 
    </ContainerBackground>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';

import Header from './components/Header/index.js';
import Feed from './components/Feed/index.js';

const Container = styled.div`
    width: 400px;
    height: 650px;
    background-color: #2b489d;
    overflow: auto;
`;

function App() {
  return (
    <Container>
      <Header />
      <Feed /> 
    </Container>
  );
}

export default App;

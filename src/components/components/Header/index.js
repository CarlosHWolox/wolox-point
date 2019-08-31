import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 400px;
    height: 40px;
    display: flex;
    border-bottom: 1px solid #fafafa;
    padding-bottom: 10px;
    align-items: center;
    position: absolute;
    background-color: #2b489d;

    font-family: 'Quicksand', sans-serif;
`;

const Icon = styled.div`
    font-size: 32px;
    color: #fafafa;
    padding: 10px 12px;
    flex-basis: 1;
`;

const CountryLabel = styled.div`
    height: 100%;
    font-size: 18px;
    font-family: 'Anton', sans-serif;
    color: #fafafa;
    border-left: 1px solid #fafafa;
    padding: 10px 10px;
    flex-basis: 3;
    font-weight: 700;
    line-height: 1.8;

    font-family: 'Quicksand', sans-serif;
`;

function Header() {
  return (
    <Container>
      <Icon>
        W
      </Icon>
      <CountryLabel>
        CHILE 
      </CountryLabel>
    </Container>
  );
}

export default Header;

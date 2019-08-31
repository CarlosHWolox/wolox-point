import React, { Component } from 'react';
import styled from 'styled-components';

import FeedItem from './components/FeedItem/index';

import { getValues } from '../../../firebase';

const Container = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
`;

class Header extends Component {

    // value = []


    // componentDidMount() {
    //     this.value = getValues();
    // }

    render() {
        console.log(getValues())
        return (
            <Container>
                {/* {getValues().map(value => <FeedItem name={value && value.name} type={value && value.type}/> || null)} */}
            </Container>
          );      
    }
  
}

export default Header;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 92%;
    height: 300px;
    border-bottom: 1px solid #E6F4F1;
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    padding-bottom: 0;
`;

const TextContainer = styled.div`
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    color: #fafafa;
`;

const TagContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    font-family: 'Nunito', sans-serif;
    color: #d44253;
    text-transform: uppercase;
    font-weight: 900;
    p {
        font-size: 12px;
    }
`;

function FeedItem({ name = '', type = ''}) {
  return (
    <Container>
        <TextContainer>
            {name}
        </TextContainer>
        <TagContainer>
            <p>
                {type}
            </p>
        </TagContainer>
    </Container>
  );
};

export default FeedItem;

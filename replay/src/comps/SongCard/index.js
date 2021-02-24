import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #121212;
    min-width: 181px;
    max-width: 181px;
    min-height: 255px;
    max-height: 255px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SongCover = styled.div`
    width: 175px;
    height: 175px;
    margin: 3px;
    background-color: white;
    border-radius: 12px;
    background-image: url("https://images.genius.com/5d25257bdcb39e03533518d32651d8aa.1000x1000x1.jpg"); //prop
    background-size: cover;
`;

const SongDetailCont = styled.div`
    width: 100%;
    max-height: 80px;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
        margin: 17px 15px 0 15px;
    }

    h6 {
        margin: 5px 15px 17px 15px;
        opacity: 0.5;
    }
`;

const SongCard = ({title, artist}) => {
    return <Container>
        <SongCover />
        <SongDetailCont>
            <h4>{title}</h4>
            <h6>{artist}</h6>
        </SongDetailCont>
    </Container>
}

SongCard.defaultProps = {
    title:"just saying",
    artist:"EDEN"
}

export default SongCard;
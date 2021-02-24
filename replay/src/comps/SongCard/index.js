import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #1E1C21;
    min-width: 190px;
    max-width: 190px;
    min-height: 275px;
    max-height: 275px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    :hover {
        cursor: pointer;
        background-color: #423F46;
        transition: 500ms ease-in-out;
    }
`;

const SongCover = styled.div`
    width: 180px;
    height: 180px;
    margin: 5px;
    background-color: white;
    border-radius: 12px;
    background-image: url("https://images.genius.com/5d25257bdcb39e03533518d32651d8aa.1000x1000x1.jpg"); //prop
    background-size: cover;
`;

const SongDetailCont = styled.div`
    width: 100%;
    max-height: 85px;
    min-height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
        margin: 17px 15px 0 15px;
    }

    h6 {
        margin: 10px 15px 17px 15px;
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
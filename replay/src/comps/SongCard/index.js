import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 20px;
`;
const SongCardCont = styled.div`
    display:flex;
    align-items: center;
    min-height: 88px;
    max-height: auto;
    width: 297px;
    background: #1E1C21;
    border-radius: 15px;
`;

const SongImg = styled.img`
    margin: 0 12px;
    height: 64px;
    width: 64px;
    border-radius: 4px;
`;

const SongDetail = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 12px;
`;

const Song = styled.p`
    font-weight: 700;
    margin-bottom: -15px;
`;

const SongArtist = styled.h6`
    opacity: 0.55;
`;

const SongCard = ({ albumCover, song, artist, year }) => {
    return <Container>
        <SongCardCont>
            <SongImg src={albumCover} />
            <SongDetail>
                <Song>{song}</Song>
                <SongArtist>{artist}</SongArtist>
            </SongDetail>
        </SongCardCont>
    </Container>
}

SongCard.defaultProps = {
    albumCover: "https://e-cdns-images.dzcdn.net/images/cover/0c33e334175aa036276374ebe76de8f9/250x250-000000-80-0-0.jpg",
    song: "I Took A Pill In Ibiza",
    artist: "Mike Posner"
}

export default SongCard;
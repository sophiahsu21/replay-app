import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {CgAdd} from "react-icons/cg";

const Container = styled.div`
    background-color: #121212;
    min-width: 321px;
    min-height: 77px;
    max-width: 321px;
    max-height: 77px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    transition: 200ms ease-in-out;

    :hover {
        background-color: #1E1C21;
        transition: 200ms ease-in-out;
    }
`;

const SongCont = styled.div`
    margin: 0 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
`;

const SongDet = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: -15px;
    max-width: 205px;

    h5 {
        font-weight: 700;
        opacity: 1;
        margin-bottom: -13px;
    }

    h6 {
        opacity: 0.35;
    }
`;



const AddSong = ({songname, songartist}) => {
    return <Container>
        <SongCont>
            <CgAdd color="#F5F5F5" size="24px"/> {/*onclick goes here*/}
            <SongDet>
                <h5>{songname}</h5>
                <h6>{songartist}</h6>
            </SongDet>
        </SongCont>
    </Container>
}

AddSong.defaultProps = {
    songname: "I Like It When You Love Me",
    songartist: "Oh Wonder"
}

export default AddSong;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {CgAdd} from "react-icons/cg";

const MainCont = styled.div``;

const Container = styled.div`
    background-color: #121212;
    min-width: 291px;
    min-height: 77px;
    max-width: 291px;
    max-height: 77px;
    border-radius: 15px;
    display:${({hide})=> hide ? "flex" : "none"};
    align-items: center;
    transition: 200ms ease-in-out;
    margin: 0 15px;

    :hover {
        background-color: #1E1C21;
        transition: 200ms ease-in-out;
    }
`;

const SongCont = styled.div`
    margin: 0 15px;
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


const AddSong = ({song, artist, add}) => {

    const [hide, setHide] = useState(true)

    const handleHide = () =>{
        setHide(false)
    }
    return <Container  hide={hide}>
        <SongCont>
            <CgAdd
                color="#F5F5F5"
                size="24px"
                cursor="pointer"
                onClick={add}
            /> 
            <SongDet>
                <h5>{song}</h5>
                <h6>{artist}</h6>
            </SongDet>
        </SongCont>
    </Container>
}

AddSong.defaultProps = {
    song: "I Like It When You Love Me",
    artist: "Oh Wonder",
    add:()=>{}
}

export default AddSong;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {RiArrowRightSLine} from "react-icons/ri";

const MainCont = styled.div``;

const Container = styled.div`
    background-color: #121212;
    min-width: 291px;
    min-height: 77px;
    max-width: 291px;
    max-height: 77px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    transition: 200ms ease-in-out;
    margin: 0 15px;

    :hover {
        background-color: #1E1C21;
        transition: 200ms ease-in-out;
    }
`;

const PlaylistCont = styled.div`
    margin: 0 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
`;

const PlaylistDet = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: -15px;
    max-width: 205px;

    h5 {
        font-weight: 700;
        opacity: 1;
        margin-bottom: 30px;
    }

    h6 {
        opacity: 0.35;
    }
`;


const AddPlaylist = ({playlistname, viewPlaylist}) => {
    return <Container>
        <PlaylistCont>

            <PlaylistDet>
                <h5>{playlistname}</h5>
                {/* <h6>{username}</h6> */}

                <RiArrowRightSLine
                style={{marginRight: "15px",marginTop: "20px", position: "absolute", right: "0"}}
                color="#F5F5F5"
                size="24px"
                cursor="pointer"
                onClick={viewPlaylist}
            /> 
            </PlaylistDet>
        </PlaylistCont>
    </Container>
}

AddPlaylist.defaultProps = {
    playlistname: "Chillhop",
    // username: "Simon"
}

export default AddPlaylist;
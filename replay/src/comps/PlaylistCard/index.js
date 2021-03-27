
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {IoIosArrowForward} from 'react-icons/io';

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const PlaylistCardCont = styled.div`
    display:flex;
    margin-bottom:20px;
    height: 88px;
    width: 297px;
    background: #1E1C21;
    border-radius: 15px;
    align-items: center;
`;

const PlaylistImage = styled.img`
    margin: 12px 12px 12px ;
    height: 64px;
    width: 64px;
    overflow-wrap: break-word;
    border-radius: 4px;
    background-repeat: no-repeat;
    object-fit: cover;
    overflow:hidden;
    & > img {
        width:auto;
        height:100%;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
`;

const PlaylistName = styled.div`
margin: 0 0 5px 10px;
font-size:16px;
font-weight:700;
`;

const PlaylistIcon = styled.div`
position: relative;
right: 20px;

    :hover {
        cursor: pointer;
    }
`;

const PlaylistCard = ({plname, plimg, viewPlaylist}) => {
    return <Container>
             <PlaylistCardCont>
                <PlaylistImage src={plimg} />
                <Content>
                    <PlaylistName>{plname}</PlaylistName>
                    <PlaylistIcon onClick={viewPlaylist}><IoIosArrowForward size="24px" color="#F06449"/></PlaylistIcon>
                </Content>
             </PlaylistCardCont>


    </Container>
}

PlaylistCard.defaultProps = {
plname:null,
plimg:null,
viewPlaylist:()=>{}
}

export default PlaylistCard;

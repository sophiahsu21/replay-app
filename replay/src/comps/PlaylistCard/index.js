
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
margin-top:20px;
height: 88px;
width: 297px;
background: #1E1C21;
border-radius: 15px;
align-items: center;

`;

const PlaylistImage = styled.div`
margin: 12px 12px 12px ;
min-height: 64px;
min-width: 64px;
max-height: 64px;
max-width: 64px;
overflow-wrap: break-word;
border-radius: 4px;
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
// const PlaylistLikes = styled.div`
// padding-top:15px;
// font-size:12px;
// font-weight:400;
// color: #F5F5F5 55%;

// `;
const PlaylistCard = ({plname, plimg, onClick}) => {
    return <Container>
             <PlaylistCardCont>
                <PlaylistImage>{plimg}</PlaylistImage>
                <Content>
                    <PlaylistName>{plname}</PlaylistName>
                    <PlaylistIcon onClick={onClick}><IoIosArrowForward size="24px" color="#F06449"/></PlaylistIcon>
                </Content>
             </PlaylistCardCont>


    </Container>
}

PlaylistCard.defaultProps = {
plname:null,
plimg:null,
onClick:()=>{}
}

export default PlaylistCard;

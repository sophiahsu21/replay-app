import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
`;
const PlaylistCardCont = styled.div`
display:flex;
position:relative;
margin-top:10px;
height: 88px;
width: 297px;
background: #1E1C21;
border-radius: 15px;
`;

const PlaylistImage = styled.img`
position:relative;
margin: 12px 12px 12px ;
height: 64px;
width: 64px;
border-radius: 4px;
`;

const PlaylistName = styled.div`
position:relative;
margin: 20px 10px;
font-size:14px;
font-weight:400;
`;

const PlaylistIcon = styled.img`
display:block;
position:relative;
width:15px;
height:15px;
padding-left:60px;
padding-top:35px;
`;

const PlaylistLikes = styled.div`
padding-top:15px;
font-size:12px;
font-weight:400;
color: #F5F5F5 55%;
`;

const SongCard = ({plname,pllikes}) => {
    return <Container>
             <PlaylistCardCont>

                <PlaylistImage src="song.png" >
                    {/* need to use image that user upload */}
                </PlaylistImage>
                <PlaylistName>
                    {plname}
                    <br></br>


                    <PlaylistLikes>{pllikes}</PlaylistLikes>
                </PlaylistName>
                <PlaylistIcon src="Like.svg"></PlaylistIcon>
             </PlaylistCardCont>


    </Container>
}

SongCard.defaultProps = {
plname: "save your tears",
pllikes: "the weeknd"
}

export default SongCard;
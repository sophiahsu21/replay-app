
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
  justify-content:center;
  align-items:center;
`;
const PlaylistCardCont = styled.div`
display:flex;
position:relative;
margin-top:20px;
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
font-size:16px;
font-weight:700;
`;
const PlaylistIcon = styled.img`
display:block;
position:relative;
width:10px;
height:18px;
padding-left:110px;
padding-top:35px;
`;
const PlaylistLikes = styled.div`
padding-top:15px;
font-size:12px;
font-weight:400;
color: #F5F5F5 55%;

`;
const PlaylistCard = ({plname,pllikes}) => {
    return <Container>
             <PlaylistCardCont>

                <PlaylistImage src="moody.png" >
                    {/* need to use image that user upload */}
                </PlaylistImage>
                <PlaylistName>
                    {plname}
                    <br></br>


                    <PlaylistLikes>{pllikes}</PlaylistLikes>
                </PlaylistName>
                <PlaylistIcon src="arrow1.svg"></PlaylistIcon>
             </PlaylistCardCont>


    </Container>
}

PlaylistCard.defaultProps = {
plname: "Moody",
pllikes: "9 likes"
}

export default PlaylistCard;

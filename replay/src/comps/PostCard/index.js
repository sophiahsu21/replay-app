
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;

position: relative;
top:10%;
left:45%;
margin:10px;
transform: translate(-50%, 0%);
`;


const PostCardCont = styled.div`
position: relative;
top:10%;
left:50%;
margin:10px;
transform: translate(-50%, 0%);
display:flex;
width: 321px;
height: 206px;
background: #1E1C21;
border-radius: 15px;
`;


const User = styled.div`
position: relative;
width: 321px;
height: 206px;
background: #1E1C21;
border-radius: 15px;
`;

const Profile = styled.div`
position:absolute  ;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(240, 100, 73, 0.54) 0%, rgba(255, 255, 255, 0) 100%), rgba(194, 181, 181, 0.34);
  z-index: 0;
  background-image: ${(props) =>
    props.profile ? props.profile : "url('avatar.svg')"};
  background-size: 10px 10px;

  background-position:center center;
  background-repeat: no-repeat;
    margin-top:20px;
    margin-left:22px;
    
`;
const NameUser = styled.h6`
  
  position: absolute;
  margin-top:22px;
  margin-left:50px;
  justify-content:center;
  align-items:center;
`;

const PlaylistCardCont = styled.div`
display:flex;
position:absolute;
margin-top:58px;
margin-left:10px;
height: 88px;
width: 297px;
background: #121212;
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
font-weight:600;
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
const PostCardLike = styled.img`
position:relative;
margin-top:40px;
width:22px;
height:22px;
padding-top:120px;
padding-right:20px;
font-weight:400;
color: #F5F5F5 55%;
`;
const PostCard = ({plname,pllikes, profile,name}) => {
    return <Container>
                <PostCardCont>
                    <User>
                    <Profile profile={profile}>
                     {" "}
                     </Profile>
                     <NameUser>{name}</NameUser>
                    </User>
              
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

        <PostCardLike src="like.svg"/>
        </PostCardCont>

        </Container>
}

PostCard.defaultProps = {
    plname: "Moody",
    pllikes: "9 likes",
    name: "Simon"
}

export default PostCard;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { VscHeart } from 'react-icons/vsc';
import { FaHeart } from 'react-icons/fa';
import {IoIosArrowForward} from 'react-icons/io';

const Container = styled.div`
  margin-bottom: 20px;
  display:flex;
  justify-content: center;
  flex-direction: column;
  width: 321px;
  height: 206px;
  background: #1E1C21;
  border-radius: 15px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  max-height: 20px;
`;

const Profile = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom:3px;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(240, 100, 73, 0.54) 0%, rgba(255, 255, 255, 0) 100%), rgba(194, 181, 181, 0.34);
  z-index: 0;
  background-image:"url('avatar.svg')";
  display:flex;
  align-items:center;
  justify-content:center;
  background-repeat: no-repeat; 
  object-fit:cover;
  overflow:hidden;
  & > img {
    width:auto;
    height:100%;
  }
`;

const NameUser = styled.h6`
  margin-left:15px;
  font-weight:550;
`;

const PlaylistContainer = styled.div`
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
  background-color: #121212;
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

const PostCardLike = styled.div`
  display: ${props => props.showIcon ? "flex" : "none"};
  width: 305px;
  justify-content: flex-end;
  margin-bottom: 15px;
  color: #F5F5F5 55%;
  cursor: pointer;
`;

const PostCard = ({ id, plname, plimg, viewPlaylist, profile, name, onClick }) => {
  const [icon, setIcon] = useState(true);

  const handleClick = () => {
    setIcon(!icon);
  }

  return <Container>
    <User>
      <Profile src={profile} />
      <NameUser>{name}</NameUser>
    </User>

    <PlaylistContainer>
       <PlaylistCardCont>
        <PlaylistImage src={plimg} />
          <Content>
          <PlaylistName>{plname}</PlaylistName>
          <PlaylistIcon onClick={viewPlaylist}><IoIosArrowForward size="24px" color="#F06449"/></PlaylistIcon>
        </Content>
      </PlaylistCardCont>
    </PlaylistContainer>

    <PostCardLike
      showIcon={icon}
      onClick={() => {
        handleClick();

        onClick(id);
      }}
    >
      <VscHeart
        size="1.40rem"
        color="#ddd"
      />
      
    </PostCardLike>
    <PostCardLike
      showIcon={!icon}
      onClick={() => {
        handleClick();
        // unlike();
      }}
    >
      <FaHeart
        size="1.40rem"
        color="#F06449"
      />
    </PostCardLike>
  </Container>
}

PostCard.defaultProps = {
  plname: "Moody",
  pllikes: "9 likes",
  name: "Simon",
  onClick:()=>{}
}

export default PostCard;

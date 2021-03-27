
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const InfoContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
`;

const Cover = styled.img`
  width: 145px;
  height: 145px;
  border-radius: 17px;
  background: linear-gradient(180deg, rgba(240, 100, 73, 0.54) 0%, rgba(255, 255, 255, 0) 100%), rgba(194, 181, 181, 0.34);
  background-image: ${(props) =>
    props.profile ? props.profile : "url('https://data.whicdn.com/images/343177373/original.jpg')"};
  /* background-image: url("https://data.whicdn.com/images/343177373/original.jpg"); */
  object-fit: cover;
  overflow:hidden;
  background-repeat: no-repeat;
  margin-top:85px;
  & > img {
    width:auto;
    height:100%;
    }
`;

const NameUser = styled.h2`
`;


const PlaylistCover = ({ cover, name, id }) => {
  return (
    <InfoContainer id={id}>
      <Cover src={cover}/>
      <NameUser>{name}</NameUser>
    </InfoContainer>
  );
};

PlaylistCover.defaultProps = {
    cover: null,
    name: "Moody"
}

export default PlaylistCover;
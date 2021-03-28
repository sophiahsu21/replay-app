
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const InfoContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center; 
`;

const Profile = styled.img`
  width: 145px;
  height: 145px;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(240, 100, 73, 0.54) 0%, rgba(255, 255, 255, 0) 100%), rgba(194, 181, 181, 0.34);
  z-index: 0;
  background-image:"url('avatar.svg')";
  display:flex;
  align-items:center;
  justify-content:center;
  object-fit: cover;
  overflow:hidden;
  background-repeat: no-repeat;
  & > img {
    width:auto;
    height:100%;
  }
`;


const Avatar = ({ profile, name, onClick }) => {
  return (
    <InfoContainer onClick={onClick}>
      <Profile src={profile} />
      <h2>{name}</h2>
    </InfoContainer>
  );
};

Avatar.defaultProps = {
    name: "Simon",
    onClick:()=>{},

}

export default Avatar;


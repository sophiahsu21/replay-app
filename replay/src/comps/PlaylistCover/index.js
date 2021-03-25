
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const InfoContainer = styled.div`
  display: flex;
  position: relative;
  justify-content:center;
  align-items:center;
  margin-bottom:50px;
`;

const Profile = styled.div`
/* position:relative  ; */
  min-width: 145px;
  min-height: 145px;
  border-radius: 17px;
  background: linear-gradient(180deg, rgba(240, 100, 73, 0.54) 0%, rgba(255, 255, 255, 0) 100%), rgba(194, 181, 181, 0.34);
  z-index: 0;
  background-image: ${(props) =>
    props.profile ? props.profile : "url('moody.png')"};
  background-size: 159px 159px;
  background-position:center center;
  background-repeat: no-repeat;
margin-top:20px;
`;

const NameUser = styled.h3`
  
  position: absolute;
  margin-left:25%;
  margin-top:160px;

  justify-content:center;
  align-items:center;
`;


const PlaylistCover = ({ profile, name }) => {
  return (
    <InfoContainer>
      <Profile profile={profile}>
        {" "}

        <NameUser>{name}</NameUser>
      </Profile>
      
    </InfoContainer>
  );
};

PlaylistCover.defaultProps = {
    name: "Moody"
}

export default PlaylistCover;
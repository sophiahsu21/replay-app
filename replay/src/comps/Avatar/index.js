
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const InfoContainer = styled.div`
  display: flex;
  position: relative;
  justify-content:center;
  align-items:center;
`;

const Profile = styled.div`
position:relative  ;
  min-width: 145px;
  min-height: 145px;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(240, 100, 73, 0.54) 0%, rgba(255, 255, 255, 0) 100%), rgba(194, 181, 181, 0.34);
  z-index: 0;
  background-image: ${(props) =>
    props.profile ? props.profile : "url('avatar.svg')"};
  background-size: 67px 67px;

  background-position:center center;
  background-repeat: no-repeat;
margin-top:85px;
`;

const NameUser = styled.h3`
  
  position: absolute;
  margin-top:300px;
  justify-content:center;
  align-items:center;
`;


const Avatar = ({ profile, name }) => {
  return (
    <InfoContainer>
      <Profile profile={profile}>
        {" "}
      </Profile>
      {/* <NameUser>{name}</NameUser> */}
    </InfoContainer>
  );
};

Avatar.defaultProps = {
    name: "Simon"
}

export default Avatar;


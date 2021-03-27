import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PlaylistCover = styled.div`
    width: 159px;
    height: 159px;
    border-radius: 17px;
    margin: 25px 0;
    background: linear-gradient(180deg, rgba(240, 100, 73, 0.54) 0%, rgba(255, 255, 255, 0) 100%), rgba(194, 181, 181, 0.34);
    z-index: 0;
    background-image:"url('avatar.svg')";
    display:flex;
    align-items:center;
    justify-content:center;
    background-repeat: no-repeat; 
    object-fit:contain;
    overflow:hidden;
    & > img {
        width:auto;
        height:100%;
    }
`;

const Cover = ({ image, onClick }) => {
  return (
      <PlaylistCover onClick={onClick}>
        <img src={image} />
      </PlaylistCover>
  );
};

Cover.defaultProps = {
    onClick:()=>{}

}

export default Cover;


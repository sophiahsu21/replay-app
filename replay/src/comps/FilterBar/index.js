import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {HiSearch} from 'react-icons/hi';
import {CgClose} from 'react-icons/cg';


const Container = styled.div`
    display: flex;
    //flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 25px;
    min-width: 321px;
    max-width: 321px;
`;

const Icon = styled.div`
    position: relative;
    display: flex;
`;

const SearchField = styled.input`
    min-width: 282px;
    min-height: 32px;
    max-width: 282px;
    max-height: 32px;
    padding: 8px 45px 8px 15px;
    border: none;
    background-color: #423F46;
    color: #F5F5F5;
    opacity: 1;
`;

const FilterBar = ({ placeholder, onChange, onClick }) => {

    return <Container>
        <Icon>
            <HiSearch
                style={{marginRight: "15px", position: "absolute", top: "24%", right: "0"}}
                color="#F5F5F5"
                opacity="0.35"
                size="1.25rem"
                cursor="pointer"
            />
            <SearchField
                type='text'
                placeholder={placeholder} 
                onChange={onChange}
                onkeyup="this.value = this.value.toLowerCase();"
            />
        </Icon>
        <CgClose
            style={{marginLeft: "15px", position: "relative", top: "14px"}}
            color="#F5F5F5"
            size="1.5rem"
            cursor="pointer"
            // onClick={() => history.push("/PlaylistAdd")}
            onClick={onClick}
        />
    </Container>
}

FilterBar.defaultProps = {
    placeholder:'Search for Songs',
    onChange:()=>{},
    onClick:()=>{}
}

export default FilterBar;
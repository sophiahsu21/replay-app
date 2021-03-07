import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {HiSearch} from 'react-icons/hi';

import {
    useHistory
} from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 25px;
`;

const Icon = styled.div`
    position: relative;
    display: flex;

    :hover {
        cursor: pointer;
    }
`;

const SearchField = styled.input`
    min-width: 321px;
    min-height: 32px;
    max-width: 321px;
    max-height: 32px;
    padding: 8px 15px;
    border: none;
    background-color: #423F46;
    color: #F5F5F5;
    opacity: 1;
`;

const SearchBar = () => {

    const history = useHistory();

    return <Container>
        <Icon onClick={() => history.push("/AddSongs")}>
            <HiSearch
                style={{marginRight: "15px", position: "absolute", top: "24%", right: "0"}}
                color="#F5F5F5"
                opacity="0.35"
                size="1.25rem"
                cursor="pointer"
            />
            <SearchField type='text' placeholder='Search for Songs' />
        </Icon>
    </Container>
}

SearchBar.defaultProps = {
}

export default SearchBar;
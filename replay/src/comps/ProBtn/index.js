import React from 'react';
import styled from 'styled-components';

import {IoIosArrowForward} from 'react-icons/io';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 21px;
    background-color: #1E1C21;
    padding: 5px 15px;
    border-radius: 25px;

    h6 {
        margin-right: 10px;
    }

    :hover {
        cursor: pointer;
    }
`;
const ProBtn = ({id, onClick}) => {
    return <Container onClick={onClick} id={id}
    >
        <h6>View Profile</h6>
        <IoIosArrowForward size="12px" color="#F5F5F5" />
    </Container>
}

ProBtn.defaultProps =  {
    id:null,
    onClick:()=>{}
}

export default ProBtn;
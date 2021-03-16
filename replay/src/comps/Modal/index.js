import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { HiCheck } from 'react-icons/hi';

const Container = styled.div`
    min-width: 185px;
    max-width: 185px;
    min-height: 127px;
    background-color: #1E1C21;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
        margin-top: 0px;
        margin-bottom: 10px;
    }
`;

const Modal = () => {
    return <Container>
        <h4>Song Added</h4>
        <HiCheck size="36px" color="#F5F5F5" />
    </Container>
}

Modal.defaultProps = {
}

export default Modal;
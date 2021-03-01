import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const LogoImg = styled.img`
    display: flex;
`;

const Heading = styled.h1`
    margin: 50px 0 115px 0;
    max-width: 146px;
`;

const FormInput = styled.input`
    min-height: 51px;
    min-width: 275px;
    padding: 16px;
    border: 1px solid #F5F5F5;
    box-sizing: border-box;
    border-radius: 7px;
    opacity: 0.35;
    background-color: #050505;
    color: #F5F5F5;
    margin-bottom: 25px;
`;

const FormButton = styled.button`
    min-height: 51px;
    min-width: 275px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #F06449;
    box-sizing: border-box;
    border-radius: 7px;
    background-color: #050505;
    color: #F06449;
    transition: 500ms ease-in-out;

    :hover {
        cursor: pointer;
        border: 1px solid #F06449;
        background-color: #F06449;
        color: #F5F5F5;
        transition: 500ms ease-in-out;
        
    }
`;

const SUMsg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        cursor: pointer;
    }

    p {
        font-size: 0.83em;
        font-weight: 400;
        opacity: 0.35;
        margin-right: 10px;
    }
    h5 {
        font-weight: 700;
    }
`;

const LogIn = ({ onLogInComplete }) => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return <Container>
        <LogoImg src="replay_logo.png" width="62px" alt="logo" />
        <Heading>Welcome Back</Heading>
        <FormInput type='text' placeholder='Email' onChange={(e) => {
            setEmail(e.target.value)
        }} />
        <FormInput type='password' placeholder='Password' onChange={(e) => {
            setPass(e.target.value)
        }} />
        <FormButton onClick={() => {
            onLogInComplete(email, pass)
        }}>
            Log In
        </FormButton>
        <SUMsg>
            <p>Don't have an account?</p>
            <h5>SIGN UP</h5>
        </SUMsg>

    </Container>
}

LogIn.defaultProps = {
    onLogInComplete:()=>{}
}

export default LogIn;
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import {
    useHistory
} from "react-router-dom";

const LandingPage = () => {
    /*
    check if the token is expired or if there is a token at all

        if not
        -> redirect to login

    axios call to get my user profile
    axios call to update my user profile

    */

    const history = useHistory();

    const CheckToken = async () => {
        //assume we will store the login in the sessionStorage

        const token = await sessionStorage.getItem("token");
        console.log(token);
        if(token) {
            axios.defaults.headers.common['Authorization'] = token;
            history.push("/Home");
        }
    }

    useEffect(() => {
        //when the page loads, do the following
        CheckToken();
    },[])

    return <div className="lp-container">
        <div className="gs-cont">
            <img src="replay_logo.png" width="214px" alt="logo" />
            <h3>Mix up your vibe. Curate your next perfect playlist.</h3>
            <button className="gs-btn" onClick={() =>
                history.push("/Register")
            }>Get Started</button>
        </div>
    </div>
}

export default LandingPage;
import React, { useState, useEffect } from 'react';

import axios from 'axios';

//shortcut imports
import NavBar from "../../comps/NavBar";
import PostCard from "../../comps/PostCard";
import FilterBar from 'comps/FilterBar';

import {
    useHistory
} from "react-router-dom";


const Home = () => {
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

    return <div className="home-container">
        <FilterBar placeholder='Search for Playlists'/>
        <div className="home-cont">
        <div className="home-text"><h2>Welcome Back</h2></div>
            <PostCard/>
            <PostCard/>
            <NavBar className="navbar"/>
            </div>
    </div>
}

export default Home;
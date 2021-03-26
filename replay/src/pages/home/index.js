import React, { useState, useEffect } from 'react';

import axios from 'axios';

import NavBar from "../../comps/NavBar";
import PostCard from "../../comps/PostCard";

import {HiSearch} from 'react-icons/hi';

import {
    useHistory
} from "react-router-dom";


const Home =  () => {
    const [playlist, setPlaylist] = useState([]);

    const GetPlaylists = async () => {
        var resp = await axios.get("http://localhost:4200/api/playlists");

        console.log(resp);
        setPlaylist(resp.data.playlists);
    }

    // map to get user

    useEffect(() => {
        CheckToken();
        GetPlaylists()
    },[]);


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
        <div className="search">
            <HiSearch
                size="1.25rem"
                color="#F5F5F5"
                cursor="pointer"
                onClick={() => history.push("/SearchPlaylist")}
            />
        </div>
        <div className="home-cont">
            {/* <div className="home-text"><h2>Welcome Back</h2></div> */}
            <h2>Welcome Back</h2>
            <div className="home-playlist">
                {playlist.map((o) => {
                    return (
                        <PostCard
                            viewPlaylist={() => history.push("/ViewPlaylist/"+o.id)}
                            plname={o.name}
                            plimg={o.images}

                        />
                    );
                })}
            </div>
            <NavBar className="navbar"/>
        </div>
    </div>
}

export default Home;
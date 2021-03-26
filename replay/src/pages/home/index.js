import React, { useState, useEffect } from 'react';

import axios from 'axios';

import NavBar from "../../comps/NavBar";
import PostCard from "../../comps/PostCard";

import {HiSearch} from 'react-icons/hi';

import {
    useHistory,
    useParams
} from "react-router-dom";


const Home =  () => {
    const history = useHistory();
    const params = useParams();

    const [playlist, setPlaylist] = useState([]);
    const [user, setUser] = useState();
   
    const GetPlaylists = async () => {
        var resp = await axios.get("http://localhost:4200/api/playlists");

        console.log(resp);
        setPlaylist(resp.data.playlists);
    }

    // map to get user
    const GetUser = async () => {
        var resp2 = await axios.get("http://localhost:4200/api/users");

        // const {data:{result:[{id}]}} = resp2;
        // console.log(id, "hi")
        // setUser(id)

        // console.log(resp2.data, "hello")
        // setUser({
        //     ...resp2.data.result[0]
        // })
    }

    const LikePlaylist = async (id) => {
        var resp3 = await axios.post("http://localhost:4200/api/liked", { playlist_id:id });

        console.log(resp3, "test")



    }

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
        CheckToken();
        GetPlaylists();
        GetUser();
        //LikePlaylist();
    },[]);

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
                            plimg={o.image_url}

                            //for liking 
                            onClick={LikePlaylist}
                            id={o.id}

                            // getting user creds
                            profile={o.usersimg}
                            name={o.username}
                        />
                    );
                })}
            </div>
            <NavBar className="navbar"/>
        </div>
    </div>
}

export default Home;
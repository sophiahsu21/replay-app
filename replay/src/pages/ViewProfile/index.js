import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'

import NavBar from "../../comps/NavBar";
import Avatar from "../../comps/Avatar";
import PlaylistCard from "../../comps/PlaylistCard";

import {
    useHistory,
    useParams
} from "react-router-dom";
import { PanoramaSharp } from "@material-ui/icons";


const ViewProfile = () => {

    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState("")
    const [file, setFile] = useState();
    const [open, setOpen] = useState(true);
    const [playlist, setPlaylist] = useState([]);
    const [liked, setLiked] = useState([]);

    const history = useHistory();
    const params = useParams();

    const getUserData = async () => {

        const result = await axios.get('/api/users/')
        // console.log(result, "user data");

        const {data:{pictures:[{name}]}} = result

        console.log(name, "user data")
        setUsername(name);

    }

    const getUserPlaylists = async () => {
        var resp2 = await axios.get("http://localhost:4200/api/user_playlists/"+ params.id);
    
        console.log(resp2, "fuck")
        setPlaylist([...resp2.data.results]);


    }

    const GetLikedPlaylists = async () => {
        // show liked playlists
        var resp3 = await axios.get("http://localhost:4200/api/likes")

        setLiked([...resp3.data.result]);
        console.log(resp3, "hello")
    }

    const handleOpen = () => {
        setOpen(!open);
    }
    useEffect(() => {
        // CheckToken();
        getUserPlaylists();
        GetLikedPlaylists();
        getUserData();
    }, []);

    return (
        <div className="profile-container">          
                    <Avatar
                        profile={posts}
                        name={username}
                        onClick={handleOpen}
                    />
                <div className="text"><h3>Playlists</h3></div>          
                <div className="content">
                    {playlist.map((o) => {
                        return (
                            <PlaylistCard
                                viewPlaylist={() => history.push("/ViewPlaylist/"+o.id)}
                                plname={o.name}
                                plimg={o.image_url}
                            />
                        );
                    })}
                </div> 
                <h3>Liked Playlists</h3>           
                <div className="content">
                    {liked.map((o) => {
                        return (
                            <PlaylistCard
                                viewPlaylist={() => history.push("/ViewPlaylist/"+o.id)}
                                plname={o.name}
                                plimg={o.image_url}
                            />
                        );
                    })}
                </div>
            <NavBar />
        </div>
    )
}

export default ViewProfile;
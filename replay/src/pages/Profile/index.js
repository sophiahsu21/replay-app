import React, { useState, useEffect } from "react";
import axios from "axios";


import NavBar from "../../comps/NavBar";
import Avatar from "../../comps/Avatar";
import PlaylistCard from "../../comps/PlaylistCard";
import SongCard from "../../comps/SongCard";
import {
    useHistory
} from "react-router-dom";


const Profile = () => {

    const history = useHistory();

    const [playlist, setPlaylist] = useState("");

    const HandleCreatePlaylistName = () => {
        //create a playlist
    }

    return (
        <div className="profile-container">

            <div className="profile-image">

<Avatar />
<div className="text"><h2>My playlist</h2></div>
<PlaylistCard/>
<PlaylistCard/>



            </div>

            <NavBar/>
         
        </div>
    )
}

export default Profile;
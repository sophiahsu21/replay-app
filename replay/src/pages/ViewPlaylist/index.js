import React, { useState, useEffect } from "react";
import axios from "axios";


import NavBar from "../../comps/NavBar";
import PlaylistCover from "../../comps/PlaylistCover";
import SongCard from "../../comps/SongCard";

import {
    useHistory
} from "react-router-dom";


const ViewPlaylist = () => {

    const history = useHistory();

    const [playlist, setPlaylist] = useState("");

    const HandleCreatePlaylistName = () => {
        //create a playlist
    }

    return (
        <div className="profile-container">

            <div className="profile-image">
                <PlaylistCover />
            </div>
            <div className="text"><h2>Songs</h2></div>
            <SongCard />
            <NavBar />

        </div>
    )
}

export default ViewPlaylist;
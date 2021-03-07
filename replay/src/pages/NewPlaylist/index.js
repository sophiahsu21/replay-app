import React, { useState, useEffect } from "react";
import axios from "axios";

import {BsMusicNoteBeamed} from "react-icons/bs";

import {
    useHistory
} from "react-router-dom";

const NewPlaylist = ({}) => {

    const history = useHistory();

    const [playlist, setPlaylist] = useState("");

    const HandleCreatePlaylistName = () => {
        //create a playlist
    }

    return (
        <div className="container">
            <div className="cpCont">
                <div className="playlistCoverCont">
                    <h3>Add Playlist Cover</h3>
                    <div className="playlistCover" onClick={() => {
                        // upload photo
                    }}>
                        <BsMusicNoteBeamed color="white" size="48px" />
                    </div>
                </div>
                <h3>Add Playlist Name</h3>
                <input type='text' placeholder='Name your playlist' onChange={(e) => {
                    setPlaylist(e.target.value)
                }} />
                <div className="btnCont">
                    <button className="cancel" onClick={() => history.push("/NewPlaylist")}>Cancel</button>
                    <button className="create" onClick={() =>
                        HandleCreatePlaylistName(playlist),
                        history.push("/NewPlaylist")
                    }>Create</button>
                </div>
            </div>
        </div>
    )
}

export default NewPlaylist;
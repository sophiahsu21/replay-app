import React, { useState, useEffect } from 'react';

import axios from 'axios';

import SearchBar from 'comps/SearchBar';
import AddSong from 'comps/AddSong';

import {
    useHistory
} from 'react-router-dom';

const PlaylistAdd = () => {

    const history = useHistory();

    return <div className="pa-container">
        <SearchBar />
        {/* <div className="songCont">
            <p>Suggestions</p>
            <AddSong />
            <AddSong
                songname="IDK You Yet"
                songartist="Alexander 23"
            />
            <AddSong
                songname="What They'll Say About Us"
                songartist="FINNEAS"
            />
            <AddSong
                songname="this is how you fall in love"
                songartist="Jeremy Zucker, Chelsea Cutler"
            />
            <AddSong
                songname="Gone"
                songartist="Blake Rose"
            />
        </div> */}
        <div className="pa-btnCont">
            <button className="cancel" onClick={() => history.push("/NewPlaylist")}>Back</button>
            <button className="create" onClick={() =>
                history.push("/ViewPlaylist")
            }>Done</button>
        </div>
    </div>
}

export default PlaylistAdd;
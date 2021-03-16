import React, { useState, useEffect } from 'react';

import FilterBar from 'comps/FilterBar';
import AddSong from 'comps/AddSong';

import {
    useHistory
} from 'react-router-dom';

const AddSongs = () => {
    const history = useHistory();

    return <div className="as-container">
        <FilterBar placeholder='Search for Songs' onClick={() => history.push("/PlaylistAdd")}/>
        <div className="as-songCont">
            {/* based on filter */}
            <AddSong />
        </div>
        <div className="pa-btnCont">
            <button className="cancel" onClick={() => history.push("/NewPlaylist")}>Back</button>
            <button className="create" onClick={() =>
                history.push("/NewPlaylist")
            }>Done</button>
        </div>
    </div>
}

export default AddSongs;
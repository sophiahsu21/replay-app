import React, { useState, useEffect } from 'react';
import axios from "axios";

import FilterBar from 'comps/FilterBar';

import {
    useHistory
} from 'react-router-dom';

const SearchPlaylist = () => {
    const history = useHistory();

    // CHANGE THIS TO SEARCH PLAYLIST
    // you can literally refer to the addsongs page

    return <div className="search-cont">
        <FilterBar
            placeholder='Search for Playlists'
            onChange={(e) => {
                // filter
            }}  
            onClick={() => history.push("/Home")}  
        />
    </div>
}

export default SearchPlaylist;
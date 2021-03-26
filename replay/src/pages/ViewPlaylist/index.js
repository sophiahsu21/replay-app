import React, { useState, useEffect } from "react";
import axios from "axios";


import NavBar from "../../comps/NavBar";
import PlaylistCover from "../../comps/PlaylistCover";
import SongCard from "../../comps/SongCard";

import {
    useHistory
    // useParams
} from "react-router-dom";

const songs = require("./songs.json");
    
const ViewPlaylist = () => {

    const history = useHistory();

    const [playlist, setPlaylist] = useState("");
    const [allsongs, setAllSongs] = useState(songs);

    const getPlaylistInfo = async () => {
        //playlists.name + playlists.img
        //axios.get('/api/playlists_by_id/:id'
    }

    const getAllSongs = async () => {
        //axios.get('/api/playlist_songs/:id'
        var resp = await axios.get("./songs.json");
        setAllSongs(resp); //assuming this will be resp.data
    }

    useEffect(() => {
        getPlaylistInfo();
        getAllSongs();
    },[])

    return (
        <div className="playlist-container">
            <PlaylistCover
                // cover={images}
                // name={name}
            />
            <h3>Songs</h3>
            <div className="songs">
                {allsongs.map((o) => {
                    return (
                        <SongCard
                            albumCover={o.album.cover_medium}
                            song={o.title}
                            artist={o.artist.name}
                            // not too sure cuz there are objects inside objects
                        />
                    )
                })}
            </div>
            <NavBar/>
         
        </div>
    )
}

export default ViewPlaylist;
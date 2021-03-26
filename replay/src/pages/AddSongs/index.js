import React, { useState, useEffect } from 'react';
import axios from "axios";

import FilterBar from 'comps/FilterBar';
import AddSong from 'comps/AddSong';

import {
    useHistory,
    useParams
} from 'react-router-dom';

const music = require("./songs.json")

const AddSongs = () => {
    const history = useHistory();
    const params = useParams();

    const [songs, setSongs] = useState([]);
    const [allsongs, setAllSongs] = useState(music);
    const [songId, setSongId] = useState()


    const getSongs = async () => {
        //endpoint from song api?
        var resp = await axios.get("./songs.json");
        var music = resp.data.slice(0,3);
        setSongs(music)
        setAllSongs(resp.data); //assuming this will be resp.data

    }

    const handleAdd = () =>{
        console.log("hi")
        // var resp = axios.post('http://localhost:4200/api/add_songs')
       
    }

    const FilterSongs = (text) => {
        
        setSongs(
            allsongs.filter((o) => {
                return o.title.includes(text);
            })
        )
    }

    useEffect(() => {
        getSongs();
    },[])

    return <div className="as-container">
        <FilterBar
            placeholder='Search for Songs'
            onChange={(e) => {
                FilterSongs(e.target.value);
            }}  
            onClick={() => history.push("/PlaylistAdd")}  
        />
        <div className="as-songCont">
            <AddSong />
            {songs.map((o) => {
                return (
                    <AddSong
                        song={o.title}
                        artist={o.artist.name}
                        add={handleAdd}
                        // not too sure cuz there are objects inside objects
                    />
                )
            })}
        </div>
        <div className="pa-btnCont">
            <button className="cancel" onClick={() => history.push("/NewPlaylist")}>Back</button>
            <button className="create" onClick={() =>
                history.push("/ViewPlaylist")
            }>Done</button>
        </div>
    </div>
}

export default AddSongs;
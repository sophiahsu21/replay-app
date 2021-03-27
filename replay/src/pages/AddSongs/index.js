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
        var resp = await axios.get("https://replay-music-app.herokuapp.com/api/all_songs");
        // console.log(resp.data.result)
        var music = resp.data.result.slice(0, 100)
        setSongs(music)
        setAllSongs(resp.data.result); //assuming this will be resp.data

    }

    const handleAdd = (id) =>{
        var resp = axios.post('https://replay-music-app.herokuapp.com/api/add_songs', {song_id:id, playlist_id:params.id})
        console.log(id)   
    }


    const FilterSongs = (text) => {     
        setSongs(
            allsongs.filter((o) => {
                return o.title.includes(text) || o.artist.includes(text);
            })
        )
    }
    const handleCreate = ()=>{
        history.push("/ViewPlaylist/"+params.id)
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
            {/* <AddSong /> */}
            {songs.map((o) => {
                return (
                    <AddSong
                        song={o.title}
                        artist={o.artist}
                        onClick={handleAdd}
                        id={o.id}
                        // not too sure cuz there are objects inside objects
                    />
                )
            })}
        </div>
        <div className="pa-btnCont">
            <button className="cancel" onClick={() => history.push("/NewPlaylist")}>Back</button>
            <button className="create" onClick={handleCreate}>Done</button>
        </div>
    </div>
}

export default AddSongs;
import React, { useState, useEffect } from "react";
import axios from "axios";


import NavBar from "../../comps/NavBar";
import PlaylistCover from "../../comps/PlaylistCover";
import SongCard from "../../comps/SongCard";

import {IoIosArrowForward} from 'react-icons/io';

import {
    useHistory,
    useParams
} from "react-router-dom";

import ProBtn from "../../comps/ProBtn";

// const songs = require("./songs.json");
    
const ViewPlaylist = () => {

    const history = useHistory();
    const params = useParams();

    // const [playlist, setPlaylist] = useState("");
    const [songs, setSongs] = useState([]);
    const [info, setInfo] = useState([]);
    const [profile, setProfile] = useState([]);

    const GetPlaylistInfo = async () => {
        var resp = await axios.get("https://replay-music-app.herokuapp.com/api/playlist_info/"+params.id)

        console.log(resp.data, "bye")
        setInfo({
            ...resp.data.result[0]
        })
    }

    const ViewProfile = async () => {
        var resp2 = await axios.get("https://replay-music-app.herokuapp.com/api/playlist_creator/"+params.id)

        console.log(resp2.data, "hi")

        setProfile({
            ...resp2.data.result[0]
        })

        // const {data:{result:[{user_id}]}} = resp2
        
        // history.push("/ViewProfile/"+ user_id)
    }

    const GetAllSongs = async () => {
        //axios.get('/api/playlist_songs/:id'
        var resp = await axios.get("https://replay-music-app.herokuapp.com/api/playlist_songs/"+params.id);
        console.log(resp.data.result, "hey")
        setSongs(resp.data.result)
    
        // setSongs(resp.data)
        // setSongs(resp); //assuming this will be resp.data
    }

    useEffect(() => {
        GetPlaylistInfo();
        GetAllSongs();
        // ViewProfile();
    },[])

    return (
        <div className="playlist-container">
            <PlaylistCover
                cover={info.image_url}
                name={info.name}
            />
            {/* <div className="profile-btn" onClick={ViewProfile}>
                <h6>View Profile</h6>
                <IoIosArrowForward size="12px" color="#F5F5F5" />
            </div> */}
            <ProBtn onClick={ViewProfile}
            //    onClick={() => history.push("ViewProfile/"+profile.userId)}
            />
            <h3>Songs</h3>
            <div className="songs">
                {songs.map((o) => {
                    return (
                        <SongCard
                            id={o.id}
                            albumCover={o.image_url}
                            song={o.title}
                            artist={o.artist}
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
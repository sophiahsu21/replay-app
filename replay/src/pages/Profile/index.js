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

    //displaying the profile
    const [user, setUser] = useState({});

    const [playlist, setPlaylist] = useState([]);

    const CheckToken = async () => {
        const resp = await axios.get("http://localhost:4200/api/profile");
        console.log(resp.data.result[0]);
        // setUser({
        //     ...resp.data.result[0]
        // })
        
        if(resp.data !== "no token sent to server" && resp.data !== "Invalid Token") {
            setUser({
                ...resp.data.result[0]
            })
        }
    }
    const GetPlaylists = async () => {
        var resp = await axios.get("http://localhost:4200/api/playlists");
        console.log(resp.data.playlists);

        if(resp.data !== "no token sent to server" && resp.data !== "Invalid Token") {
            setPlaylist([...resp.data.playlists]);
        }

    }

    useEffect(() => {
        CheckToken();
        GetPlaylists();
    },[]);

    return (
        <div className="profile-container">
            <div className="profile-image">
                <Avatar />
                <div className="user">{user.name}</div>
                    <div className="text">
                        <p>My Playlist</p>
                    </div>
                <div className="content">
                    {playlist.map((o) => {
                        return (
                            <PlaylistCard
                                plname={o.name}
                                plimg={o.images}

                            />
                        );
                    })}
                </div>
                    <div className="text">
                        <p>Liked Playlist</p>
                    </div>
                <div className="content">
                    {playlist.map((o) => {
                        return (
                            <PlaylistCard
                                plname={o.name}
                                plimg={o.images}

                            />
                        );
                    })}
                </div>
            </div>
            <NavBar/>
        </div>
    )
}

export default Profile;
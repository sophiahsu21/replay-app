import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'

import NavBar from "../../comps/NavBar";
import Avatar from "../../comps/Avatar";
import PlaylistCard from "../../comps/PlaylistCard";
import SongCard from "../../comps/SongCard";
import {
    useHistory
} from "react-router-dom";


const Profile = () => {

    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState("")
    const [file, setFile] = useState();
    const [open, setOpen] = useState(true);
    const [playlist, setPlaylist] = useState([]);

    const history = useHistory();

    const getUserData = async () => {
        const result = await axios.get(`/api/users`)

        const [picture] = result.data.pictures
        console.log(picture)

        const noPicture = Object.values(picture).every(x => (x !== null));
        console.log(noPicture)
        setUsername(picture.name)
        if (noPicture !== false) {
            setPosts(picture.image_url)
        } else {
            console.log("no picture here");
            alert("Click on your avatar to change your profile picture!");
        }
    }
    const submit = async event => {
        event.preventDefault()
        const data = new FormData()
        data.append('image', file)
        const result = await axios.post('/api/update_avatar', data)
        console.log(result)
        getUserData();
        setOpen(!open)
    }
    const Box = styled.div`
        /* padding-top:3rem; */
        display:${({ open }) => open ? 'none' : 'flex'};
    `;

    //displaying the profile


    const CheckToken = async () => {
        const resp = await axios.get("http://localhost:4200/api/profile");
        console.log(resp.data.result[0]);
        // setUser({
        //     ...resp.data.result[0]
        // })

        if (resp.data !== "no token sent to server" && resp.data !== "Invalid Token") {
            setUser({
                ...resp.data.result[0]
            })
        }
    }
    const GetPlaylists = async () => {
        var resp = await axios.get("http://localhost:4200/api/playlists");
        console.log(resp.data.playlists);

        if (resp.data !== "no token sent to server" && resp.data !== "Invalid Token") {
            setPlaylist([...resp.data.playlists]);
        }

    }
 
    const HandleCreatePlaylistName = () => {
        //create a playlist
    }
    const handleOpen = () => {
        setOpen(!open);
        console.log("hai")
    }
    useEffect(() => {
        CheckToken();
        GetPlaylists();
        getUserData();
    }, []);

    return (
        <div className="profile-container">          
                    <Avatar
                        profile={posts}
                        name={username}
                        onClick={handleOpen}
                    />
                <Box open={open}>
                    <form onSubmit={submit} >
                        <input
                            filename={file}
                            onChange={e => setFile(e.target.files[0])}
                            type="file"
                            accept="image/*"
                            placeholder="none"
                        ></input>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </Box>
                <h3>Liked Playlists</h3>           
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
                <h3>My Playlists</h3>           
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
            <NavBar />
        </div>
    )
}

export default Profile;
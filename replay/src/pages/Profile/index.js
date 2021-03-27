import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'

import NavBar from "../../comps/NavBar";
import Avatar from "../../comps/Avatar";
import PlaylistCard from "../../comps/PlaylistCard";

import {
    useHistory
} from "react-router-dom";


const Profile = () => {

    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState("")
    const [file, setFile] = useState();
    const [open, setOpen] = useState(true);
    const [playlist, setPlaylist] = useState([]);
    const [liked, setLiked] = useState([]);

    const history = useHistory();

    const getUserData = async () => {

        const result = await axios.get('https://replay-music-app.herokuapp.com/api/users')
        console.log(result);

        const [picture] = result.data.pictures
        console.log(picture)

        const noPicture = Object.values(picture).every(x => (x !== null));
        console.log(noPicture)
        // setUsername(picture.name)
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
        const result = await axios.post('https://replay-music-app.herokuapp.com/api/update_avatar', data)
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
        const resp = await axios.get("https://replay-music-app.herokuapp.com/api/profile");

        const [user] = resp.data.result;
        console.log(user);

        if (resp.data !== "no token sent to server" && resp.data !== "Invalid Token") {
            setUsername(user.name)
        }
    }

    const getMyPlaylists = async () => {
        var resp2 = await axios.get("https://replay-music-app.herokuapp.com/api/user_playlists");
    
        setPlaylist([...resp2.data.results]);
        console.log(resp2.data.results)
        // if (resp2.data !== "no token sent to server" && resp2.data !== "Invalid Token") {
        //     setPlaylist([...resp2.data.results]);
        //     console.log(resp2.data.results, "token success");
        // }

    }

    const GetLikedPlaylists = async () => {
        // show liked playlists
        var resp3 = await axios.get("https://replay-music-app.herokuapp.com/api/likes")

        setLiked([...resp3.data.result]);
        console.log(resp3, "hi")
    }

    const handleOpen = () => {
        setOpen(!open);
    }
    useEffect(() => {
        CheckToken();
        getMyPlaylists();
        GetLikedPlaylists();
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
                <div className="text"><h3>My Playlists</h3></div>          
                <div className="content">
                    {playlist.map((o) => {
                        return (
                            <PlaylistCard
                                viewPlaylist={() => history.push("/ViewPlaylist/"+o.id)}
                                plname={o.name}
                                plimg={o.image_url}
                            />
                        );
                    })}
                </div> 
                <h3>Liked Playlists</h3>           
                <div className="content">
                    {liked.map((o) => {
                        return (
                            <PlaylistCard
                                viewPlaylist={() => history.push("/ViewPlaylist/"+o.id)}
                                plname={o.name}
                                plimg={o.image_url}
                            />
                        );
                    })}
                </div>
            <NavBar />
        </div>
    )
}

export default Profile;
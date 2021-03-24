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

    const history = useHistory();
    const [playlist, setPlaylist] = useState("");
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState("")
    const [file, setFile] = useState();
    const [open, setOpen] = useState(true);

    useEffect(()=>{
        getUserData();
    }, [])
    
    const getUserData = async () =>{
        const result = await axios.get(`/api/users/2`)

        const [picture] = result.data.pictures
        console.log(picture)

        const noPicture = Object.values(picture).every(x => (x !== null));
        console.log(noPicture)
        setUsername(picture.name)
        if(noPicture !== false){
            setPosts(picture.image_url)
        }else{
            console.log("no picture here");
            alert("Click on your avatar to change your profile picture!");
        }
    }
    const submit = async event => {
        event.preventDefault()
        const data = new FormData()
        data.append('image', file)
        //window.location.reload(false);
        const result = await axios.post('/api/update_avatar', data)
        console.log(result)
        //setPosts([result.data, ...posts])
        getUserData();
        setOpen(!open)
        // setPosts(posts)
    }
    const Box = styled.div`
        padding-top:3rem;
        display:${({ open }) => open ? 'none' : 'flex'};
    `;



    const HandleCreatePlaylistName = () => {
        //create a playlist
    }
    const handleOpen = ()=>{
        setOpen(!open);
        console.log("hai")
    }

    return (
        <div className="profile-container">
            <div>
                <div >
            
                    <Avatar
                        profile={posts}
                        name={username}
                        onClick={handleOpen} 
                        />
                   
                </div>
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
                <div className="text"><h2>My playlists</h2></div>
                <PlaylistCard/>
                <PlaylistCard/>
            </div>

            <NavBar/>
         
        </div>
    )
}

export default Profile;
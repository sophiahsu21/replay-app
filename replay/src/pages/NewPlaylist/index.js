import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'

import Cover from '../../comps/Cover';

import {BsMusicNoteBeamed} from "react-icons/bs";

import {
    useHistory,
    useParams
} from "react-router-dom";

const NewPlaylist = () => {

    const history = useHistory();
    const params = useParams();

    const [add, setAdd] = useState([]);
    const [file, setFile] = useState();
    const [open, setOpen] = useState(true);
    const [playlist, setPlaylist] = useState("");
    const [user, setUser] = useState();

    const getPlaylistData = async () => {

        const playlists = await axios.get('/api/playlists')
        console.log(playlists);

        const cover = playlists.data.covers
        console.log(cover, "sup")

        setAdd(cover.image_url)

        // const noCover = Object.values(cover).every(x => (x !== null));
        // console.log(noCover)
        // // setUsername(picture.name)
        // if (noCover !== false) {
        //     setAdd(cover.image_url)
        // } else {
        //     console.log("no picture here");
        //     // alert("Click on your avatar to change your profile picture!");
        // }
    }

    const submit = async event => {
        event.preventDefault()
        const data = new FormData()
        data.append('image', file)
        const result = await axios.post('/api/add_playlist_picture/', data)
        console.log(result)
        getPlaylistData();
        setOpen(!open)
    }

    const Box = styled.div`
        /* padding-top:3rem; */
        display:${({ open }) => open ? 'none' : 'flex'};
    `;

    const CheckToken = async () => {
        const resp = await axios.get("http://localhost:4200/api/profile");

        const {data:{result:[{id}]}} = resp
        setUser(id)
       
        if (resp.data !== "no token sent to server" && resp.data !== "Invalid Token") {
           console.log("logged in baby")
        }
    }

    const HandleCreatePlaylistName = async () => {

        const resp = await axios.post("http://localhost:4200/api/playlists", {name:playlist});
        console.log(resp.data.result);

       const foo = resp.data.result
 
        history.push("/addSongs/"+ foo);
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    useEffect(() => {
        getPlaylistData();
        CheckToken();
    }, []);

    return (
        <div className="np-container">
            <div className="cpCont">
                <div className="playlistCoverCont">
                    <h3>Add Playlist Cover</h3>
                    {/* <div className="playlistCover" onClick={() => {
                        // upload photo
                    }}>
                        <BsMusicNoteBeamed color="#F5F5F5" size="48px" />
                    </div> */}
                    <Cover
                        image={add}
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
                </div>
                <h3>Add Playlist Name</h3>
                <input type='text' placeholder='Name your playlist' onChange={(e) => {
                    setPlaylist(e.target.value)
                }} />
                <div className="btnCont">
                    <button className="cancel" onClick={() => history.push("/Register")}>Cancel</button>
                    <button className="create" onClick={HandleCreatePlaylistName}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default NewPlaylist;
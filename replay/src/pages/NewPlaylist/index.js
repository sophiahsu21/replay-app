import React, { useState, useEffect } from "react";
import axios from "axios";

import {BsMusicNoteBeamed} from "react-icons/bs";

import {
    useHistory,
    useParams
} from "react-router-dom";

const NewPlaylist = () => {

    const history = useHistory();
    const params = useParams();

    const [playlist, setPlaylist] = useState("");
    const [user, setUser] = useState();


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

    useEffect(() => {
        CheckToken();
    }, []);

    return (
        <div className="np-container">
            <div className="cpCont">
                <div className="playlistCoverCont">
                    <h3>Add Playlist Cover</h3>
                    <div className="playlistCover" onClick={() => {
                        // upload photo
                    }}>
                        <BsMusicNoteBeamed color="#F5F5F5" size="48px" />
                    </div>
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
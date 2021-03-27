import React, { useState, useEffect } from "react";
import axios from "axios";

import {
    useHistory
} from "react-router-dom";

const NewPlaylist = () => {

    const history = useHistory();
    
    const [playlist, setPlaylist] = useState("");
    const [user, setUser] = useState();
    const [cover, setCover] = useState("");
    
    const CheckToken = async () => {
        const resp = await axios.get("https://replay-music-app.herokuapp.com/api/profile");

        const {data:{result:[{id}]}} = resp
        setUser(id)
       
        if (resp.data !== "no token sent to server" && resp.data !== "Invalid Token") {
           console.log("logged in baby")
        }
    }

    const HandleCreatePlaylistName = async () => {

        const resp = await axios.post("https://replay-music-app.herokuapp.com/api/playlists", { name:playlist, image_url:cover });
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
                <h3>Add Playlist Cover</h3>
                    <input placeholder='Insert a URL' type='type' value={cover} onChange={(e) => {
                        setCover(e.target.value)
                    }} />
                <br />
                <h3>Add Playlist Name</h3>
                <input type='text' placeholder='Name your playlist' onChange={(e) => {
                    setPlaylist(e.target.value)
                }} />
                <br />
                <div className="btnCont">
                    <button className="cancel" onClick={() => history.push("/Home")}>Cancel</button>
                    <button className="create" onClick={HandleCreatePlaylistName}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default NewPlaylist;
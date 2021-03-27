import React, { useState, useEffect } from 'react';

import axios from 'axios';

import {MdMail} from "react-icons/md";
import {MdLock} from "react-icons/md";

import {
    useParams,
    useHistory
} from "react-router-dom";

const LogIn = () => {
    const params = useParams();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [error, setError] = useState(null);

    const HandleLogin = async () => {
        const resp = await axios.post("https://replay-music-app.herokuapp.com/api/users/login", { email:email, password:pass });
        console.log(resp);

        if(resp.data.token) {
            const token = resp.data.token;
            axios.defaults.headers.common['Authorization'] = token;
            sessionStorage.setItem("token", token);

            console.log("identifier/token", resp.data);
            // history.push("/Home");
            history.push("/Profile");
        } else {
            //update a state to show an error
            setError("Email or password is incorrect.");
        }
    }

    return <div className="li-container">
        <div className="logCont">
            <img src="replay_logo.png" className="logoimg" width="62px" alt="logo" />
            <h1>Welcome Back</h1>
            <div className="input-icon">
                <MdMail style={{marginLeft: "1rem", position: "absolute", top: "28%"}} color="#F5F5F5" size="1.35rem" />
                <input className="input-form" type='text' placeholder='Email' onChange={(e) =>
                setEmail(e.target.value)
            } />
            </div>
            <div className="input-icon">
                <MdLock style={{marginLeft: "1rem", position: "absolute", top: "28%"}} color="#F5F5F5" size="1.35rem" />
                <input className="input-form" type='password' placeholder='Password' onChange={(e) =>
                    setPass(e.target.value)
                } />
            </div>
            <div className="error">{error}</div>
            <button onClick={HandleLogin}>Log In</button>
            <div className="msg" onClick={() =>
                history.push("/Register")
            }>
                <h5>Don't have an account?</h5>
                <h5 className="bold">SIGN UP</h5>
            </div>
        </div>
    </div>
}

export default LogIn;
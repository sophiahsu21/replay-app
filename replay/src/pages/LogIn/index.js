import React, { useState, useEffect } from 'react';

import axios from 'axios';

import {MdMail} from "react-icons/md";
import {MdLock} from "react-icons/md";

import {
    useHistory
} from "react-router-dom";

const LogIn = () => {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [error, setError] = useState(null);

    const HandleLogin = async () => {
        const resp = await axios.post("(url)", { email:email, password:pass });
        console.log(resp);

        if(resp.data !== "Something went wrong registering user") {
            const token = resp.data;
            sessionStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            history.push("/profile");
        } else {
            //update a state to show an error
            setError("Email or password is incorrect.");
        }
    }

    return <div className="container">
        <div className="logCont">
            <img src="replay_logo.png" className="logoimg" width="62px" alt="logo" />
            <h1>Welcome Back</h1>
            <input type='text' placeholder='Email' onChange={(e) =>
                setEmail(e.target.value)
            } />
            <input type='password' placeholder='Password' onChange={(e) =>
                setPass(e.target.value)
            } />
            <div className="error">{error}</div>
            <button onClick={HandleLogin}>Log In</button>
            <div className="msg" onClick={() => history.push("/Register")}>
                <h5>Don't have an account?</h5>
                <h5 className="bold">SIGN UP</h5>
            </div>
        </div>
    </div>
}

export default LogIn;
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import {MdPerson} from "react-icons/md";
import {MdMail} from "react-icons/md";
import {MdLock} from "react-icons/md";

import {
    useHistory
} from "react-router-dom";

const Register = () => {
    const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const HandleRegister = async () => {
        const resp = await axios.post("https://replay-music-app.herokuapp.com/api/users", { name:name, email:email, password:pass });
        console.log(resp);

        if(resp.data !== "Something went wrong registering user") {
            history.push("/LogIn");
        }
    }

    return <div className="r-container">
        <div className="regCont">
            <img src="replay_logo.png" className="logoimg" width="62px" alt="logo" />
            <h1>Create an Account</h1>
            <div className="input-icon">
                <MdPerson style={{marginLeft: "1rem", position: "absolute", top: "28%"}} color="#F5F5F5" size="1.35rem" />
                <input className="input-form" type='text' placeholder='Name' onChange={(e) =>
                    setName(e.target.value)
                } />
            </div>
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
            <button onClick={HandleRegister}>Create New Account</button>
            <div className="msg" onClick={() =>
                history.push("/LogIn")
            }>
                <h5>Already have an account?</h5>
                <h5 className="bold">LOG IN</h5>
            </div>
        </div>
    </div>
}

export default Register;
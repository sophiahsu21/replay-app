import React, { useState, useEffect } from "react";
import axios from "axios";

import LogIn from 'comps/LogIn';
// import SignUp from 'comps/SignUp';

import * as network from '../../network';


const SignIn = ({}) => {

    const login = async ({email, password}) => {
        const data = await network.login({email, password})
        console.log(data)
    }

    // const signup = async ({name, email, password}) => {
    //     const data = await network.signup({name, email, password})
    //     console.log(data)
    // }

    return (
        <div className="container">
            {/* <div className="left"> */}
                <LogIn onLogInComplete={login} />
            {/* </div> */}
            {/* <div className="right">
                <SignUp onSignUpComplete={signup} />
            </div> */}
        </div>
    )
}

export default SignIn;
import React, { useState, useEffect } from "react";
import axios from "axios";

import SignUp from 'comps/SignUp';

import * as network from '../../network';


const CreateAccount = ({}) => {

    const signup = async ({name, email, password}) => {
        const data = await network.signup({name, email, password})
        console.log(data)
    }

    return (
        <div className="container">
            <SignUp onSignUpComplete={signup} />
        </div>
    )
}

export default CreateAccount;
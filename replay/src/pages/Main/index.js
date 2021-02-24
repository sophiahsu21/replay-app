import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import SongCard from 'comps/SongCard';

const Main = ({}) => {
    return (
        <div className="testRow">
            <SongCard />
            <SongCard />
            <SongCard />
        </div>
    )
}

export default Main;
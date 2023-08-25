import React from "react";
import { Link } from "react-router-dom";
import monster from './monster.jpg'

function Monster(){
    return(
        <div>
            <h1><Link to='/'>Go back</Link></h1>
            <img src={monster} alt='can of monster energy'/>
            <p>A refreshing cold Monster</p>
        </div>
    );
}

export default Monster;
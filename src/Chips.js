import React from "react";
import { Link } from "react-router-dom";
import chips from './chips.jpg'

function Chips(){
    return(
        <div>
            <h1><Link to='/'>Go back</Link></h1>
            <img src={chips} alt="bag of doritos"/>
            <p>A delicious bag of Doritos</p>
        </div>
    );
}

export default Chips;
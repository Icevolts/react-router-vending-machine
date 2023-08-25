import React from "react";
import { Link } from "react-router-dom";
import butterfinger from './butterfinger.png'

function Butterfinger(){
    return(
        <div>
            <h1><Link to='/'>Go back</Link></h1>
            <img src={butterfinger} alt='a butterfinger candy bar'/>
            <p>Crispety Crunchity Peanut-Buttery</p>
        </div>
    );
}

export default Butterfinger;
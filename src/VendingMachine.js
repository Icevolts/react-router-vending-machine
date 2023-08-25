import React from "react";
import { Link } from 'react-router-dom'

function VendingMachine() {
    return (
        <div>
            <h1><Link to='/chips'>Chips</Link></h1>
            <h1><Link to='/monster'>Monster</Link></h1>
            <h1><Link to='/butterfinger'>Butterfinger</Link></h1>
            <p>Please choose something to eat/drink</p>
        </div>
    );
}

export default VendingMachine;
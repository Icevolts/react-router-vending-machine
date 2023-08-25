import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Monster from './Monster';
import Butterfinger from './Butterfinger';

function App() {
  return (
    <BrowserRouter> 
      <Route exact path='/'> <VendingMachine/> </Route>
      <Route exact path='/chips'> <Chips/> </Route>
      <Route exact path='/monster'> <Monster/> </Route>
      <Route exact path='/butterfinger'> <Butterfinger/> </Route>
    </BrowserRouter>
  );
}

export default App;

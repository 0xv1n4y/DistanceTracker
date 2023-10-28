import React from 'react';
import Navbars from './Navbars';
import { Route, Routes } from 'react-router-dom';
import DistanceCalculator from './components/DistanceCalculator';
import ShipperData from './components/ShipperData';

function App () {
  return (
   <div>
    <Navbars/>
    <Routes>
      <Route path='/' element={<DistanceCalculator/>}/>
      <Route path='/shipper' element={<ShipperData/>}/>
    </Routes>

   </div>
  );
}

export default App;

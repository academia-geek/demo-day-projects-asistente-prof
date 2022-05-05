import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Crud } from '../components/Crud';
import { Favorites } from '../components/Favorite';
import Home from '../components/Home';
import NavBars from '../components/NavBars';
import Perfil from '../components/Perfil/Perfil';

import { Unis } from '../components/Unis';

const DashboardRoute = ({ userV }) => {
  const [numero, setnumero] = useState(0);
  return (
    <>
      <NavBars userV={userV} numero={numero} />
      <Routes>
        <Route
          path='/'
          element={<Home userV={userV} setnumero={setnumero} />}
        />
        <Route path='/crud' element={<Crud />} />
        <Route path='/unis' element={<Unis />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/favorites' element={<Favorites />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default DashboardRoute;

import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Crud } from '../components/Crud';
import { Favorites } from '../components/Favorite';
import Home from '../components/Home';
import NavBars from '../components/NavBars';

import { Unis } from '../components/Unis';

const DashboardRoute = ({ userV, setconterLogin }) => {
  const [numero, setnumero] = useState(0)
  useEffect(() => {
    setconterLogin(numero)
  }, [numero])
  
  return (
    <>
      <NavBars userV={userV} numero={numero} />
      <Routes>
        <Route path='/' element={<Home userV={userV} setnumero={setnumero}/>} />
        <Route path='/crud' element={<Crud />} />
        <Route path='/unis' element={<Unis />} />
        <Route path='/favorites' element={<Favorites />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default DashboardRoute;

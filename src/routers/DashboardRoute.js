import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Favorites } from '../components/Favorite';
import Home from '../components/Home';
import NavBars from '../components/NavBars';
import Perfil from '../components/Perfil/Perfil';

import { Unis } from '../components/Unis';

const DashboardRoute = ({ userV, setconterLogin }) => {
  const [numero, setnumero] = useState(0);
  const [btnPerfil, setBtnPerfil] = useState(false);
  useEffect(() => {
    setconterLogin(numero);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numero]);

  return (
    <>
      <NavBars userV={userV} numero={numero} btnPerfil={btnPerfil} />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              userV={userV}
              setnumero={setnumero}
              setBtnPerfil={setBtnPerfil}
            />
          }
        />
        <Route path='/unis' element={<Unis />} />
        <Route path='/perfil' element={<Perfil userV={userV} />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default DashboardRoute;

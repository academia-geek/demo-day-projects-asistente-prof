import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Crud } from '../components/Crud';
import Home from '../components/Home';
import NavBars from '../components/NavBars';

import { Unis } from '../components/Unis';

const DashboardRoute = () => {
  return (
    <>
      <NavBars />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/crud' element={<Crud />} />
        <Route path='/unis' element={<Unis />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default DashboardRoute;

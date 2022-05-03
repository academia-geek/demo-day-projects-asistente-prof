import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CRUDUniversity from '../components/admin/CRUDUniversity';
import LoginAdmin from '../components/admin/LoginAdmin';
import PrincipalLanding from '../components/landing/PrincipalLanding';
import { Login } from '../components/Logins/Login';
import Register from '../components/Register';
import AdminRouters from './AdminRouters';

import DashboardRoute from './DashboardRoute';
import PrivateRoters from './PrivateRoters';
import PublicRouters from './PublicRouters';

const AppRouters = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLog, setIsAdminLog] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking]);

  if (checking) {
    return <h1>Espere....</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRouters isAut={isLoggedIn}>
              <Login />
            </PublicRouters>
          }
        />
        <Route
          path='/admin'
          element={
            <PublicRouters isAut={isLoggedIn}>
              <LoginAdmin setIsAdminLog={setIsAdminLog} />
            </PublicRouters>
          }
        />

        <Route
          path='/register'
          element={
            <PublicRouters isAut={isLoggedIn}>
              <Register />
            </PublicRouters>
          }
        />
        <Route
          path='/landing'
          element={
            <PublicRouters isAut={isLoggedIn}>
              <PrincipalLanding />
            </PublicRouters>
          }
        />
        <Route
          path='/university'
          element={
            <AdminRouters isAdminLog={isAdminLog}>
              <CRUDUniversity />
            </AdminRouters>
          }
        />

        <Route
          path='/*'
          element={
            <PrivateRoters isAut={isLoggedIn}>
              <DashboardRoute />
            </PrivateRoters>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;

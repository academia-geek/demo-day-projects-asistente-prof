import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Quiz } from './Quiz';
import { LFooter } from './landing/LFooter';

const Home = ({ userV, setnumero } ) => {
  return (
    <div>
      <Quiz userV={userV} setnumero={setnumero}></Quiz>
      <LFooter />
    </div>
  );
};

export default Home;

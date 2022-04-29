import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {  BecasShow } from './BecasShow';
import { Quiz } from './Quiz';
import { LFooter } from './landing/LFooter';


const Home = () => {
    return (
        <div>
            <Quiz></Quiz>
            {/* <BecasShow/> */}
            <LFooter/>
        </div>
    );
};

export default Home;
import React from 'react';
import Header from '../../features/header/Header';
import Alcohol from '../alcohol/Alcohol';
import './home.css';
import Snacks from '../snacks/Snacks';
import Hookah from '../../features/hookah/Hookah';

function Home() {
    return (
        <div className="home">
  
        <Header/>
        <Alcohol/>
        <Snacks/>
        <Hookah/>
            
        </div>
    )
}

export default Home

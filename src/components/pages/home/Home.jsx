import React from 'react';
import Header from '../../features/header/Header';
import ImageSlider from '../../features/imageSlider/ImageSlider';
import Alcohol from '../alcohol/Alcohol';
import './home.css';
import {sliderData} from '../../data/sliderData';

function Home() {
    return (
        <div className="home">
  
        <Header/>
        <Alcohol/>
            
        </div>
    )
}

export default Home

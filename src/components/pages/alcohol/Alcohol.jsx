import React from 'react';
import Beers from '../../features/beers/Beers';
import Vodka from '../../features/vodka/Vodka';
import Wiskey from '../../features/wisky/Wiskey';
import Snacks from '../snacks/Snacks';
import './alcohol.css';

function Alcohol() {
    return (
        <>
        <Beers/>
        <Vodka/>
        <Wiskey/>
        <Snacks/>
            
        </>
    )
}

export default Alcohol

import React from 'react';
import './snacks.css';
import balls from '../../../images/balls.png';
import fries from '../../../images/fries.png';
import onion from '../../../images/onion.png';


function Snacks() {
    return (
        <>
        <div className="snacks-title-container">
        <h2>נשנושים</h2>


        </div>
        <div className="snack-container">
            <div className="item-container">
                <h4 className="snack-name">צ'יפס</h4>
                <img src={fries} className="snack-img1"/>
                <span className="snack-price">ש״ח 20</span>
            </div>
            <div className="item-container">
                <h4 className="snack-name">טבעות בצל</h4>
                <img src={onion} className="snack-img2"/>
                <span className="snack-price">ש״ח 20</span>
            </div>
            <div className="item-container">
                <h4 className="snack-name">כדורי פירה</h4>
                <img src={balls} className="snack-img3"/>
                <span className="snack-price">ש״ח 20</span>
            </div>
          
            <div className="space"></div>

            
        </div>
        </>
    )
}

export default Snacks

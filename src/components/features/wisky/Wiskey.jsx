import React from 'react';
import './wiskey.css';
import beer1 from '../../../images/black.png';
import beer2 from '../../../images/bush.png';
import beer3 from '../../../images/jeck.png';
import beer4 from '../../../images/red.png';


function Wiskey() {
    return (
        <>
          <div className="wisky-title-container">
        <h2>וויסקי</h2>


        </div>
        <div className="wisky-container">
            <div className="item-container">
                <h4 className="item-name">בלאק לייבל</h4>
                <img src={beer1} className="wisky-img1"/>
            </div>
            <div className="item-container">
                <h4 className="item-name">בושמילס</h4>
                <img src={beer2} className="wisky-img2"/>
            </div>
            <div className="item-container">
                <h4 className="item-name">ג'ק דניאלס</h4>
                <img src={beer3} className="wisky-img3"/>
            </div>
            <div className="item-container">
                <h4 className="item-name">רד לייבל</h4>
                <img src={beer4} className="wisky-img4"/>
            </div>
            <div className="space"></div>

            
        </div>
        </>
    )
}

export default Wiskey

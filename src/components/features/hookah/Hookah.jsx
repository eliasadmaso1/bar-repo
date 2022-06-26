import React from 'react';
import './hookah.css';
import hookah from '../../../images/hookah.png';
import hookah2 from '../../../images/hookah2.png';
import hookah3 from '../../../images/hookah3.png';



function Hookah() {
    return (
        <>
        <div className="hookahs-title-container">
        <h2>נרגילות במגוון טעמים</h2>
      </div>
      <div className="hookahs-container">
        <div className="item-container">
          <img src={hookah} className="hookah-img1" />
        </div>
        <div className="item-container">
          <img src={hookah2} className="hookah-img2" />
        </div>
        <div className="item-container">
          <img src={hookah3} className="hookah-img3" />
        </div>
      </div>
    </>
            
    
    )
}

export default Hookah

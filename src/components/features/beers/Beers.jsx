import React from "react";
import beer1 from "../../../images/carl.png";
import beer2 from "../../../images/coro.png";
import beer3 from "../../../images/hein.png";
import beer4 from "../../../images/wein.png";
import "./beers.css";

function Beers() {
  return (
    <>
      <div className="beers-title-container">
        <h2>בירות</h2>
      </div>
      <div className="beers-container">
        <div className="item-container">
          <h4 className="item-name">קרלסברג</h4>
          <img src={beer1} className="item-img1" />
        </div>
        <div className="item-container">
          <h4 className="item-name">קורונה</h4>
          <img src={beer2} className="item-img2" />
        </div>
        <div className="item-container">
          <h4 className="item-name">הייניקן</h4>
          <img src={beer3} className="item-img3" />
        </div>
        <div className="item-container">
          <h4 className="item-name">ווינשטפאן</h4>
          <img src={beer4} className="item-img4" />
        </div>
        <div className="space"></div>
      </div>
    </>
  );
}

export default Beers;

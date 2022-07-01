import React from "react";
import beer1 from "../../../images/fin.png";
import beer2 from "../../../images/van.png";
import beer3 from "../../../images/ruski.png";
import beer4 from "../../../images/smirnof.png";
import "./vodka.css";

function Vodka() {
  return (
    <>
      <div className="vodka-title-container">
        <h2 style={{marginTop:"30px"}}>וודקה</h2>
      </div>
      <div className="vodka-container">
        <div className="item-container">
          <h4 className="vodka-name">פינלנדיה</h4>
          <img src={beer1} className="vodka-img1" />
        </div>
        <div className="item-container">
          <h4 className="vodka-name">ואן גוך כל הסוגים</h4>
          <img src={beer2} className="vodka-img2" />
        </div>
        <div className="item-container">
          <h4 className="vodka-name">רוסקי סטנדרט</h4>
          <img src={beer3} className="vodka-img3" />
        </div>
        <div className="item-container">
          <h4 className="vodka-name">סמירנוף</h4>
          <img src={beer4} className="vodka-img4" />
        </div>
        <div className="space"></div>
      </div>
    </>
  );
}

export default Vodka;

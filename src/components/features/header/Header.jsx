import React from "react";
import { sliderData } from "../../data/sliderData";
import "./header.css";
import ImageSlider from '../imageSlider/ImageSlider';

function Header() {
 
  return (
    <>
    <div className="div1">
      <div className="header-slider">
      <ImageSlider slides={sliderData} home={true}/>

      </div>
      <div className="header-text">
      <h3>בואו לשבת בבר הכי טוב בראשל״צ</h3>
    <h2>... מה  תמצאו  אצלינו</h2>
    <div className="div2">
        <span className="item">אווירה</span>
        <span className="item">מוזיקה</span>
        <span className="item">נשנושים</span>
        <span className="item">אלכוהול </span>
    </div>
    <div className="div2-special">
    <div className="special">בירה אתיופית מהחבית</div>

    </div>
    <h3>הרצל 34, ראשון לציון</h3>
      </div>
   



    </div>
    </>
  );
}

export default Header;

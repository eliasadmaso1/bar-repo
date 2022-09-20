import React from "react";
import { sliderData } from "../../data/sliderData";
import "./header.css";
import ImageSlider from '../imageSlider/ImageSlider';
import headerImg from '../../../images/bar8.jpeg'

function Header() {
 
  return (
    <>
    <div className="div1">
      <div className="header-slider">
        <h1 className="header-title">אדיס בר</h1>
      <img src={headerImg} className="header-img"/>
      <ImageSlider slides={sliderData}/>
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

    <h3>הרצל 34, ראשון לציון</h3>
      </div>
   



    </div>
    </>
  );
}

export default Header;

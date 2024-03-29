import React from "react";
import {
  beers,
  bottles,
  shots,
  snacks,
  vodkaCaps,
  wines,
  wiskyCaps,
} from "../../data/menuData";
import "./menu2.css";
import img1 from '../../../images/menu1.png';
import img2 from '../../../images/menu2.png';
import img3 from '../../../images/menu3.png';
import img4 from '../../../images/menu4.png';

function Menu2() {
  return (
    <div className="menu2-body">
      <div className="menu2">
        <div className="menu-header">
          <div className="menu-header-item">בירה אתיופית מהחבית</div>
          <div className="menu-header-title">תפריט</div>
          <div className="menu-header-item">צ׳ייסרים ב-9</div>
        </div>

        <div className="menu-section">
          <div className="menu-section-item">
            <span className="menu-section-item-title">בירות</span>
            {beers.map((beer) => {
              return (
                <span className="menu-sectio-item-text">
                  {beer.title}..........{beer.price}
                </span>
              );
            })}
            <img src={img1} className="menu-img1"/>
          </div>
          <div className="menu-section-item">
            <span className="menu-section-item-title">כוסות וויסקי</span>
            {wiskyCaps.map((cap) => {
              return (
                <span className="menu-sectio-item-text">
                  {cap.title}..........{cap.price}
                </span>
              );
            })}
            <img src={img2} className="menu-img2"/>
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-section-item">
            <span className="menu-section-item-title">כוסות וודקה</span>
            {vodkaCaps.map((cap) => {
              return (
                <span className="menu-sectio-item-text">
                  {cap.title}..........{cap.price}
                </span>
              );
            })}
          <img src={img3} className="menu-img3"/>
          </div>
          <div className="menu-section-item">
            <span className="menu-section-item-title">בקבוקים</span>
            {bottles.map((item) => {
              return (
                <span className="menu-sectio-item-text">
                  {" "}
                  {item.title}..........{item.price}
                </span>
              );
            })}
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-section-item">
            <span className="menu-section-item-title">יינות וערק</span>
            {wines.map((item) => {
              return (
                <span className="menu-sectio-item-text">
                  {" "}
                  {item.title}..........{item.price}
                </span>
              );
            })}
          <img src={img4} className="menu-img4"/>
          </div>

          <div className="menu-section-specials">
            <span className="menu-sectio-item-text">
              פלטת מטוגנים ב - 80 ש״ח
            </span>
            <span className="menu-sectio-item-text">צ׳ייסרים ב-9 ש״ח בקניית כוס</span>
            <span className="menu-sectio-item-text">בירה אתיופית מהחבית</span>
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-section-item">
            <span className="menu-section-item-title">צ׳ייסרים</span>
            {shots.map((cap) => {
              return (
                <span className="menu-sectio-item-text">
                  {cap.title}..........{cap.price}
                </span>
              );
            })}
          </div>
          <div className="menu-section-item">
            <span className="menu-section-item-title">נשנושים</span>
            {snacks.map((item) => {
              return (
                <span className="menu-sectio-item-text">
                  {" "}
                  {item.title}..........{item.price}
                </span>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Menu2;

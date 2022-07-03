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
import "./menu.css";

function Menu() {
  return (
    <>
      <div className="menu-header">
        <h1>תפריט</h1>
      </div>

      <div className="menu">
        <div className="menu-item-wrap">
          <div className="menu-item">
            <h3 className="menu-item-title">בירות</h3>
            {beers.map((beer) => {
              return (
                <span className="price">
                  {beer.title}
                 ______________________
                  {beer.price}
                </span>
              );
            })}
          </div>
        </div>

        <div className="menu-item-wrap">
          <div className="menu-item">
            <h3 className="menu-item-title">כוסות וודקה</h3>
            {vodkaCaps.map((vodka) => {
              return (
                <span className="price">
                  {vodka.title}
                 ______________________ {vodka.price}
                </span>
              );
            })}
          </div>
        </div>

        <div className="menu-item-wrap">
          <div className="menu-item">
            <h3 className="menu-item-title">כוסות וויסקי</h3>
            {wiskyCaps.map((wisky) => {
              return (
                <span className="price">
                  {wisky.title}
                 ______________________ {wisky.price}
                </span>
              );
            })}
          </div>
        </div>

        <div className="menu-item-wrap">
          <div className="menu-item">
            <h3 className="menu-item-title">בקבוקים </h3>
            {bottles.map((wisky) => {
              return (
                <span className="price">
                  {wisky.title}
                 ______________________
                  {wisky.price}
                </span>
              );
            })}
          </div>
        </div>

        <div className="menu-item-wrap">
          <div className="menu-item">
            <h3 className="menu-item-title">צ׳ייסרים</h3>
            {shots.map((wisky) => {
              return (
                <span className="price">
                  {wisky.title}
                 ______________________ {wisky.price}
                </span>
              );
            })}
          </div>
        </div>

        <div className="menu-item-wrap">
          <div className="menu-item">
            <h3 className="menu-item-title">יינות וערק</h3>
            {wines.map((wisky) => {
              return (
                <span className="price">
                  {wisky.title}
                 ______________________ {wisky.price}
                </span>
              );
            })}
          </div>
        </div>

        <div className="menu-item-wrap">
          <div className="menu-item">
            <h3 className="menu-item-title">נשנושים</h3>
            {snacks.map((wisky) => {
              return (
                <span className="price">
                  {wisky.title}
                 ______________________ {wisky.price}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;

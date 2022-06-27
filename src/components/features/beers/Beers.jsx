import React from "react";
import beer1 from "../../../images/carl.png";
import beer2 from "../../../images/corona.png";
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
          <span className="item-price">ש״ח 20</span>
        </div>
        <div className="item-container">
          <h4 className="item-name">קורונה</h4>
          <img src="https://www.the-importer.co.il/GoopSitesFiles/83267/User/catalog_456089-l.jpg?637289457847170000" className="item-img2" />
          <span className="item-price">ש״ח 20</span>
        </div>
        <div className="item-container">
          <h4 className="item-name">הייניקן</h4>
          <img src={beer3} className="item-img3" />
          <span className="item-price">ש״ח 20</span>
        </div>
        <div className="item-container">
          <h4 className="item-name">גולדסטאר</h4>
          <img src="https://aviram.blob.core.windows.net/product-images/7290008464109.png" className="item-img4" />
          <span className="item-price">ש״ח 20</span>
        </div>
        <div className="space"></div>
      </div>
    </>
  );
}

export default Beers;

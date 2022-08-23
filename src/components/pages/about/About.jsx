import React from "react";
import "./about.css";
import shot from "../../../images/shot.png";
import carl from "../../../images/carl.png";
import black from "../../../images/black.png";
import van from "../../../images/van.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ImageSlider from "../../features/imageSlider/ImageSlider";
import { sliderData } from "../../data/sliderData";
import logo1 from "../../../images/logo1.png";
import logo2 from "../../../images/logo2.png";
import logo3 from "../../../images/logo3.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>אדיס בר</h1>
        <h3>נקודת הבילוי שלכם</h3>
        <h4>הרצל 34, ראשון לציון</h4>
        {/* <ImageSlider slides={sliderData} /> */}
      </div>
      <div className="about-section">
        <h1 style={{marginTop:"20px"}}>אלכוהול במחירים שפויים</h1>
        <div className="section-card">
          <div className="card">
            <h3 className="card-title">צ׳ייסרים ב-9 ש״ח</h3>
            <img className="card-img1" src={shot} />
          </div>
          <div className="card">
            <h3 className="card-title">בירות מהבקבוק</h3>
            <img className="card-img2" src={carl} />
          </div>
          <div className="card">
            <h3 className="card-title">וויסקי במחירים זולים</h3>
            <img className="card-img3" src={black} />
          </div>
          <div className="card">
            <h3 className="card-title">וודקה איכותית</h3>
            <img className="card-img4" src={van} />
          </div>
        </div>
      </div>
      <div className="about-section2">
        <h1 style={{marginTop:"20px",marginBlock:"20px",color:"#DFD4B8"}}>סגירת ארועים</h1>
        <h2>
          <a href="tel:0552753626" className="phone-icon">
            <LocalPhoneIcon className="h2-icon" />
          </a>{" "}
          בהתאמה מראש
        </h2>
        <div className="logos">
          <img src={logo1} className="logos-logo"/>
          <img src={logo2} className="logos-logo1"/>
          <img src={logo3} className="logos-logo"/>
        </div>
      </div>
      <div className="about-section">
        <h2 style={{marginTop:"20px",padding:"30px"}}>
          אדיס בר מארח מגוון רחב של לקוחות במטרה לחבר בין אנשים שבאים מעולמות
          שונים
        </h2>
        <h2 style={{marginTop:"20px",padding:"30px"}}>הבר כולל מקומות ישיבה גם בחוץ</h2>
        <h2 style={{marginTop:"20px",padding:"30px"}}>אווירת סטודנטים בצהריים</h2>
        <h2 style={{marginTop:"20px",padding:"30px"}}>קבלת שירות על ידי מלצר</h2>
        <a href="mailto:adisbar34@gmail.com"><sapn className="mail">למייל שלנו</sapn></a>

      
      </div>
    </div>
  );
}

export default About;

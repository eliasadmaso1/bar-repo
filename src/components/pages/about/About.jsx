import React from 'react';
import './about.css';
import shot from '../../../images/shot.png';
import carl from '../../../images/carl.png';
import black from '../../../images/black.png';
import van from '../../../images/van.png';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";




function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>בארסה בר</h1>
                <h3>נקודת הבילוי שלכם</h3>
                <h4>הרצל 34, ראשון לציון</h4>
            </div>
            <div className="about-section">
                <h1>אלכוהול איכותי במחירים שפויים</h1>
                <div className="section-card">
                    <div className="card">
                        <h3 className="card-title">צ׳ייסרים ב-9 ש״ח</h3>
                        <img className="card-img1" src={shot}/>
                    </div>
                    <div className="card">
                    <h3 className="card-title">בירות מהבקבוק</h3>
                        <img className="card-img2" src={carl}/>
                    </div>
                    <div className="card">
                    <h3 className="card-title">וויסקי במחירים זולים</h3>
                        <img className="card-img3" src={black}/>
                    </div>
                    <div className="card">
                    <h3 className="card-title">וודקה איכותית</h3>
                        <img className="card-img4" src={van}/>
                    </div>

                </div>

            </div>
            <div className="about-section2">
                <h1>סגירת ארועים</h1>
                <h2><a href="" className="phone-icon"><LocalPhoneIcon className="h2-icon"/></a> בהתאמה מראש</h2>

            </div>
            
        </div>
    )
}

export default About
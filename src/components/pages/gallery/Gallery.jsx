import React from 'react';
import './gallery.css';
import img1 from '../../../images/bar1.jpeg';
import img2 from '../../../images/bar2.jpeg';
import img3 from '../../../images/bar3.jpeg';
import img4 from '../../../images/bar4.jpeg';
import img5 from '../../../images/bar5.jpeg';
import img6 from '../../../images/bar6.jpeg';
import img7 from '../../../images/bar7.jpeg';
import img8 from '../../../images/bar8.jpeg';
import img9 from '../../../images/bar9.jpeg';


function Gallery() {
    return (
        <div className="gallery">
        <h1 className="gallery-title">...הגלריה שלנו</h1>
        <div className="images-container">
            <img src={img1} className="image"/>
            <img src={img2} className="image"/>
            <img src={img3} className="image"/>
        </div>
        <div className="images-container">
        <img src={img4} className="image"/>
        <img src={img5} className="image"/>
        <img src={img6} className="image"/>

    </div>
    <div className="images-container">
    <img src={img7} className="image"/>
        <img src={img8} className="image"/>
        <img src={img9} className="image"/>

    </div>
        </div>
    )
}

export default Gallery

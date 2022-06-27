import React from 'react';
import { sliderData } from '../../data/sliderData';
import ImageSlider from '../../features/imageSlider/ImageSlider';
import './gallery.css';

function Gallery() {
    return (
        <>
        <h1 className="gallery-title">...הגלריה שלנו</h1>
        <ImageSlider slides={sliderData}/>
        {/* <div className="gallery-container">
            <div className="img-container">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/98/29/4d/the-harp-bar.jpg" className="gallery-img"/>

            </div>
            <div className="img-container">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/98/29/4d/the-harp-bar.jpg" className="gallery-img"/>

            </div>  
            <div className="img-container">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/98/29/4d/the-harp-bar.jpg" className="gallery-img"/>

            </div>
            <div className="img-container">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/98/29/4d/the-harp-bar.jpg" className="gallery-img"/>

            </div>
            <div className="img-container">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/98/29/4d/the-harp-bar.jpg" className="gallery-img"/>

            </div>
            <div className="img-container">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/98/29/4d/the-harp-bar.jpg" className="gallery-img"/>

            </div>


            
        </div> */}
        </>
    )
}

export default Gallery

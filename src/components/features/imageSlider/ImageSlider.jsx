import React, { useState } from 'react';
import './imageSlider.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ImageSlider({slides,home}) {
    const [current,setCurrent] = useState(0);

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    const nextSlide = ()=>{
        setCurrent(current === 3 ? 0 : current + 1);

    }

    const prevSlide = ()=>{
        setCurrent(current === 0 ? 3 : current - 1);

    }

    if(home){
        setTimeout(() => {
            nextSlide()
            
        }, 3000);
    }


    return (
        <div className={home ? "home-slider" : "gallery-slider"}>
            {home ? null : <ArrowBackIosIcon className="left-arrow" onClick={prevSlide}/>}
            {home ? null : <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide}/>}
            {slides.map((slide,index)=>{
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                       {index === current && <img src={slide.img} className={home ? "home-img" : "gallery-img"} />} 
                    </div>
                )

            })}
            
        </div>
    )
}

export default ImageSlider

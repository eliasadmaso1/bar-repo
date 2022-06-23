import React, { useState } from 'react';
import './imageSlider.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ImageSlider({slides}) {
    const [current,setCurrent] = useState(0);

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    const nextSlide = ()=>{
        setCurrent(current === length - 1 ? 0 : current + 1);

    }

    const prevSlide = ()=>{
        setCurrent(current === 0 ? length - 1 : current - 1);

    }

    return (
        <div className="slider">
            <ArrowBackIosIcon className="left-arrow" onClick={prevSlide}/>
            <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide}/>
            {slides.map((slide,index)=>{
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                       {index === currentt && <img src={slide.img} className="image"/>} 
                    </div>
                )

            })}
            
        </div>
    )
}

export default ImageSlider
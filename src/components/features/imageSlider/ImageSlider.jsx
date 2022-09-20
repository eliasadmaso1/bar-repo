import React, { useState } from 'react';
import './imageSlider.css';


function ImageSlider({slides}) {
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


        setTimeout(() => {
            nextSlide()
            
        }, 3000);
    


    return (
        <div className="gallery-slider">
            {slides.map((slide,index)=>{
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                       {index === current && <img src={slide.img} className={"gallery-img"} />} 
                    </div>
                )

            })}
            
        </div>
    )
}

export default ImageSlider

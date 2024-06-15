import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import './Home.css'

const Carousel = ({images}) => {

    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut =
            autoPlay &&
            setTimeout(() => {
                slideRight();
            }, 2500);
    });

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };
    console.log(current);


    return (
        <div>
            <div
                className="carousel"
                onMouseEnter={() => {
                    setAutoPlay(false);
                    clearTimeout(timeOut);
                }}
                onMouseLeave={() => {
                    setAutoPlay(true);
                }}
            >
                <div className="carousel_wrapper">
                    {

                        images.map((image, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        index == current
                                            ? "carousel_card carousel_card-active"
                                            : "carousel_card"
                                    }
                                >
                                    {/* <img className="card_image" src={image.image} alt="" />
                                    <div className="card_overlay">
                                        <h2 className="card_title">{image.title}</h2>
                                    </div> */}
                                        <div className="card">
                                        <div className="card-left">
                                            <div className="card-info">
                                            <h2>{image.title}</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate necessitatibus consectetur laudantium vero quo, ducimus quam, facere vitae ea blanditiis quas possimus magni. Odio?</p>
                                            <button>Know More</button>
                                            </div>
                                            
                                        </div>
                                        <div className="card-right">
                                            <img src={image.image} alt="" />
                                        </div>
                                    
                                        </div>
                                        
                                </div>
                            );
                        })
                    }
                    <div className="carousel_arrow_left" onClick={slideLeft}>
                        &lsaquo;
                    </div>
                    <div className="carousel_arrow_right" onClick={slideRight}>
                        &rsaquo;
                    </div>
                    <div className="carousel_pagination">
                        {images.map((_, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        index == current
                                            ? "pagination_dot pagination_dot-active"
                                            : "pagination_dot"
                                    }
                                    onClick={() => setCurrent(index)}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
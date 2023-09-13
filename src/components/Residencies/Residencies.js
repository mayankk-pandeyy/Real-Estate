import "./Residencies.css"
import data from "../../utils/slider.json"
import { sliderSettings } from "../../utils/common";
import React from "react";
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import SliderButtons from "./SliderButtons";


function Residencies(){


    return (
        <div>
            <section className="r-wrapper">
                <div className="paddings innerWidth r-container">
                    <div className="r-head-head">
                        <div className="flexColStart r-head">
                            <span className="orangeText">Best Choices</span>
                            <span className="primaryText">Popular Residencies</span>
                        </div>
                    </div>
                    <Swiper {...sliderSettings}>
                        <SliderButtons></SliderButtons>
                        {
                            data.map((card, i) => {
                                return <SwiperSlide key={i}>
                                    <div className="flexColStart r-card">
                                        <img src={card.image} alt="Home.Image"/>
                                        <span className="secondaryText r-price">
                                            <span style={{color:"orange"}}>$</span>
                                            <span>{card.price}</span>
                                        </span>
                                        <span className="primaryText">{card.name}</span>
                                        <span className="secondaryText">{card.detail}</span>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </section>
        </div>
    );


}

export default Residencies;
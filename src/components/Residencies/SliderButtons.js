import { useSwiper } from "swiper/react";
import "./SliderButtons.css"



function SliderButtons(){


    const swiper = useSwiper();


        return (
            <div className="flexCenter r-buttons">
                <button onClick={()=> swiper.slidePrev()}>&lt;</button>
                <button onClick={()=> swiper.slideNext()}>&gt;</button>
            </div>
        );

}

export default SliderButtons;
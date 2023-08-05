import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ChocoCher from "../Assets/Images/Chocolate Cherry.jpg";
import CherCups from "../Assets/Images/Cherry Cupcakes.jpg";
import StrawCups from "../Assets/Images/Strawberry Cupcakes.jpg";
import Yeehaw from "../Assets/Images/Yeehaw cake.jpg";
import "./CakeCard.css"


function CakeCard() {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}
        interval={5000} showStatus={false} showThumbs={false} className="carousel">
            <div className="cake1">
                <img src={ChocoCher} alt="A Chocolate Cherry cake with white icing and a  chocolate drizzle" />
                <p>A Chocolate Cherry cake with white icing and a  chocolate drizzle</p>
            </div>
            <div className="cake2">
                <img src={CherCups} alt="An arial view of 24 chocolate cupcakes topped with white icing and a cherry"/>
                <p>An arial view of 24 chocolate cupcakes topped with white icing and a cherry</p>
            </div>
            <div className="cake3">
                <img src={StrawCups}  alt="An arial view of 24 chocolate cupcakes topped with white icing and a strawberry"/>
                <p>An arial view of 24 chocolate cupcakes topped with white icing and a strawberry</p>
            </div>
            <div className="cake4">
                <img src={Yeehaw} alt="A pink sheet cake that says yeehaw in the center"/>
                <p>A pink sheet cake that says yeehaw in the center</p>
            </div>
        </Carousel>
    )
}

export default CakeCard
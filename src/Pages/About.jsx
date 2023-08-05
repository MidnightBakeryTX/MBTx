import React from "react";
import './About.css';
import Sara from '../Assets/Images/Sara Baldock.jpg';
import ChocoCherr from "../Assets/Images/Chocolate Cherry.jpg";
import StrawCup from "../Assets/Images/Strawberry Cupcakes.jpg";
import Yeehaw from "../Assets/Images/Yeehaw cake.jpg";

function About() {
    return (
        <div className="main">
            <h2 className="aboutHead">About</h2>
            <div className="meSection">
                <div className="aboutMe">
                    <h3>Sara</h3>
                    <p>Life is what you bake it!
                        <br />
                        <br />
                        I am a 26 year old baker who enjoys spending time with family, friends and her cat! My favorite cake is chocolate on chocoalte and my dream is to own a little bakery cafe in the mountains!
                    </p>
                </div>
                <img className="sara" src={Sara} alt="Sara Baldock with blue, yellow and red lighting shadows" />
            </div>
            <img className="CCC" src={ChocoCherr} alt="A chocolate cake with white icing and dark red cherries and a chocolate drizzle on top" />
            <div className="aboutMB">
                <h3>Midnight Bakery</h3>
                <p>Like a lot of hobbies, MB began during the lockdown of 2020.
                    <br />
                    <br />
                    It slowly grew into a full-time gig and now it's what I do for a living! MB has brought so much joy to my life and my customers lives. I hope you stick around a while and try a treat!</p>
            </div>
            <img className="SBCC" src={StrawCup} alt="24 chocolate cupcakes with a white icing, chocolate drizzle and strawberries on top" />
            <p className="quote">
                “A bad day spent baking is better than a good day doing anything else!”
            </p>
            <img className="CGC" src={Yeehaw} alt="A pink cake with a white icing border, icing flowers in the top left and bottom right corners and the word yeehaw! in the center" />

        </div>
    )

}

export default About;
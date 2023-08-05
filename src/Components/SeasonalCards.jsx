import React from "react";
import './SeasonalCards.css'
import StrawSC from '../Assets/Images/Strawberry-Shortcake.jpeg';
import SmoresCC from '../Assets/Images/Smore-Cupcake.jpeg';
import CoconutCake from '../Assets/Images/Coconut-Cake.jpeg';
import LemonBars from '../Assets/Images/Lemon-Bars.jpeg'

function SeasonalCards() {
    return (
        <div className="seasonalCakes">
            <div className="strawberryShortcake">
                <img src={StrawSC} alt="A Chocolate Cherry cake with white icing and a chocolate drizzle" />
                <div className="description">
                    <p className="cakeName">Strawberry Shortcake</p>
                    <p className="cakePrice">$25.00</p>
                </div>
            </div>
            <div className="smoresCupcakes">
                <img src={SmoresCC} alt="An arial view of 24 chocolate cupcakes topped with white icing and a cherry" />
                <div className="description">
                    <p className="cakeName">Smore's Cupcakes (12)</p>
                    <p className="cakePrice">$40.00</p>
                </div>
            </div>
            <div className="coconutCake">
                <img src={CoconutCake} alt="An arial view of 24 chocolate cupcakes topped with white icing and a strawberry" />
                <div className="description">
                    <p className="cakeName">Coconut Cake</p>
                    <p className="cakePrice">$50.00</p>
                </div>
            </div>
            <div className="lemonBars">
                <img src={LemonBars} alt="A pink sheet cake that says yeehaw in the center" />
                <div className="description">
                    <p className="cakeName">Lemon Bars</p>
                    <p className="cakePrice">$35.00</p>
                </div>
            </div>
        </div>
    )

}

export default SeasonalCards;
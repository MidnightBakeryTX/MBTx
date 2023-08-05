import React from "react";
import './Menu.css'
import CakeCard from "../Components/CakeCard";

function Menu() {
    return (
        <div className="main">
            <CakeCard />
            <h2 className="menuHead">Menu</h2>
            <div className="topContainer">
                <div className="flavors">
                    <h3>Flavors:</h3>
                    <p className="flavor">
                        Devils Food Cake<br />
                        Carrot Cake<br />
                        Confetti<br />
                        Strawberry<br />
                        Vanilla<br />
                        White</p>
                </div>
                <div className="frostings">
                    <h3>Frostings:</h3>
                    <p className="frosting">
                        Butter Cream<br />
                        Whipped<br />
                        Cream Cheese<br />
                    </p>
                </div>
            </div>
            <div className="midContainer">
                <div className="cakes">
                    <h3>Cakes:</h3>
                    <div className="cake">
                        <p>
                            6in Round<br />
                            8in Round<br />
                            10in Round<br />
                        </p>
                        <p>
                            $35.00<br />
                            $50.00<br />
                            $70.00<br />
                        </p>
                    </div>

                </div>
                <div className="cupcakes">
                    <h3>Cupcakes:</h3>
                    <div className="cupcake">
                        <p>
                            6 Cupcakes<br />
                            12 Cupcakes<br />
                            24 Cupcakes<br />
                        </p>
                        <p>
                            $15.00<br />
                            $30.00<br />
                            $60.00<br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottomContainer">
                <h3>Numbered Cakes:</h3>
                <div className="numbers">
                    <div className="digits">
                        <p>
                            Single Digit<br />
                            Double Digit<br />
                        </p>
                        <p>
                            $35.00<br />
                            $50.00<br />
                        </p>

                    </div>
                </div>
            </div>
            <div className="disclaimer">
                <p>*Gluten Free options available for all flavors!*</p>
            </div>
        </div>
    )

}

export default Menu;
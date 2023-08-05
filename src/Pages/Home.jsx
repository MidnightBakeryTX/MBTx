import React from "react";
import './Home.css'
import SeasonalCards from "../Components/SeasonalCards";

function Home() {
    return (
        <div className="main">
            <h2 className="seasonHead">Seasonal Menu</h2>
            <h3 className="season">Summer</h3>
            <SeasonalCards />
        </div>
    )

}

export default Home;
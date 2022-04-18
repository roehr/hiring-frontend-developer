import * as React from "react";
import hero1 from "../assets/exercismhero1.png"
import hero2 from "../assets/exercismhero2.png"
import "./Hero.css"
const Hero = () => {
    return <div className="hero">
        <div className="hero-icon">
            <img src={hero1}/>
        </div>
        <div className="hero-text">
            <h2>Testimonials I've left</h2>
        </div>
        <div className="hero-line">
            <img src={hero2}/>
        </div>
    </div>
}
export {Hero}


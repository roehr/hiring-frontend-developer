import * as React from "react";
import hero1 from "./assets/exercismhero1.png"
import hero2 from "./assets/exercismhero2.png"
const Headline = () => {
    return <div className="m-headline">
        <div className="m-header-icon">
            <img src={hero1}/>
        </div>
        <div className="m-header-text">
            <h2>Testimonials I've left</h2>
        </div>
        <div className="m-header-line">
            <img src={hero2}/>
        </div>
    </div>
}

export {Headline}


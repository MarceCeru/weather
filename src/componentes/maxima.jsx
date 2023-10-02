import React from "react";
import sol from './Frame 6.png';
import jsonData from './data.json';

export default function Maxima() {
    return(
        <div class='maxima'> 
            <h1>{jsonData["daily"]["temperature_2m_max"][0]} C</h1>
            <h6>Maxima</h6>
            <img src={sol} alt="" width='28px' height='28px'/>
        </div>
    )
}
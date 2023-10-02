
import React from "react";
import Luna from './Frame 7.png';
import dataJson from "./data.json";

export default function Minima(){
    return(
        <div class='minima'>
        <h1>
        {dataJson["daily"]["temperature_2m_min"][0]} C
        </h1>
           <h6>Minima</h6>
           <img src={Luna} alt="" width='25px' height='25px' />
        </div>
    )
 }
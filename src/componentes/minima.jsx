
import React from "react";
import Luna from './Frame 7.png';

export default function Minima({minima}){
    return(
        <div className='minima'>
        <h1>
        {minima}°
        </h1>
           <h6>Minima</h6>
           <img src={Luna} alt="" width='25px' height='25px' />
        </div>
    )
 }
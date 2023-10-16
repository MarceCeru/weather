import React from "react";
import sol from './Frame 6.png';

export default function Maxima({maxima}) {
  console.log(maxima)
    return(
        <div className='maxima'> 
            <h1>{maxima}</h1>
            <h6>Maxima</h6>
            <img src={sol} alt="" width='28px' height='28px'/>
        </div>
    )
}
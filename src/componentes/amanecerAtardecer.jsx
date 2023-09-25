import React from "react";
import sunset from './Sunset blur (Community).png';

export default function AmanecerAtardecer(){
    return(
        <div class='amanecer'>
            <h5>Amanecer  07.06 </h5>
            <img src={sunset} alt="" width='60px' height='40px'/>
            <h5>Atardecer   19.12</h5>
        </div>

    )
}
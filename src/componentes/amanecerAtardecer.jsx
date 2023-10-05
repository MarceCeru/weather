import React from "react";
import sunset from './Sunset blur (Community).png';

export default function AmanecerAtardecer({amanecer, atardecer}){
 let cadena1 = (amanecer).slice(11);
 let cadena2 = (atardecer).slice(11);
 console.log(cadena2);
 console.log(cadena1);
    return(
        <div className='amanecer'>
            <h5>Amanecer {cadena1}</h5>
            <img src={sunset} alt="" width='60px' height='40px'/>
            <h5>Atardecer {cadena2}</h5>
        </div>

    )
}
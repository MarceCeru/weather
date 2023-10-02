import React from "react";
import sunset from './Sunset blur (Community).png';
import jsonData from './data.json'

export default function AmanecerAtardecer(){
 let cadena1 =(jsonData['daily']['sunrise'])[0].slice(11);
 let cadena2 = (jsonData['daily']['sunset'])[0].slice(11)
 console.log(cadena2);
 console.log(cadena1);
    return(
        <div class='amanecer'>
            <h5>Amanecer {cadena1}</h5>
            <img src={sunset} alt="" width='60px' height='40px'/>
            <h5>Atardecer {cadena2}</h5>
        </div>

    )
}
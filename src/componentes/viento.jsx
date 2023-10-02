import React from "react";
import viento from './3D Ico_23.png';
import jsonData from './data.json'


export default function Viento(){
    return(
        <div class='viento'>
           <h5>viento (km/h)</h5>
            <h1>{jsonData["hourly"]["windspeed_10m"][17]}</h1>
           <img src={viento} alt="" width='20px' height='20px'/>
          
        </div>
    )
}
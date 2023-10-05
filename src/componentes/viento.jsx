import React from "react";
import vientos from './3D Ico_23.png';



export default function Viento({viento}){
    return(
        <div className='viento'>
           <h5>viento (km/h)</h5>
            <h1>{viento}</h1>
           <img src={vientos} alt="" width='20px' height='20px'/>
          
        </div>
    )
}
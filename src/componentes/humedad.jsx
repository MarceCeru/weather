import React from "react";
import gota from './WeatherIcon - 1-17.png'

export default function Humedad({humedad}){
  return(
    <div className='humedad'>
        <h5>humedad</h5>
        <h1>{humedad} %</h1>
        <img src={gota} alt="" width='28px' height='28px'/>
    </div>
  )
}
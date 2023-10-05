import React from "react";
import jsonData from './data.json'

export default function Humedad({humedad}){
  return(
    <div className='humedad'>
        <h5>humedad</h5>
        <h1>{humedad} %</h1>
        <h4>Normal</h4>
    </div>
  )
}
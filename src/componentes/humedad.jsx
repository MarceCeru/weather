import React from "react";
import jsonData from './data.json'

export default function Humedad(){
  return(
    <div class='humedad'>
        <h5>humedad</h5>
        <h1>{jsonData["hourly"]["relativehumidity_2m"][12]} %</h1>
        <h4>Normal</h4>
    </div>
  )
}
import React from "react"
import jsonData from './data.json'


export default function Grados(){
    return(
        <div class="grados">
            <h1>{jsonData["hourly"][ "temperature_2m"][17]}°</h1>
        </div>
    )
}
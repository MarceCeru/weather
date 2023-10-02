import React from "react";
import jsonDate from './data.json'

export default function IndiceUV (){
    return(
<div class="recuadro">
    <h5>IndiceUV</h5>
    <h1>{jsonDate["daily"][ "uv_index_max"]}</h1>
    <p>bajo</p>
</div>
    )
}


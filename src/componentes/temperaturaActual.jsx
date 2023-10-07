import React from "react";
//import Imagenes from "./graficos";
import nublado from './cloudy.png';

 

export default function TemperaturaActual({codigo}){

    function ImagenTiempo(codigo){
        if (codigo='3'){
            return(
                <div >
                    <img src={nublado} alt="" width='160px' height='160px'/>
                    <h5>Nublado</h5>
                </div>
            )
        }else{
            return(
                <>
                <h1>Hola mundo</h1>
                </>
            )
        }
        }     


    return(
        <div className='temperatura'>    
            <h3>Lunes, 17:00</h3>
            <ImagenTiempo/>
        </div>
        

    )
}
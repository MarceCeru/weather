import React from "react";
import nublado from './cloudy.png';
import despejado from './clear-day.png';
import parcialNublado from './partly-cloudy-day.png'
import lluvia from './heavy-showers (1).png'
import nieve from './snow.png'


export default function TemperaturaActual({codigo}){

    function ImagenTiempo(){
        if(codigo === 0){
            return(
                <div>
                    <img src={despejado} alt=""width='200px' height='200px'/>
                    <h5>despejado</h5>
                </div>
            )
        }else if(codigo === 1){
            return(
                <div>
                    <img src={parcialNublado} alt="" width='200px' height='200px'/>
                    <h5>parcialmente nublado</h5>
                </div>
            )
        }else if(codigo === 2){
            return(
                <div>
                    <img src={parcialNublado} alt="" width='200px' height='200px'/>
                    <h5>parcialmente nublado</h5>
                </div>
            )
            }else if(codigo === 3){
            return(
                <div >
                    <img src={nublado} alt="" width='200px' height='200px'/>
                    <h5>Nublado</h5>
                </div>
            )
        }else if(codigo === 45 || codigo === 48){
            return(
                <div >
                    <img src={parcialNublado} alt="" width='200px' height='200px'/>
                    <h5>Niebla</h5>
                </div>
            )
        }else if(codigo === 51 || codigo === 53 || codigo === 55 ){
            return(
                <div >
                    <img src={lluvia} alt="" width='200px' height='200px'/>
                    <h5>Llovisna</h5>
                </div>
            )
        }else if(codigo === 61 || codigo === 63 || codigo === 65){
            return(
                <div >
                    <img src={lluvia} alt="" width='200px' height='200px'/>
                    <h5>Lluvia</h5>
                </div>
            )
            }else if(codigo === 71 || codigo === 73 || codigo === 75){
                return(
                    <div >
                        <img src={nieve} alt="" width='200px' height='200px'/>
                        <h5>Nieve</h5>
                    </div>
                )
            }else if(codigo === 80){
                return(
                    <div>
                        <img src={lluvia} alt="" width='200px' height='200px'/>
                        <h5>Tormenta</h5>
                    </div>
                )
            
            }else {
            return(
                <>
                <h1>S/D</h1>
                </>
            )
        }
        }     


    return(
        <div className='temperatura'>    
         
            <ImagenTiempo/>
        </div>
        

    )
}
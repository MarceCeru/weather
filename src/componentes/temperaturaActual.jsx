import React from "react";
import nublado from './cloudy.png';
import despejado from './clear-day.png';
import parcialNublado from './partly-cloudy-day.png'
import lluvia from './heavy-showers (1).png'
import nieve from './snow.png'


export default function TemperaturaActual({codigo, dia}){

    let fecha = (dia).slice(0,10);

    function ImagenTiempo(){
        if(codigo === 0){
            return(
                <div>
                    <h5>{fecha} despejado</h5>
                    <img src={despejado} alt=""width='200px' height='200px'/>
                </div>
            )
        }else if(codigo === 1){
            return(
                <div>
                    <h5>{fecha} parcialmente nublado</h5>
                    <img src={parcialNublado} alt="" width='200px' height='200px'/>
                </div>
            )
        }else if(codigo === 2){
            return(
                <div>
                      <h5>{fecha} parcialmente nublado</h5>
                    <img src={parcialNublado} alt="" width='200px' height='200px'/>
                </div>
            )
            }else if(codigo === 3){
            return(
                <div >
                     <h5>{fecha} Nublado</h5>
                    <img src={nublado} alt="" width='200px' height='200px'/>  
                </div>
            )
        }else if(codigo === 45 || codigo === 48){
            return(
                <div >
                    <h5>{fecha} Niebla</h5>
                    <img src={parcialNublado} alt="" width='200px' height='200px'/>
                </div>
            )
        }else if(codigo === 51 || codigo === 53 || codigo === 55 ){
            return(
                <div >
                    <h5>{fecha} Llovisna</h5>
                    <img src={lluvia} alt="" width='200px' height='200px'/>
                </div>
            )
        }else if(codigo === 61 || codigo === 63 || codigo === 65){
            return(
                <div >
                     <h5>{fecha} Lluvia</h5>
                    <img src={lluvia} alt="" width='200px' height='200px'/>
                </div>
            )
            }else if(codigo === 71 || codigo === 73 || codigo === 75){
                return(
                    <div >
                        <h5>{fecha} Nieve</h5>
                        <img src={nieve} alt="" width='200px' height='200px'/>
                    </div>
                )
            }else if(codigo === 80){
                return(
                    <div>
                        <h5>{fecha} Tormenta</h5>
                        <img src={lluvia} alt="" width='200px' height='200px'/>
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
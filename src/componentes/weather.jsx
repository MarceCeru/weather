//import './App.css';
import React from 'react';
import Humedad from './humedad';
import IndiceUV from './indiceUV';
import Viento from './viento';
import AmanecerAtardecer from './amanecerAtardecer';
import Visibilidad from './visibilidad';
import CalidadDelAire from './calidadDelAire';
import Maxima from './maxima';
import Minima from './minima';
import TemperaturaActual from './temperaturaActual';
import TemperaturaDelDIa from './temperaturaDelDia';
import Grados from './gradosActuales';


function Weather() {
  return (
    <div className="App">

  

    <div id='temperatura'>
      <TemperaturaActual/>
      <TemperaturaDelDIa/>
    </div>

    <div id='primerfila'>
      <Grados/>
      <IndiceUV />
      <Viento/>
      <Humedad/>
    </div>

    <div id='segundafila'>
      <Maxima/>
      <Minima/>
      <AmanecerAtardecer/>
      <Visibilidad/>
      <CalidadDelAire/>
    </div>

    </div>
  );
}

export default Weather;

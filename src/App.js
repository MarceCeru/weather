import './App.css';
import Weather from './componentes/weather';
//import * as React from 'react'
import { MapContainer } from 'react-leaflet';
import Transito from './componentes/Transito';

  
function App(){
  return(
    <div id='proyectos'>
    <Weather/>
    <Transito/>
    </div>
  )
}
/*
import Humedad from './componentes/humedad';
import IndiceUV from './componentes/indiceUV';
import Viento from './componentes/viento';
import AmanecerAtardecer from './componentes/amanecerAtardecer';
import Visibilidad from './componentes/visibilidad';
import CalidadDelAire from './componentes/calidadDelAire';
import Maxima from './componentes/maxima';
import Minima from './componentes/minima';
import TemperaturaActual from './componentes/temperaturaActual';
import TemperaturaDelDIa from './componentes/temperaturaDelDia';
import Imagenes from './componentes/graficos';


function App() {
  return (
    <div className="App">

    <div>
     
    </div>

    <div id='temperatura'>
      <TemperaturaActual/>
      <TemperaturaDelDIa/>
    </div>

    <div id='primerfila'>
      <Imagenes/>
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
}*/

export default App;

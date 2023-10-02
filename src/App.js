import './App.css';
//import { ChakraBaseProvider } from '@chakra-ui/react';
import Weather from './componentes/weather';
//import * as React from 'react'

function App(){
  return(
   // <ChakraBaseProvider>
    <div id='proyectos'>
      <Weather/>
    </div>
   // </ChakraBaseProvider>
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
